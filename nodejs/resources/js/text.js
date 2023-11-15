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
 
     // Condiciones para comillas
 
     if (textPoblacion.includes(",")) {
         textPoblacion = textPoblacion.replaceAll(",", "* OR *").replaceAll("*", "\"");
       } else {
         textPoblacion = textPoblacion.replaceAll("*", "");
       }
       if (textIntervencion.includes(",")) {
         textIntervencion = textIntervencion.replaceAll(",", "* OR *").replaceAll("*", "\"");
       } else {
         textIntervencion = textIntervencion.replaceAll("*", "");
       }
       if (textComparacion.includes(",")) {
         textComparacion = textComparacion.replaceAll(",", "* OR *").replaceAll("*", "\"");
       } else {
         textComparacion = textComparacion.replaceAll("*", "");
       }
       if (textResultado.includes(",")) {
         textResultado = textResultado.replaceAll(",", "* OR *").replaceAll("*", "\"");
       } else {
         textResultado = textResultado.replaceAll("*", "");
       }
       if (textContexto.includes(",")) {
         textContexto = textContexto.replaceAll(",", "* OR *").replaceAll("*", "\"");
       } else {
         textContexto = textContexto.replaceAll("*", "");
       }
     
 
 
     // Convertir las comas en OR.
     /*textPoblacion = textPoblacion.replaceAll(",", "* OR *").replaceAll("*", "\"");
     textIntervencion = textIntervencion.replaceAll(",", "* OR *").replaceAll("*", "\"");
     textComparacion = textComparacion.replaceAll(",", "* OR *").replaceAll("*", "\"");
     textResultado = textResultado.replaceAll(",", "* OR *").replaceAll("*", "\"");
     textContexto = textContexto.replaceAll(",", "* OR *").replaceAll("*", "\"");*/
 
 
     // Imprimir el valor del elemento input.
 
     const textRespuesta = "(TITLE-ABS-KEY ( " + textPoblacion + " ) AND TITLE-ABS-KEY ( " + textIntervencion + " ) AND TITLE-ABS-KEY ( " +  textComparacion + " ) AND TITLE-ABS-KEY ( " +  textResultado + " ) AND TITLE-ABS-KEY ( " +  textContexto + " ))";
 
     textarea.innerHTML = textRespuesta;
 
 });