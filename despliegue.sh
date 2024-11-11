#!/bin/bash
# Verifica si se ha pasado un mensaje de commit
if [ -z "$1" ]; then
  echo "Por favor, proporciona un mensaje de commit."
  exit 1
fi

# Ejecuta los comandos
git add .
git commit -m "$1"
git push origin main
npm run deploy
