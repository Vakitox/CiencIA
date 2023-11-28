const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../database');
const helpers = require('./helpers');

passport.use('local.login', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'contrasena',
    passReqToCallback: true
  }, async (req, correo, contrasena, done) => {
    const rows = await db.query('SELECT * FROM Usuarios WHERE Correo = ?', [correo]);
    if (rows.length > 0) {
      const user = rows[0];
      const validPassword = await helpers.matchPassword(contrasena, user.Contrasena);
      if (validPassword) {
        done(null, user, req.flash('bienvenido', 'Welcome ' + user.Nombres));

      } else {
        done(null, false, req.flash('error', 'Incorrect Password'));

      }
    } else {
      return done(null, false, req.flash('error', 'The Username does not exists.'));

    }

  }));

/*passport.use('local.login', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'contrasena',
    passReqToCallback: true
}, async (req,correo,contrasena, done) => {
    if(correo && contrasena){
        db.query('SELECT * FROM Usuarios WHERE correo = ?', [correo], async (error, result)=>{
            if(result.lenght == 0 || !(await bcrypt.compare(contrasena, result[0].contrasena))){
                res.send('USUARIO O PASSWORD INCORRECTA');
            }else{
                res.send('LOGIN CORRECTO')
            };
        })
    }
}));*/

passport.use('local.registro', new LocalStrategy({
  
  usernameField: 'correo',
  passwordField: 'contrasena',
  passReqToCallback: true
}, async (req, correo, contrasena, done) => {
  const permisos = 1;
  const { nombres, apellidos, pais, universidad, carrera } = req.body;
  const newUser = {
      nombres,
      apellidos,
      pais,
      universidad,
      carrera,
      correo,
      contrasena,
      permisos
  };
  newUser.contrasena = await helpers.encryptPassword(contrasena);
  console.log([newUser]);
  const result = await db.query('INSERT INTO Usuarios set ?', [newUser]);
  newUser.idUsuarios = result.insertId;

  return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.idUsuarios);
  });

passport.deserializeUser(async (id, done) => {
  const rows = await db.query('SELECT * FROM Usuarios WHERE idUsuarios = ?', [id]);
  done(null, rows[0]);
});