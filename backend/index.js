import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT;

connectDB();

//crea una nueva instancia de una aplicación Express. app contendrá todas las funciones y métodos necesarios para configurar y manejar rutas y middleware en tu aplicación.
const app = express();

//Este middleware permite que tu aplicación Express pueda analizar los datos que llegan en formato JSON en las solicitudes entrantes.
app.use(express.json());

// La opción extended: true permite que los datos analizados puedan contener cualquier tipo de dato
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.listen(port, () => console.log(`Server is running on port: ${port}`));
