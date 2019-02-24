$(document).ready(function(){

    console.log($(window).width());
    console.log('news block -', $('.news__block').height());

    // открыть по клику (шапка)
    $('.header__language-link').on('click', function(event) {
        $('.header__language-list').toggle();
    });
    $('.header__account-block-wrapp').on('click', function(event) {
        $('.header__account-block-menu').toggle();
    });



    // табы (калькуляторы умений)
    $(".combinations__tb-tab_item").hide();
    $('.combinations__tb-active').show();
    $(".combinations__tb .combinations__tb-tab").click(function () {
        $(".combinations__tb .combinations__tb-tab").removeClass("combinations__tb-active").eq($(this).index()).addClass("combinations__tb-active");
        $(".combinations__tb-tab_item").hide().eq($(this).index()).fadeIn();
    });

    $(".skills__tab-item").hide();
    $('.skills__tab-active').show();
    $(".skills__tab .skills__tab-link").click(function () {
        $(".skills__tab .skills__tab-link").removeClass("skills__tab-active").eq($(this).index()).addClass("skills__tab-active");
        $(".skills__tab-item").hide().eq($(this).index()).fadeIn();
    });

    // табы (внутри калькулятора умений)
    $(".combinations-features__item").hide();
    $('.features-active').show();
    $(".combinations-features .combinations-features__tab").click(function () {
      $(".combinations-features .combinations-features__tab").removeClass("features-active").eq($(this).index()).addClass("features-active");
      $(".combinations-features__item").hide().eq($(this).index()).fadeIn()
    });

     // фильтры в таблицах
     $('.table-filters').on('click', function(event) {
       $(this).toggleClass('table-filters-active');
     });



    // навигация на главном экране
    $('.main__nav-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '<button class="main__nav-slider-arrow-prev"></button>',
      nextArrow: '<button class="main__nav-slider-arrow-next"></button>',
      responsive: [
            {
              breakpoint: 451,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            }
          ]
    });
    // главная
    // модальные окна
    // вход
    $('.login__btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__login').fadeIn();
    });
    $('.popup__login-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__login').fadeOut();
    });
    // регистрация
    $('.check__btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__check').fadeIn();
    });
    $('.popup__check-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__check').fadeOut();
    });

    // копировать из input
     $('#btn').click(function() {
         $('#input')[0].select(); 
         document.execCommand('copy');
         $('#input').append(' ');
         $('#input').val().slice(0, -1);
     });
     $('#btn_1').click(function() {
         $('#input_1')[0].select(); 
         document.execCommand('copy');
         $('#input_1').append(' ');
         $('#input_1').val().slice(0, -1);
     });

    // показать эфекты
    $('.show').click(function () {
        if ($(".block:first").is(":hidden")) {
          $('.block').slideDown("slow");
        } else {
          $('.block').slideToggle("slow");
        };
     });

    // мобильное меню
    $('.header__nav-mobile-wrapp').click(function(event) {
      $('.header__nav-mobile').toggle();    
    }); 
    // блок с статьями
     // let h = $('.main__article')[0].scrollHeight;   
     if ($(window).width() < 575) { 
          $(document).click(function() {
             $('.main__article').animate({
                 'height': '750px'
             });
         });
        $('.main__article-wrapp:eq(3)').addClass('shadow');    
     }
     if ($(window).width() < 767) {
        $(document).click(function() {
            $('.main__article').animate({
                'height': '510px'
            });
        });
        $('.main__article-wrapp:eq(4)').addClass('shadow');
        $('.main__article-wrapp:eq(5)').addClass('shadow');
     }
     if ($(window).width() < 769) {
        $(document).click(function() {
            $('.main__article').addClass('height');
        });
     }
     if ($(window).width() < 991) {
        $(document).click(function() {
            $('.main__article').animate({
                'height': '510px'
            });
        });
        $('.main__article-wrapp:eq(4)').addClass('shadow');
        $('.main__article-wrapp:eq(5)').addClass('shadow');
     }
     if ($(window).width() < 1199) {
        $(document).click(function() {
            $('.main__article').animate({
                // 'height': '510px'
            });
        });
        $('.main__article-wrapp:eq(4)').addClass('shadow');
        $('.main__article-wrapp:eq(5)').addClass('shadow');
     } else { 
        var h = $('.main__article')[0].scrollHeight;            
        $('#more__article').click(function(e) {
            e.stopPropagation();
            $('.main__article').animate({
                'height': h
            });
        });
        $(document).click(function() {
            $('.main__article').addClass('height');
            $('.main__article').animate({
                'height': '315px'
            });
        });
    };
    // $('#more__article').click(function(e) {
    //         e.stopPropagation();
    //         $('.main__article').animate({
    //             'height': '1300px'
    //         });
    //     });
    //     $(document).click(function() {
    //         $('.main__article').addClass('height');
    //         // $('.main__article').animate({
    //         //     'height': '315px'
    //         // });
    //     });

    // блок с новостями 
    //  if ($(window).width() < 991) {
    //     $(document).click(function() {
    //         $('.news__block').animate({
    //             'height': '720px'
    //         });
    //      });
    //  } else {      
        
    // };    
    
    // добавлено в патче
    $('.page__filters-select-option').styler();

    // var h = $('.news__block')[0].scrollHeight;   
    // $(document).click(function() {
    //   $('.news__archive-link').click(function(e) {
    //       e.stopPropagation();
    //       $('.news__block').animate({
    //           'height': h
    //       });
    //   });
    //   $(document).click(function() {
    //       $('.news__block').animate({
    //           'height': '720px'
    //       });
    //   });
    // });  
        
    
    



});