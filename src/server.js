//Código del servidor con Express
const express = require('express');
const path = require('path');

//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({extended:false}));//Convierte los datos de formulario en JSon


//Global variables

//Routes
app.get('/', (req, res)=>{
    res.send('Hello world');
});

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;