FROM node:20.9.0 as base
WORKDIR /project
COPY ["package.json", "yarn.lock", "nx.json", ".prettierrc", "./"]
COPY packages /project/packages
# Install root dependencies
RUN yarn install
# Install all packages and build them
RUN yarn build:packages:ci
# Copy all files
COPY ["apps/api/package.json", "apps/api/yarn.lock", "nx.json", ".prettierrc", "./apps/api/"]


FROM base as dev-dependencies
WORKDIR /project/apps/api
RUN yarn install --frozen-lockfile
COPY apps/api/. /project/apps/api


FROM base as prod-dependencies
ENV NODE_ENV=production
WORKDIR /project/apps/api
RUN yarn install --frozen-lockfile
COPY apps/api/. /project/apps/api


FROM dev-dependencies as test
RUN yarn lint
RUN yarn test
RUN touch test.lock


FROM prod-dependencies as build
RUN yarn build
RUN touch build.lock


FROM build as integration
COPY --from=test /project/apps/api/test.lock /app/test.lock


FROM node:20.10.0 as release
ENV NODE_ENV=production
WORKDIR /app

RUN apt-get update
RUN apt-get install -y wget gnupg
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update
RUN apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 --no-install-recommends
RUN rm -rf /var/lib/apt/lists/*

COPY --from=test /project/apps/api/test.lock /app/test.lock
COPY --from=build /project/apps/api/dist /app/dist
COPY --from=build /project/apps/api/templates /app/templates
COPY --from=build /project/apps/api/files /app/files
COPY --from=build /project/apps/api/node_modules /app/node_modules

CMD [ "/app/dist/src/main" ]
