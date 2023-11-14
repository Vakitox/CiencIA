const express = require('express');
const router = express.Router();

const passport = require('passport');

const { noestaLogeado } = require('../lib/auth');

//Página de Inicio de Sesión

router.get('/sesion', noestaLogeado, (req, res) => {
    res.render('auth/sesion');
});

//Instrucciones para Logeo

/*router.post('/login', (req, res) => {
    passport.authenticate('local.login', {
        successRedirect: '/profile',
        failureRedirect: '/sesion'
    })
});*/



router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/matrices',
        failureRedirect: '/sesion',
        failureFlash: true
    })(req, res, next);
});

    router.get("/logout", (req, res, next) => {
        req.logOut(req.user, err => {
            if(err) return next(err);
            res.redirect("/sesion");  
        });
    });



//Instrucciones para Registro

router.post('/registro', passport.authenticate('local.registro', {
    successRedirect: '/matrices',
    failureRedirect: '/sesion',
    failureFlash: true
}));


    
//

module.exports = router;

/*OPCIONAL 
router.post('/registro', async (req, res) => {
    const permisos = 1;
    const { nombres, apellidos, universidad, carrera, correo, contrasena } = req.body;
    const newLink = { 
        nombres,
        apellidos,
        universidad,
        carrera,
        correo,
        contrasena,
        permisos
    };
    await db.query('INSERT INTO Usuarios set ?', [newLink]);
    res.redirect('/');
});

/*router.post('/login', (req, res) =>{
    passport.authenticate('local.login', {
        successRedirect: '/profile',
        failureRedirect: '/sesion'
    })
    res.send('recibido');
});*/
