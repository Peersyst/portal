FROM node:20.9.0 AS base
WORKDIR /project
# Install pnpm
RUN npm install -g pnpm@9.7.0

# Copy project files
COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
COPY ["turbo.json", ".prettierrc", "./"]
# Include packages
COPY packages /project/packages
# Include scripts to build artifacts
COPY scripts /project/scripts
# Install package dependencies
RUN pnpm install

# Build and dist packages
RUN pnpm run dist
# Lint packages
RUN pnpm run lint:packages
# Test packages
RUN pnpm run test:packages

FROM base AS integration
# Config env vars
ARG AWS_REGION="eu-west-1"
ENV AWS_REGION=$AWS_REGION
ARG AWS_ACCESS_KEY_ID="AKIAUH43WJUPDRHFTFRW"
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY="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"
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ARG APP_CONFIG_IDENTIFIER="i2064wd"
ENV APP_CONFIG_IDENTIFIER=$APP_CONFIG_IDENTIFIER
ARG APP_CONFIG_PROFILE_IDENTIFIER="ub9h0lc"
ENV APP_CONFIG_PROFILE_IDENTIFIER=$APP_CONFIG_PROFILE_IDENTIFIER
ARG APP_CONFIG_ENVIRONMENT_IDENTIFIER="v40zhmn"
ENV APP_CONFIG_ENVIRONMENT_IDENTIFIER=$APP_CONFIG_ENVIRONMENT_IDENTIFIER

# Include web
COPY apps/web /project/apps/web
# Install web dependencies
RUN pnpm install

WORKDIR /project/apps/web
# Build web
RUN pnpm build
# Lint web
RUN pnpm lint
# Test web
RUN pnpm test

WORKDIR /project
# Isolate web and its dependencies
RUN pnpm --filter=web deploy --prod /artifacts

FROM nginx:latest AS release
COPY --from=integration /artifacts/dist /usr/share/nginx/html/
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
