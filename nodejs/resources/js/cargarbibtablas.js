generarSeleccion.addEventListener("click", () => {
    const entradas = [];
    const elementosBibliografia = document.querySelectorAll('.entrada-bibliografia');
    console.log("testeo2");
    for (const elementoBibliografia of elementosBibliografia) {
        const check = elementoBibliografia.querySelector('.check');
        console.log(elementoBibliografia);
        if (check.checked) {
            const entrada = {};
            entrada.title = elementoBibliografia.querySelector('h1').textContent;
            entrada.year = elementoBibliografia.querySelector('h2').textContent;
            entrada.doi = elementoBibliografia.querySelector('p').textContent;
            entrada.abstract = elementoBibliografia.querySelector('p').textContent;
            entradas.push(entrada);
            console.log("Dato Correcto");
        }
    }

    for (let i = 0; i < entradas.length; i++) {
        const Titulo = document.querySelector('[name="Nombre_investigacion_' + (i + 1) + '"]');
        const Doi = document.querySelector('[name="Doi_' + (i + 1) + '"]');
        /*Titulo.value = entradas[i].title;
        Doi.value = entradas[i].doi;*/

        Titulo.innerHTML = entradas[i].title.replace("Título: ", '');
        Doi.innerHTML = entradas[i].doi.replace("Doi: ", '');;
        console.log("test4");
    }
});


