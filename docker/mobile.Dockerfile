ARG BASE_IMAGE=latest
FROM ${BASE_IMAGE} as integration

COPY apps/mobile /project/apps/mobile
# Build api
RUN npx turbo run build --filter=mobile...
# Lint api
RUN npx turbo run lint --filter=mobile...
# Test api
RUN npx turbo run test --filter=mobile...
# Deploy app
RUN pnpm --filter=web deploy --prod /artifacts


FROM integration as release
ARG PROFILES=development
ARG BUILD_NUMBER=1
ARG EXPO_TOKEN
ENV EXPO_TOKEN=$EXPO_TOKEN
ENV EAS_NO_VCS=1

# Set build number
RUN sed -i -e "s/__BUILD_NUMBER__/$BUILD_NUMBER/" eas.json

RUN <<EOT bash
IFS=',' read -r -a PROFILES_ARRAY <<< "$PROFILES"
for PROFILE in "\${PROFILES_ARRAY[@]}"
do
    npx eas-cli build --platform=all --auto-submit --profile=\$PROFILE --non-interactive --no-wait
done
EOT
