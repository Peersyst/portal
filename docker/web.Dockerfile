FROM node:20.9.0 as base
WORKDIR /project
COPY ["package.json", "yarn.lock", "nx.json", ".prettierrc", "./"]
COPY packages /project/packages
# Install root dependencies
RUN yarn install
# Install all packages and build them
RUN yarn build:packages:ci
# Copy all files
COPY ["apps/web/package.json", "apps/web/yarn.lock", "./apps/web/"]


FROM base as dev-dependencies
WORKDIR /project/apps/web
RUN yarn install
COPY apps/web/. /project/apps/web


FROM dev-dependencies as integration
RUN yarn lint
RUN yarn test:ci
RUN touch test.lock


FROM dev-dependencies as build
# Config env vars
ARG AWS_REGION="eu-west-1"
ENV AWS_REGION=$AWS_REGION
ARG AWS_ACCESS_KEY_ID="AKIAUH43WJUPDRHFTFRW"
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY="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"
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ARG APP_CONFIG_IDENTIFIER="8xn3in0"
ENV APP_CONFIG_IDENTIFIER=$APP_CONFIG_IDENTIFIER
ARG APP_CONFIG_PROFILE_IDENTIFIER="zwfhzzh"
ENV APP_CONFIG_PROFILE_IDENTIFIER=$APP_CONFIG_PROFILE_IDENTIFIER
ARG APP_CONFIG_ENVIRONMENT_IDENTIFIER="cqqphfj"
ENV APP_CONFIG_ENVIRONMENT_IDENTIFIER=$APP_CONFIG_ENVIRONMENT_IDENTIFIER

RUN DISABLE_ESLINT_PLUGIN=true yarn build

FROM nginx:latest as release
COPY --from=integration /project/apps/web/test.lock /
COPY --from=build /project/apps/web/build /usr/share/nginx/html/
COPY <<EOF /etc/nginx/templates/default.conf.template
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;
    location / {
        root   /usr/share/nginx/html;
        try_files \$uri \$uri/ /index.html;
    }
}
EOF
