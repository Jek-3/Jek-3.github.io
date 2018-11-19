
jQuery(document).ready(function($) {
	var color = $('input[type="checkbox"]'),
		colorText = $('.header__color-text'),
		body = $('body');


	color.change(function(event) {
		if ($(this).is(':checked')) {
			colorText.text('Black');
			body.css('background-color', 'black');
		} else {
			colorText.text('White');
			body.css('background-color', '#fafbff');
		}
	});

	var language = $('.header__language-list');


	language.change(function(event) {
		console.log(language.val());

		if ($(this).val() == 1 ) {
            $('.header__language-flag').attr('src', '../img/language/Ru.png');
        }
		if ($(this).val() == 2 ) {
            $('.header__language-flag').attr('src', '../img/language/en.png');
        }
        if ($(this).val() == 3 ) {
            $('.header__language-flag').attr('src', '../img/language/de.png');
        }
		if ($(this).val() == 4 ) {
            $('.header__language-flag').attr('src', '../img/language/ua.png');
        }
	});






	// project.change(function(event) {
	// 	if ($(this).is(':checked')) {
	// 		console.log('true');
	// 	} else {
	// 		console.log('false');
	// 	}
	// });

	
	// языковая панель
	$('.header__language-list').styler();


	$('.chat__new-slider').slick({
	    infinite: true,
	    slidesToShow: 7,
	    slidesToScroll: 1,
	    vertical:true,
	    arrows: true, 
	    prevArrow: false,
	    nextArrow: '<class="chat__new-slider-arrrow-next"></i>',
	    variableWidth: false,
	    dots: false
	  });


	// табы сообщения
	// $('.tab_content').hide();

	// // $('.tab_content:first').show();
	// // $('.tabs li.message__active').addClass('message__active');
	// $('.message__active').show();

	// $('.tabs li').click(function(event) {
	// 	$('.tabs li').removeClass('message__active');
	// 	$(this).addClass('message__active');
	// 	$('.tab_content').hide();

	// 	var selectTab = $(this).find('a').attr("href");
	// 	$(selectTab).fadeIn();
	// });


	// выапывра
	// $('.tab_content-bottom').hide();
	// // $('.tab_content-bottom:first').show();
	// // $('.tabs-bottom li:first').addClass('message__active-bottom');
	// $('.active__bottom').show();
	// // $('.active__bottom').show();



	// $('.tabs-bottom li').click(function(event) {
	// 	$('.tabs li').removeClass('active__bottom');
	// 	$(this).addClass('active__bottom');
	// 	$('.tab_content-bottom').hide();

	// 	var selectTab = $(this).find('a').attr("href");
	// 	$(selectTab).fadeIn();
	// });




	// $('.tab_content').hide();
	// // $('.tab_content-bottom:first').show();
	// // $('.tabs-bottom li:first').addClass('message__active-bottom');
	// $('.active__b').show();
	// $('.active__bottom').show();



	// $('.tabs li').click(function(event) {
	// 	$('.tabs li').removeClass('active__b');
	// 	$(this).addClass('active__b');
	// 	$('.tab_content').hide();

	// 	var selectTab = $(this).find('a').attr("href");
	// 	$(selectTab).fadeIn();
	// });



	// $('.list_text').hide();
	// // $('.tab_content-bottom:first').show();
	// // $('.tabs-bottom li:first').addClass('message__active-bottom');
	// $('.assets').show();
	// $('.active__bottom').show();



	// $('.list li').click(function(event) {
	// 	$('.list li').removeClass('assets');
	// 	$(this).addClass('assets');
	// 	$('.list_text').hide();

	// 	var selectTab = $(this).find('a').attr("href");
	// 	$(selectTab).fadeIn();
	// });




	$(".players__news-tab_item").hide();
	$('.news_active').show();
	$(".players__news .players__news-tab").click(function () {
		$(".players__news .players__news-tab").removeClass("news_active").eq($(this).index()).addClass("news_active");
		$(".players__news-tab_item").hide().eq($(this).index()).fadeIn()
	});

	// чат 
	// главная навигация
	$(".chat__message-tab_item").hide();
	$('.message__active').show();
	$(".chat__message .chat__message-tab").click(function () {
		$(".chat__message .chat__message-tab").removeClass("message__active").eq($(this).index()).addClass("message__active");
		$(".chat__message-tab_item").hide().eq($(this).index()).fadeIn()
	});
	// вкладка сообщения
	$(".messages__tab_item").hide();
	$('.messages__active').show();
	$(".messages .messages__tab").click(function () {
		$(".messages .messages__tab").removeClass("messages__active").eq($(this).index()).addClass("messages__active");
		$(".messages__tab_item").hide().eq($(this).index()).fadeIn()
	});


	$('textarea').autoResize({
		extraSpace: 5.5
	});


});