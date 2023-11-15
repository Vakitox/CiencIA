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