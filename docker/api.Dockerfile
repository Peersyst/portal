ARG BASE_IMAGE=base
FROM ${BASE_IMAGE} as integration

COPY apps/api /project/apps/api
# Build api
RUN npx turbo run build --filter=api...
# Lint api
RUN npx turbo run lint --filter=api...
# Test api
RUN npx turbo run test --filter=api...
# Production build
RUN pnpm --filter=api deploy --prod /artifacts


FROM node:20.10.0 as release
ENV NODE_ENV=production
WORKDIR /app
COPY --from=integration /artifacts/dist /app/dist
COPY --from=integration /artifacts/node_modules /app/node_modules
CMD [ "/app/dist/src/main" ]
