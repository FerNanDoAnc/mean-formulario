// Requerir express, morgan
const express=require('express')
const morgan = require('morgan')

// cors-aceptar peticiones de otros servidores
const cors = require('cors')

const app=express()

// ***********VARIABLES DE ENTORNO************
// Definir puerto
app.set('port', process.env.PORT || 4100);

app.use(cors());
app.use(morgan('dev'));
// entender json
app.use(express.json());
// entender html
app.use(express.urlencoded({ extended:false}));

// Rutas
app.use("/api/formularios", require('./routes/formularios.routes'));

// exportar app
module.exports = app;