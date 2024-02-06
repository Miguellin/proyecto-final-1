const express = require('express');

// express tiene in metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion (Localhost:3100/)
const router = express.Router();

// requerimos todos losroutes o rutas de nuestra app
const users = require('../components/user/router.js');

//esta funcion define nuestras rutas de la API que me permitan conectar mi parte visual (html) con mi servidor (nodejs)
function routerAPI(app) {
    app.use('/api/v1', router);
    router.use('/users',users)
};

// vamos a exportar nuestra funcion para utilizarla en nuestro index.js principal del server

module.exports = routerAPI;