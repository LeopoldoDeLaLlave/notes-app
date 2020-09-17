//Código del servidor con Express
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');


//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'  
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//Convierte los datos de formulario en JSon
app.use(methodOverride('_method'));


//Global variables

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;