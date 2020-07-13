const express = require ('express'); //Requiero express
const router = require('./routes/home');

const app = express(); // Asigno a la variable app la ejecución de express

app.listen(3030, ()=>console.log('El servidor està levantado en el puerto 3030')); //Levanto el servidor

//Aqui debo requerir todas las rutas

const rutaHome = require('./routes/home');

const rutaSucursales = require('./routes/sucursales');

const rutaMarcas = require('./routes/marcas');

const rutaAutos = require('./routes/autos');

app.use('/', rutaHome);

app.use('/sucursales', rutaSucursales);

app.use('/marcas', rutaMarcas);

app.use('/autos', rutaAutos);


