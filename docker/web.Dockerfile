FROM node:20.9.0 AS base
WORKDIR /project
# Install pnpm
RUN npm install -g pnpm@9.7.0
# Install package and app dependencies
COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
COPY "apps/web/package.json" "./apps/web/package.json"
COPY packages /project/packages
RUN pnpm install
COPY ["turbo.json", ".prettierrc", ".prettierrc", "./"]
# Run build packages
RUN pnpm run build:packages
# Run linting
RUN pnpm run lint:packages
# Run testing
RUN pnpm run test:packages

FROM base AS integration
COPY apps/web /project/apps/web
# Build api
RUN npx turbo run build --filter=web...
# Lint api
RUN npx turbo run lint --filter=web...
# Test api
RUN npx turbo run test --filter=web...
# Config env vars
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
