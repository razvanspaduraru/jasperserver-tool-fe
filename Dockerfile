# -----------------------------
# Etapa 1: build
# -----------------------------
FROM node:20 AS build

WORKDIR /app

# Copiem dependințele
COPY package*.json ./
RUN npm install

# Copiem codul sursă și build-uim aplicația
COPY . .
RUN npm run build

# -----------------------------
# Etapa 2: runtime (Nginx)
# -----------------------------
FROM nginx:stable-alpine

# Ștergem config-ul default și punem unul custom (opțional)
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html

# expunem portul standard
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
