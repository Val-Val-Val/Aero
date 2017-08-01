jQuery(document).ready(function($) {

    var item = $('ul.nav__tabs li.active').attr('data-select-item');

    $('.select__color__sweaters, .select__color__tshirts, .select__color__cups').on('click', function () {
        var item = $('ul.nav__tabs li.active').attr('data-select-item');
        var color = $(this).attr('data-color-' + item);
            item = $('ul.nav__tabs li.active').attr('data-select-item');
        $('.' + item + '__img').css('background-color', color);
    });

    $('textarea#sweaters__text__input, textarea#tshirts__text__input, textarea#cups__text__input').on('keyup', function () {
        var item = $('ul.nav__tabs li.active').attr('data-select-item');
        var text = $(this).val();
        $('p.' + item + '__text').text(text);        

        var max_count = parseInt($('.count__' + item + '__text').attr('data-max-count'), 10);
        if ($(this).val().length >= max_count) {
            $(this).val($(this).val().substr(0, max_count));
        }

        $('.count__' + item + '__text').text(max_count - $(this).val().length);
    });

    $('.font__size__sweaters, .font__size__tshirts, .font__size__cups').on('click', function () {
        var item = $('ul.nav__tabs li.active').attr('data-select-item');
        var size = $(this).attr('data-font-size-' + item + '');
        $('p.' + item + '__text, i#' + item + '__icon__id').css('font-size', size + 'px');
    });

    $('.select__sweaters__icon i, .select__tshirts__icon i, .select__cups__icon i').on('click', function () {
        var item = $('ul.nav__tabs li.active').attr('data-select-item');
        var icon = $(this).attr('class');
        $('i#' + item + '__icon__id').removeClass();
        $('i#' + item + '__icon__id').addClass(icon);        
    });
    $('.select__sweaters__icon .remove__sweaters__icon, .select__tshirts__icon .remove__tshirts__icon, .select__cups__icon .remove__cups__icon').on('click', function () {  
    var item = $('ul.nav__tabs li.active').attr('data-select-item');      
        $('i#' + item + '__icon__id').removeClass();
    });

    $('.select__print__color__sweaters, .select__print__color__tshirts, .select__print__color__cups').on('click', function () {
        var item = $('ul.nav__tabs li.active').attr('data-select-item');
        var color = $(this).attr('data-print-color-' + item + '');
        $('p.' + item + '__text, i#' + item + '__icon__id').css('color', color);        
    });

});