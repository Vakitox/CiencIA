$(document).ready(function () {

    function showPopupMatrizAnalisis(){
        $('#anuncio-matriz-analisis .pop-up').addClass('show');
        $('#anuncio-matriz-analisis .pop-up-wrap').addClass('show');
    }

    $("#anuncio-matriz-analisis #close").click(function(){
        $('#anuncio-matriz-analisis .pop-up').removeClass('show');
        $('#anuncio-matriz-analisis .pop-up-wrap').removeClass('show');
    });

    $(".btn-abrir").click(showPopupMatrizAnalisis);

    setTimeout(showPopupMatrizAnalisis, 2000);

});