1. Crear la carpeta general del proyecto.
2. Iniciar un proyecto de frontend con Vite, en la carpeta frontend.
3. npm init -y para iniciar proyecto de node.
4. npm i multer mongoose jsonwebtoken express dotenv cors cookie-parser bcrypt concurrently, npm install --save express-async-handler, npm i formidable para instalar las dependencias del backend.
5. npm i slick-carousel react-slick react-toastify react-router react-router-dom react-redux react-icons apexcharts react-apexcharts moment flowbite axios @reduxjs/toolkit @paypal/react-paypal-js
6. Limpiar el frontend que trae vite por defecto
7. en los scripts del package.json: "start": "node --watch backend/index.js"
8. Crear la estructura de carpetas para el backend
9. En el package.json: "type": "module",

## DOCKER MONGO:

1. Tener instalado docker desktop y en consola: docker pull mongo
2. docker run --name mongodb_container -d -p 27018:27017 mongo

# Tailwind

1.  npm install -D tailwindcss postcss autoprefixer
2.  npx tailwindcss init -p
3.  En tailwind.config.js:
    /** @type {import('tailwindcss').Config} \*/
    export default {
    content: [
    "./index.html",
    "./src/**/\*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }
4.  En /src crear index.css:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

5.  En main.jsx importar el index.css
6.  Agregar codigo de tailwind al app.jsx y comprobar
