FROM node:18.15.0 as base
WORKDIR /project
COPY ["package.json", "yarn.lock", "nx.json", ".prettierrc", "./"]
COPY packages /project/packages
# Install root dependencies
RUN yarn install
# Install all packages and build them
RUN yarn build:packages:ci
# Copy all files
COPY ["apps/mobile/package.json", "apps/mobile/yarn.lock", "nx.json", ".prettierrc", "./apps/mobile/"]


FROM base as dev-dependencies
WORKDIR /project/apps/mobile
RUN yarn install --frozen-lockfile
COPY apps/mobile/. /project/apps/mobile


FROM dev-dependencies as integration
RUN yarn lint
# RUN yarn test
RUN touch test.lock


FROM integration as release
ARG PROFILES=development
ARG BUILD_NUMBER=1
ARG EXPO_TOKEN
ENV EXPO_TOKEN=$EXPO_TOKEN
ENV EAS_NO_VCS=1

# Move local packages to mobile for eas build resolution
RUN cp -r /project/packages /project/apps/mobile/packages
RUN sed -i -e "s/file:..\/..\/packages/file:.\/packages/" package.json
# Set build number
RUN sed -i -e "s/__BUILD_NUMBER__/$BUILD_NUMBER/" eas.json

RUN <<EOT bash
IFS=',' read -r -a PROFILES_ARRAY <<< "$PROFILES"
for PROFILE in "\${PROFILES_ARRAY[@]}"
do
    npx eas-cli build --platform=all --auto-submit --profile=\$PROFILE --non-interactive --no-wait
done
EOT