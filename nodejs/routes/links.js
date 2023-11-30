const express = require ('express');
const router = express.Router();
const { noestaLogeado } = require('../lib/auth');

const db = require('../database');

const { estaLogeado } = require('../lib/auth');

router.get('/matrices', estaLogeado, (req, res) => {
    res.render('links/matrices');
});

router.get('/analisis_brechas', estaLogeado, async (req, res) => {
    const id = req.user.idUsuarios;
    const rows = await db.query('SELECT * FROM Usuarios_Matriz_Analisis WHERE idUsuario = ?', req.user.idUsuarios);
    if (rows.length > 0) {
        console.log("Ya existe data");
    }else{
        await db.query('INSERT INTO Usuarios_Matriz_Analisis set idUsuario = ?', [id]);
    }
    const matrizAnalisis = await db.query('SELECT * FROM Usuarios_Matriz_Analisis WHERE idUsuario = ?', [id]);
    res.render('matrices/analisis_brecha', {datosMatriz: matrizAnalisis});
});

router.get('/publicaciones', noestaLogeado, (req, res) => {
    res.render('investigaciones/proyectos');
});

router.get('/recursos', noestaLogeado, (req, res) => {
    res.render('recursos/recursos');
});


module.exports = router;

/* GOOGLE PALM API

// Importar la biblioteca de la API de Palm

// Obtener la clave API de Palm
const token = 'IzaSyD5_v5M2o93cTVH1RViYfdCA8muul20pio';

// Crear un objeto Bard
const bard = new Bard(token);

// Define una ruta para la solicitud de preguntas
app.get('/procesar_formulario', (req, res) => {

    // Obtener la pregunta de la solicitud
    const question = "¿Que es GPT?";
  
    // Realizar la solicitud a la API de Palm
    const response = bard.getAnswer(question);
  
    // Obtener el texto de la respuesta
    const text = response.text();
  
    // Enviar la respuesta a la vista HTML
    res.send(text);
  });*/
  