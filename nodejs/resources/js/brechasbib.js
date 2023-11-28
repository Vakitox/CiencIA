const uploadForm = document.getElementById('upload-form');
const organizedBib = document.getElementById('organized-bib');
console.log("test");


uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const bibFile = document.getElementById('bib-file').files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const bibData = event.target.result;
        const organizedEntries = organizeBibEntries(bibData);

        organizedBib.innerHTML = '';
        for (const entry of organizedEntries) {
            //Quitar llaves a la información
            entry.title = entry.title.replace(/\{|\},/g, '');
            entry.doi = entry.doi.replace(/\{|\},/g, '');
            entry.year = entry.year.replace(/\{|\},/g, '');
            entry.abstract = entry.abstract.replace(/\{|\},|\}/g, '');

            organizedBib.innerHTML += `
                <br>
                <div class="entrada-bibliografia">
                <h1>Título: ${entry.title}</h1>
                <h2 style="font-size: 20px">Año: ${entry.year}</h2>
                <p>Doi: ${entry.doi}</p>
                <p>Resumen: ${entry.abstract}</p>
                <input type="checkbox" class="check" name="checkbox">
                </div>
                <br>
            `;
        }
    };

    reader.readAsText(bibFile);
});

function organizeBibEntries(bibData) {
    const entries = [];
    const lines = bibData.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('@ARTICLE')) {
            const entry = {};
            for (let j = i + 1; j < lines.length; j++) {
                const fieldLine = lines[j];
                if (fieldLine.startsWith('}')) {
                    break;
                }

                const fieldParts = fieldLine.split(' = ');
                const field = fieldParts[0].trim();
                const value = fieldParts[1].trim().replace(/"/g, '');

                entry[field] = value;
            }

            if (!entry.doi) {
                entry.doi = 'Sin doi';
            }
            
            if (!entry.abstract){
                entry.abstract = 'Sin resumen'
            }

            entries.push(entry);
        }
    }

    return entries;
}