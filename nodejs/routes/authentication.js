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

    //JOIN//
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

    //UPDATE *TEMPORAL*//


    const NombreInvestigacion_1 = req.body[`Nombre_investigacion_1`];
    const Doi_1 = req.body[`Doi_1`];
    const Cuartil_1 = req.body[`Cuartil_1`];
    const TipoBrecha_1 = req.body[`Tipo_brecha_1`];
    const BrechasInvestigacion_1 = req.body[`Brechas_inves_1`];
    const Resumen_1 = req.body[`Resumen_1`];
    const Conclusiones_1 = req.body[`Conclusiones_1`];

    const NombreInvestigacion_2 = req.body[`Nombre_investigacion_2`];
    const Doi_2 = req.body[`Doi_2`];
    const Cuartil_2 = req.body[`Cuartil_2`];
    const TipoBrecha_2 = req.body[`Tipo_brecha_2`];
    const BrechasInvestigacion_2 = req.body[`Brechas_inves_2`];
    const Resumen_2 = req.body[`Resumen_2`];
    const Conclusiones_2 = req.body[`Conclusiones_2`];

    const NombreInvestigacion_3 = req.body[`Nombre_investigacion_3`];
    const Doi_3 = req.body[`Doi_3`];
    const Cuartil_3 = req.body[`Cuartil_3`];
    const TipoBrecha_3 = req.body[`Tipo_brecha_3`];
    const BrechasInvestigacion_3 = req.body[`Brechas_inves_3`];
    const Resumen_3 = req.body[`Resumen_3`];
    const Conclusiones_3 = req.body[`Conclusiones_3`];

    const NombreInvestigacion_4 = req.body[`Nombre_investigacion_4`];
    const Doi_4 = req.body[`Doi_4`];
    const Cuartil_4 = req.body[`Cuartil_4`];
    const TipoBrecha_4 = req.body[`Tipo_brecha_4`];
    const BrechasInvestigacion_4 = req.body[`Brechas_inves_4`];
    const Resumen_4 = req.body[`Resumen_4`];
    const Conclusiones_4 = req.body[`Conclusiones_4`];

    const NombreInvestigacion_5 = req.body[`Nombre_investigacion_5`];
    const Doi_5 = req.body[`Doi_5`];
    const Cuartil_5 = req.body[`Cuartil_5`];
    const TipoBrecha_5 = req.body[`Tipo_brecha_5`];
    const BrechasInvestigacion_5 = req.body[`Brechas_inves_5`];
    const Resumen_5 = req.body[`Resumen_5`];
    const Conclusiones_5 = req.body[`Conclusiones_5`];

    // Insertar datos en la base de datos
    const idUsuario = "'" + req.user.idUsuarios + "'";
    const Tema = req.body[`Titulo_Matriz`];
    console.log(Tema);
    const rows = await db.query('SELECT * FROM Usuarios_Matriz_Analisis WHERE idUsuario = ?', req.user.idUsuarios);
    if (rows.length > 0) {
       await db.query("UPDATE Usuarios_Matriz_Analisis SET Tema = ?, Nombre_investigacion_1 = ?, Doi_1 = ?, Cuartil_1 = ?, Tipo_brecha_1 = ?, Brechas_inves_1 = ?, Resumen_1 = ?, Conclusiones_1 = ?, Nombre_investigacion_2 = ?, Doi_2 = ?, Cuartil_2 = ?, Tipo_brecha_2 = ?, Brechas_inves_2 = ?, Resumen_2 = ?, Conclusiones_2 = ?, Nombre_investigacion_3 = ?, Doi_3 = ?, Cuartil_3 = ?, Tipo_brecha_3 = ?, Brechas_inves_3 = ?, Resumen_3 = ?, Conclusiones_3 = ?, Nombre_investigacion_4 = ?, Doi_4 = ?, Cuartil_4 = ?, Tipo_brecha_4 = ?, Brechas_inves_4 = ?, Resumen_4 = ?, Conclusiones_4 = ?, Nombre_investigacion_5 = ?, Doi_5 = ?, Cuartil_5 = ?, Tipo_brecha_5 = ?, Brechas_inves_5 = ?, Resumen_5 = ?, Conclusiones_5 = ? WHERE idUsuario = ?", ([Tema, NombreInvestigacion_1, Doi_1, Cuartil_1, TipoBrecha_1, BrechasInvestigacion_1, Resumen_1, Conclusiones_1, NombreInvestigacion_2, Doi_2, Cuartil_2, TipoBrecha_2, BrechasInvestigacion_2, Resumen_2, Conclusiones_2, NombreInvestigacion_3, Doi_3, Cuartil_3, TipoBrecha_3, BrechasInvestigacion_3, Resumen_3, Conclusiones_3, NombreInvestigacion_4, Doi_4, Cuartil_4, TipoBrecha_4, BrechasInvestigacion_4, Resumen_4, Conclusiones_4, NombreInvestigacion_5, Doi_5, Cuartil_5, TipoBrecha_5, BrechasInvestigacion_5, Resumen_5, Conclusiones_5, req.user.idUsuarios]));
       console.log("Actualizado con éxito");
       res.redirect('/analisis_brechas');
    }else{
        await db.query("INSERT INTO Usuarios_Matriz_Analisis (idUsuario, Tema, Nombre_investigacion_1, Doi_1, Cuartil_1, Tipo_brecha_1, Brechas_inves_1, Resumen_1, Conclusiones_1, Nombre_investigacion_2, Doi_2, Cuartil_2, Tipo_brecha_2, Brechas_inves_2, Resumen_2, Conclusiones_2, Nombre_investigacion_3, Doi_3, Cuartil_3, Tipo_brecha_3, Brechas_inves_3, Resumen_3, Conclusiones_3, Nombre_investigacion_4, Doi_4, Cuartil_4, Tipo_brecha_4, Brechas_inves_4, Resumen_4, Conclusiones_4, Nombre_investigacion_5, Doi_5, Cuartil_5, Tipo_brecha_5, Brechas_inves_5, Resumen_5, Conclusiones_5) VALUES ("+idUsuario +", "+Tema +", "+investigaciones +")");
        console.log("Insertado con éxito");
        res.redirect('/analisis_brechas');
    }
    

});

module.exports = router;