(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters-gallery > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters-gallery > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card-gallery').mouseenter(function(){

        $(this).find('.card-overlay-gallery').css({'top': '-100%'});
        $(this).find('.card-hover-gallery').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay-gallery').css({'top': '0'});
        $(this).find('.card-hover-gallery').css({'top':'100%'});

    });

})(jQuery);