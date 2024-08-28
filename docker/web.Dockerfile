ARG BASE_TAG=latest
FROM ${BASE_IMAGE} as integration

COPY apps/web /project/apps/web
# Build api
RUN npx turbo run build --filter=web...
# Lint api
RUN npx turbo run lint --filter=web...
# Test api
RUN npx turbo run test --filter=web...
# Config env vars
RUN pnpm --filter=web deploy --prod /artifacts


FROM nginx:latest as release
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
