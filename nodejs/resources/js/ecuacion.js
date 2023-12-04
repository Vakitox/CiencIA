const $content = document.getElementById('ecuacion-picoc'),
      $btn = document.getElementById('copiarTextoPicoc');


// Agregar el evento al botón
$btn.addEventListener("click", () => {
    $content.select();
    document.execCommand('copy');
  });

generarTitulo.addEventListener("click", () => {

    const textTitulo = document.getElementById("titulo-picoc");
    const TituloPicoc = textTitulo.value;
    console.log(TituloPicoc);
    const tituloMatriz = document.getElementById("titulo-matriz");
    const tituloMatrizAux = document.getElementById("titulo-matriz-aux");

    tituloMatriz.innerHTML = "Tema de Investigación: " + TituloPicoc;
    tituloMatrizAux.value = TituloPicoc;
});

generarEcuacion.addEventListener("click", () => {

    let textarea = document.getElementById("ecuacion-picoc");
 
     // Obtener los elementos.
   const textareaPoblacion = document.getElementById("población-picoc");
   const textareaIntervencion = document.getElementById("intervencion-picoc");
   const textareaComparacion = document.getElementById("comparacion-picoc");
   const textareaResultado = document.getElementById("resultado-picoc");
   const textareaContexto = document.getElementById("contexto-picoc");
 
    // Obtener el valor del elemento input.
    let textPoblacion = textareaPoblacion.value;
    let textIntervencion = textareaIntervencion.value;
    let textComparacion = textareaComparacion.value;
    let textResultado = textareaResultado.value;
    let textContexto = textareaContexto.value;

    // Quitar comillas si la palabra tiene menos de 2 palabras

    // Convertir la cadena en un array de palabras.
    let palabrasPoblacion = textPoblacion.split(", ");
    let palabrasIntervencion = textIntervencion.split(", ");
    let palabrasComparacion = textComparacion.split(", ");
    let palabrasResultado = textResultado.split(", ");
    let palabrasContexto = textContexto.split(", ");

    // POBLACION

    // Iterar sobre las palabras.
    for (let i = 0; i < palabrasPoblacion.length; i++) {
    // Si la palabra tiene más de dos palabras, dejarla igual.
    if (palabrasPoblacion[i].split(" ").length > 1) {
    palabrasPoblacion[i] = "\"" + palabrasPoblacion[i] + "\"";
    } else {
    // Si la palabra tiene menos de dos palabras, quitarle las comillas.
    palabrasPoblacion[i] = palabrasPoblacion[i];
    }
    }

    // INTERVENCION

    // Iterar sobre las palabras.
    for (let i = 0; i < palabrasIntervencion.length; i++) {
    // Si la palabra tiene más de dos palabras, dejarla igual.
    if (palabrasIntervencion[i].split(" ").length > 1) {
    palabrasIntervencion[i] = "\"" + palabrasIntervencion[i] + "\"";
    } else {
    // Si la palabra tiene menos de dos palabras, quitarle las comillas.
    palabrasIntervencion[i] = palabrasIntervencion[i];
    }
    }

    // COMPARACION

    // Iterar sobre las palabras.
    for (let i = 0; i < palabrasComparacion.length; i++) {
    // Si la palabra tiene más de dos palabras, dejarla igual.
    if (palabrasComparacion[i].split(" ").length > 1) {
        palabrasComparacion[i] = "\"" + palabrasComparacion[i] + "\"";
    } else {
        // Si la palabra tiene menos de dos palabras, quitarle las comillas.
        palabrasComparacion[i] = palabrasComparacion[i];
    }
    }


    // RESULTADO

    // Iterar sobre las palabras.
    for (let i = 0; i < palabrasResultado.length; i++) {
    // Si la palabra tiene más de dos palabras, dejarla igual.
    if (palabrasResultado[i].split(" ").length > 1) {
        palabrasResultado[i] = "\"" + palabrasResultado[i] + "\"";
    } else {
        // Si la palabra tiene menos de dos palabras, quitarle las comillas.
        palabrasResultado[i] = palabrasResultado[i];
    }
    }

    // CONTEXTO

    // Iterar sobre las palabras.
    for (let i = 0; i < palabrasContexto.length; i++) {
    // Si la palabra tiene más de dos palabras, dejarla igual.
    if (palabrasContexto[i].split(" ").length > 1) {
        palabrasContexto[i] = "\"" + palabrasContexto[i] + "\"";
    } else {
        // Si la palabra tiene menos de dos palabras, quitarle las comillas.
        palabrasContexto[i] = palabrasContexto[i];
    }
    }

    // Unir las palabras.
    let nuevaPoblacion = palabrasPoblacion.join(" OR ");
    let nuevaIntervencion = palabrasIntervencion.join(" OR ");
    let nuevaComparacion = palabrasComparacion.join(" OR ");
    let nuevaResultado = palabrasResultado.join(" OR ");
    let nuevaContexto = palabrasContexto.join(" OR ");

    // Imprimir el valor del elemento input.

    const textRespuesta = "(TITLE-ABS-KEY ( " + nuevaPoblacion + " ) AND TITLE-ABS-KEY ( " + nuevaIntervencion + " ) AND TITLE-ABS-KEY ( " +  nuevaComparacion + " ) AND TITLE-ABS-KEY ( " +  nuevaResultado + " ) AND TITLE-ABS-KEY ( " +  nuevaContexto + " ))";
    textarea.innerHTML = textRespuesta;
 
 });

 /* router.post('/guardar-datos-matriz-analisis', async (req, res) => {
    let investigaciones = {};

    const nombreInvestigacion = req.body[`Nombre_investigacion_1`];
    const doi = req.body[`Doi_1`];
  
    for (let i = 1; i <= 5; i++) {
        const nombreInvestigacion = req.body[`Nombre_investigacion_${i}`];
        const doi = req.body[`Doi_${i}`];
        const cuartil = req.body[`Cuartil_${i}`];
        const tipoBrecha = req.body[`Tipo_brecha_${i}`];
        const brechasInvestigacion = req.body[`Brechas_inves_${i}`];
        const resumen = req.body[`Resumen_${i}`];
        const conclusiones = req.body[`Conclusiones_${i}`];

        investigaciones += {
            nombreInvestigacion,
            doi,
            cuartil,
            tipoBrecha,
            brechasInvestigacion,
            resumen,
            conclusiones,
          };

      }
    
    // Insertar datos en la base de datos
    const idUsuario = req.user.idUsuarios;
    //console.log([investigaciones[2]]);
    await db.query("INSERT INTO Usuarios_Matriz_Analisis (idUsuario, Nombre_investigacion_1, Doi_1, Cuartil_1, Tipo_brecha_1, Brechas_inves_1, Resumen_1, Conclusiones_1, Nombre_investigacion_2, Doi_2, Cuartil_2, Tipo_brecha_2, Brechas_inves_2, Resumen_2, Conclusiones_2, Nombre_investigacion_3, Doi_3, Cuartil_3, Tipo_brecha_3, Brechas_inves_3, Resumen_3, Conclusiones_3, Nombre_investigacion_4, Doi_4, Cuartil_4, Tipo_brecha_4, Brechas_inves_4, Resumen_4, Conclusiones_4, Nombre_investigacion_5, Doi_5, Cuartil_5, Tipo_brecha_5, Brechas_inves_5, Resumen_5, Conclusiones_5) VALUES ('"+nombreInvestigacion+"', '"+doi+"')");
    console.log("Insertado con éxito");

  });*/