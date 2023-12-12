const doiButtonPDF1 = document.getElementById('PDF-1');
const doiButtonPDF3 = document.getElementById('PDF-3');
const doiButtonPDF4 = document.getElementById('PDF-4');
const doiButtonPDF5 = document.getElementById('PDF-5');
const doiButtonPDF6 = document.getElementById('PDF-6');
const doiButtonPDF7 = document.getElementById('PDF-7');
const doiButtonPDF8 = document.getElementById('PDF-8');
const doiButtonPDF9 = document.getElementById('PDF-9');
const doiButtonPDF10 = document.getElementById('PDF-10');
const doiButtonPDF11 = document.getElementById('PDF-11');
const doiButtonPDF12 = document.getElementById('PDF-12');
const doiButtonPDF13 = document.getElementById('PDF-13');
const doiButtonPDF14 = document.getElementById('PDF-14');
const doiIframe = document.getElementById('srcPDF');
const doiIframeNoWeb = document.getElementById('srcPDFnoWEB');

    doiButtonPDF1.addEventListener('click', () => {
    doiIframeNoWeb.src = "/pdfs/pdf-1.pdf";
    });

    doiButtonPDF3.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2022-BocaRaton/full_papers/FP163.pdf";
    });

    doiButtonPDF4.addEventListener('click', () => {
    doiIframeNoWeb.src = "/pdfs/pdf-4.pdf";
    });

    doiButtonPDF5.addEventListener('click', () => {
    doiIframe.src = "https://ceur-ws.org/Vol-3146/PAPER_06.pdf";
    });

    doiButtonPDF6.addEventListener('click', () => {
    doiIframe.src = "https://ceur-ws.org/Vol-3336/paper5.pdf";
    });

    doiButtonPDF7.addEventListener('click', () => {
    doiIframe.src = "https://www.laccei.org/LACCEI2021-VirtualEdition/full_papers/FP90.pdf";
    });

    doiButtonPDF8.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/all-papers/Contribution_177_a.pdf";
    });

    doiButtonPDF9.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/all-papers/Contribution_216_a.pdf";
    });

    doiButtonPDF10.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/all-papers/Contribution_314_a.pdf";
    });

    doiButtonPDF11.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/all-papers/Contribution_509_a.pdf";
    });

    doiButtonPDF12.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/papers/Contribution_936_a.pdf";
    });

    doiButtonPDF13.addEventListener('click', () => {
    doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/all-papers/Contribution_1148_a.pdf";
    });

    doiButtonPDF14.addEventListener('click', () => {
        doiIframe.src = "https://laccei.org/LACCEI2023-BuenosAires/papers/Contribution_492_a.pdf";
    });
    
