# Use uma imagem base do Node.js
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json dos dois projetos para o diretório de trabalho
COPY ./api/package*.json ./api/
COPY ./web/package*.json ./web/

# Instale as dependências de ambos os projetos
RUN cd ./api && npm install
RUN cd ./web && npm install

# Copie o restante dos arquivos dos dois projetos para o diretório de trabalho
COPY ./api ./api/
COPY ./web ./web/

# Exponha as portas das duas aplicações
EXPOSE 3000
EXPOSE 5173

# Comando para iniciar as duas aplicações
CMD npm run dev && npm run dev .web
