$(function() {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
});


$('.modal1').click(function () {

    $('#modal_form1').css('display','block'),
        $('#overlay').css('display','block').fadeIn(400);
})
$('#modal_close1').click(function () {
    $('#modal_form1').css('display', 'none'),
        $('#overlay').css('display', 'none').fadeOut(400);

})






$('.btn1').click(function () {

    $('#modal_form2').css('display','block'),
        $('#overlay').css('display','block');
})
$('#modal_close2').click(function () {
    $('#modal_form2').css('display', 'none'),
        $('#overlay').css('display', 'none');
})


$('.btn2').click(function () {

    $('#modal_form').css('display','block'),
        $('#overlay').css('display','block');
})
$('#modal_close').click(function () {
    $('#modal_form').css('display', 'none'),
        $('#overlay').css('display', 'none');
})

$('.btn3').click(function () {

    $('#modal_form3').css('display','block'),
        $('#overlay').css('display','block');
})
$('#modal_close3').click(function () {
    $('#modal_form3').css('display', 'none'),
        $('#overlay').css('display', 'none');
})


$(document).ready(function(){
    $(".main_menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 5000);
    });
    // обработчик формы
    $("#callback1").submit(function() {
        var answer = document.getElementById('past');
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("#callback1").serialize(),
            statusCode: {
                400: function() {
                    answer.innerHTML = "Bad Request";
                },
                403: function() {
                    answer.innerHTML = "Forbidden";
                },
                404: function() {
                    answer.innerHTML = "Page not found";
                },
                200: function() {
                    answer.innerHTML = "Спасибо!<br/>Ваша заявка отправлена!";
                },
                500: function() {
                    answer.innerHTML = "Server Error";
                },
                501: function() {
                    answer.innerHTML = "Not Implemented";
                },
                502: function() {
                    answer.innerHTML = "Bad Gateway";
                },
                503: function() {
                    answer.innerHTML = "Service Unavailable";
                },
                504: function() {
                    answer.innerHTML = "Gateway Timeout";
                }
            }
        }).done(function() {
            openThanks();
            $("#callback1").trigger("reset");
        });
        return false;
    });
    $("#callback2").submit(function() {
        var answer = document.getElementById('past');
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("#callback2").serialize(),
            statusCode: {
                400: function() {
                    answer.innerHTML = "Bad Request";
                },
                403: function() {
                    answer.innerHTML = "Forbidden";
                },
                404: function() {
                    answer.innerHTML = "Page not found";
                },
                200: function() {
                    answer.innerHTML = "Спасибо!<br/>Ваша заявка отправлена!";
                },
                500: function() {
                    answer.innerHTML = "Server Error";
                },
                501: function() {
                    answer.innerHTML = "Not Implemented";
                },
                502: function() {
                    answer.innerHTML = "Bad Gateway";
                },
                503: function() {
                    answer.innerHTML = "Service Unavailable";
                },
                504: function() {
                    answer.innerHTML = "Gateway Timeout";
                }
            }
        }).done(function() {
            openThanks();
            $("#callback2").trigger("reset");
        });
        return false;
    });
    // $("#callback3").submit(function() {
    //     var answer = document.getElementById('past');
    //     $.ajax({
    //         type: "GET",
    //         url: "mail.php",
    //         data: $("#callback3").serialize(),
    //         statusCode: {
    //             400: function() {
    //                 answer.innerHTML = "Bad Request";
    //             },
    //             403: function() {
    //                 answer.innerHTML = "Forbidden";
    //             },
    //             404: function() {
    //                 answer.innerHTML = "Page not found";
    //             },
    //             200: function() {
    //                 answer.innerHTML = "Спасибо!<br/>Ваша заявка отправлена!";
    //             },
    //             500: function() {
    //                 answer.innerHTML = "Server Error";
    //             },
    //             501: function() {
    //                 answer.innerHTML = "Not Implemented";
    //             },
    //             502: function() {
    //                 answer.innerHTML = "Bad Gateway";
    //             },
    //             503: function() {
    //                 answer.innerHTML = "Service Unavailable";
    //             },
    //             504: function() {
    //                 answer.innerHTML = "Gateway Timeout";
    //             }
    //         }
    //     }).done(function() {
    //         openThanks();
    //         $("#callback1").trigger("reset");
    //     });
    //     return false;
    // });
    $('#modal_close, #overlay').click(function() { // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({
                    opacity: 0,
                }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function() { // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });

});
// singleItem: true,
//     transitionStyle: "fade",
//     dots: false,
//     navigationText: false,
//     pagination: true,
//     autoPlay: 5000,
//     items: 1,
//     center: true,
//     itemsDesktop : [1199,1],
//     itemsDesktopSmall : [979,1],
//     itemsTablet: [768,1],
//     itemsMobile: [700,1]