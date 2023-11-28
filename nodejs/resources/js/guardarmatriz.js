app.post('/guardar-datos-matriz-analisis', (req, res) => {
    const investigaciones = [];
  
    for (let i = 1; i <= 10; i++) {
      const nombreInvestigacion = req.body[`nombre_investigacion_${i}`];
      const doi = req.body[`doi_${i}`];
      const cuartil = req.body[`cuartil_${i}`];
      const tipoBrecha = req.body[`tipo_brecha_${i}`];
      const brechasInvestigacion = req.body[`brechas_inves_${i}`];
      const resumen = req.body[`resumen_${i}`];
      const conclusiones = req.body[`conclusiones_${i}`];
  
      if (nombreInvestigacion || doi || cuartil || tipoBrecha || brechasInvestigacion || resumen || conclusiones) {
        investigaciones.push({
          nombreInvestigacion,
          doi,
          cuartil,
          tipoBrecha,
          brechasInvestigacion,
          resumen,
          conclusiones
        });
      }
    }
  
    // Insertar datos en la base de datos
    const sql = 'INSERT INTO investigaciones (nombreInvestigacion, doi, cuartil, tipoBrecha, brechasInvestigacion, resumen, conclusiones) VALUES ?';
    const values = investigaciones.map((investigacion) => [
      investigacion.nombreInvestigacion,
      investigacion.doi,
      investigacion.cuartil,
      investigacion.tipoBrecha,
      investigacion.brechasInvestigacion,
      investigacion.resumen,
      investigacion.conclusiones
    ]);
  
    connection.query(sql, [values], (err, result) => {
      if (err) throw err;
      console.log('¡Datos guardados con éxito!');
      res.send({ message: '¡Datos guardados con éxito!' });
    });
  });