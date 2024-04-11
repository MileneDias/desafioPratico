#!/bin/bash

# Iniciar a API
cd .api
npm run start &

# Iniciar o servidor de desenvolvimento da Web
cd .web
npm run dev
