# Etapa 1: Compilación del sitio
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run docs:build

# Etapa 2: Servidor web ultraligero
FROM nginx:alpine

# Copiar el resultado de la compilación
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]