const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars'); // Exphbs puesto como Engine.
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MySQLStore= require('express-mysql-session')(session);
const flash = require('connect-flash');
//const validator = require('express-validator');
const { database } = require('./keys');
const bodyParser = require('body-parser');

//Initializations
const app = express();
require('./lib/passport');

//Configuración
app.set('port', process.env.PORT || 6000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  defaultDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Session
app.use(session({
  secret: 'websession',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));

app.on("beforeunload", (req, res) => {
  // Borra la sesión del usuario
  req.logOut();
});

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Variables Globales
app.use((req, res, next) => {
  app.locals.bienvenido = req.flash('bienvenido');
  app.locals.error = req.flash('error');
  app.locals.user = req.user;
  next();
});


//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/',require('./routes/links'));

// Public
app.use(express.static(path.join(__dirname, 'resources'))); // Carpeta donde se aloja los archivos de Node.JS

//
const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("Ocurrió un error");
};

app.use(errorHandler);
app.on("error", errorHandler);

//Starting
app.listen(app.get('port'), () => {
  console.log('Servidor activo en puerto', app.get('port'));
});



/*
  //CONEXIÓN CON LA BASE DE DATOS //
  const db = mysql.createConnection({ 
    host: "bii9gnbbzrhldwjx589u-mysql.services.clever-cloud.com",
    user: "u7kfgoaru0i9dgho",
    password: "Q90ZGQqLgOUNjR2eLdtb",
    database: "bii9gnbbzrhldwjx589u"

    host: "localhost",
    user: "root", 
    password: "admin12345",
    database: "capstone"

  });

  db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
  });*/


  /*ACCIONES PARA ENVIAR DATOS A LA BASE DE DATOS

  app.post('/registrarUsuario', (req, res) => {
    const { Nombres, Apellidos, Universidad, Carrera, Correo, Password, Permisos } = req.body;

  const registro = 'INSERT INTO Usuarios (Nombres, Apellidos, Universidad, Carrera, Correo, Contrasena, Permisos) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(registro, [Nombres, Apellidos, Universidad, Carrera, Correo, Password, Permisos], (err, results) => {
    if (err) {
      console.error('Error al guardar los datos: ' + err.message);
      res.status(500).json({ error: 'Error al guardar los datos' });
      // En caso de tener un error la página se vuelve a cargar la DB
      db.connect((err) => {
        if (err) throw err;
        console.log("Connected to database");
      });
    } else {
      console.log('Datos guardados con éxito');
      res.json({ message: 'Datos guardados con éxito' });
      res.redirect('/index.html');
    }
  });

  //db.end();
  });*/