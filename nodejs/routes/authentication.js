const express = require('express');
const router = express.Router();
const db = require('../database');
const passport = require('passport');

const { noestaLogeado } = require('../lib/auth');

//Página de Inicio de Sesión

router.get('/sesion', noestaLogeado, (req, res) => {
    res.render('auth/sesion');
});

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

//Registro

router.post('/registro', passport.authenticate('local.registro', {
    successRedirect: '/matrices',
    failureRedirect: '/sesion',
    failureFlash: true
}));

//Registro de Matriz de Brechas

router.post('/guardar-datos-matriz-analisis', async (req, res) => {
    let investigaciones = [];
  
    for (let i = 1; i <= 5; i++) {
        const nombreInvestigacion = "'" + req.body[`Nombre_investigacion_${i}`] + "'";
        const doi = "'" + req.body[`Doi_${i}`] + "'";
        const cuartil = "'" + req.body[`Cuartil_${i}`] + "'";
        const tipoBrecha = "'" + req.body[`Tipo_brecha_${i}`] + "'";
        const brechasInvestigacion = "'" + req.body[`Brechas_inves_${i}`] + "'";
        const resumen = "'" + req.body[`Resumen_${i}`] + "'";
        const conclusiones = "'" + req.body[`Conclusiones_${i}`] + "'";

        if(i<5){
            investigaciones += nombreInvestigacion + ', ' + doi + ', ' + cuartil + ', ' + tipoBrecha  + ', ' + brechasInvestigacion  + ', ' + resumen + ', ' + conclusiones + ', '
        }else{
            investigaciones += nombreInvestigacion  + ', ' + doi + ', ' + cuartil + ', ' + tipoBrecha + ', ' + brechasInvestigacion  + ', ' + resumen + ', ' + conclusiones
        }
      }
    
    // Insertar datos en la base de datos
    const idUsuario = "'" + req.user.idUsuarios + "'";
    const rows = await db.query('SELECT * FROM Usuarios_Matriz_Analisis WHERE idUsuario = ?', req.user.idUsuarios);
    console.log(rows);
    if (rows.length > 0) {
        await db.query("UPDATE Usuarios_Matriz_Analisis SET Nombre_investigacion_1 = ?, Doi_1 = ?, Cuartil_1 = ?, Tipo_brecha_1 = ?, Brechas_inves_1 = ?, Resumen_1 = ?, Conclusiones_1 = ?, Nombre_investigacion_2 = ?, Doi_2 = ?, Cuartil_2 = ?, Tipo_brecha_2 = ?, Brechas_inves_2 = ?, Resumen_2 = ?, Conclusiones_2 = ?, Nombre_investigacion_3 = ?, Doi_3 = ?, Cuartil_3 = ?, Tipo_brecha_3 = ?, Brechas_inves_3 = ?, Resumen_3 = ?, Conclusiones_3 = ?, Nombre_investigacion_4 = ?, Doi_4 = ?, Cuartil_4 = ?, Tipo_brecha_4 = ?, Brechas_inves_4 = ?, Resumen_4 = ?, Conclusiones_4 = ?, Nombre_investigacion_5 = ?, Doi_5 = ?, Cuartil_5 = ?, Tipo_brecha_5 = ?, Brechas_inves_5 = ?, Resumen_5 = ?, Conclusiones_5 = ? WHERE idUsuario = ?", [investigaciones, req.user.idUsuarios]);
        console.log("Usuario ya existente");
    }else{
        await db.query("INSERT INTO Usuarios_Matriz_Analisis (idUsuario, Nombre_investigacion_1, Doi_1, Cuartil_1, Tipo_brecha_1, Brechas_inves_1, Resumen_1, Conclusiones_1, Nombre_investigacion_2, Doi_2, Cuartil_2, Tipo_brecha_2, Brechas_inves_2, Resumen_2, Conclusiones_2, Nombre_investigacion_3, Doi_3, Cuartil_3, Tipo_brecha_3, Brechas_inves_3, Resumen_3, Conclusiones_3, Nombre_investigacion_4, Doi_4, Cuartil_4, Tipo_brecha_4, Brechas_inves_4, Resumen_4, Conclusiones_4, Nombre_investigacion_5, Doi_5, Cuartil_5, Tipo_brecha_5, Brechas_inves_5, Resumen_5, Conclusiones_5) VALUES ("+idUsuario +", "+investigaciones +")");
        console.log("Insertado con éxito");
    }

  });

module.exports = router;