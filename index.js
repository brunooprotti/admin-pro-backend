//Declaraciones e importaciones
require('dotenv').config(); //TRAEMOS EL DOTENV PARA LAS VARIABLES DE ENTORNO Y LAS CONFIGURAMOS

const express = require('express');//Express 
const cors = require('cors'); //El CORS nos sirve para hacer configuraciones de recibir peticiones de distintos dominios o restringirlas.
const { dbConnection } = require('./database/config');



//Crear el servidor express
const app = express();

//Configurar CORS

app.use(cors());//Esto es un middleware, es decir una funcion que se va a ejecutar para todas las func que siguen hasta abajo.

//Base de datos 
dbConnection();

// brunoox
// brunito99

//Rutas
app.get( '/', ( req, resp ) => {

    resp.json({
        "ok": true,
        "msg": "Hola Mundo"
    })

});

app.listen( process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)//process.env -->  es donde estan todas las variables de entorno
});