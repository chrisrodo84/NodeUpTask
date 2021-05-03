const express = require('express');
const routes = require('./routes');

//Crear una app de express
const app = express();

app.use('/', routes());

//Se define puerto para correr app
app.listen(3000);