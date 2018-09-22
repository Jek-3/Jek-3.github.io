 $(document).ready(function(){
 		/* Закладки каталог */
     	$('img.catalog-card-bookmarks').click(function() {
     	  $(this).toggleClass("catalog-card-bookmarks-click");
     	});
    	/* Каталог */
    	 $('.catalog-slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.catalog-slider-nav'
		});
		$('.catalog-slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.catalog-slider-for',
		  centerMode: true,
		  variableWidth: true,
		  focusOnSelect: true,
		  prevArrow: '<div class="catalog-slider-prev"></div>',
		  nextArrow: '<div class="catalog-slider-next"></div>'
		});
		/* Фотогалерея */
		$('.photogalery-slider').slick({
		    infinite: true,
		    slidesToShow: 5,
		    slidesToScroll: 1,
		    arrows: true, 
		    prevArrow: '<i class="fas fa-chevron-left photogalery-slider-prev"></i>',
		    nextArrow: '<i class="fas fa-chevron-right photogalery-slider-next"></i>',
		    dots: false,
		    responsive: [
              {
                breakpoint: 1900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              ]
		 });
		/* Каталог (товары)*/
		$('.catalog-card-slider').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left catalog-card-slider-arrows-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right catalog-card-slider-arrows-next"></i>',
		    variableWidth: false, 
		    dots: false
		  });
		/* Каталог (страница)*/
		$('.catalog-page-card-slider').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left catalog-page-slider-arrows-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right catalog-page-slider-arrows-next"></i>',
		    variableWidth: false, 
		    dots: false
		  });
		$(".catalog-page-card-slider").on('afterChange', function(event, slick, currentSlide){
    	    $("#catalog-page-count").text(currentSlide + 1);
    	 });
		/* Слайдер (страницы)*/
		$('.slider-pages').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left catalog-card-slider-arrows-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right catalog-card-slider-arrows-next"></i>',
		    variableWidth: false,
		    dots: false
		  });
		/* Слайдер (отзывы - страница)*/
		$('.reviews-slider-page').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left reviews-slider-page-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right reviews-slider-page-next"></i>',
		    variableWidth: false,
		    dots: false
		  });
     	/* Счетчик */
		$(".catalog-card-slider").on('afterChange', function(event, slick, currentSlide){
    	    $("#count").text(currentSlide + 1);
    	 });
		$(".catalog-card-slider").on('afterChange', function(event, slick, currentSlide){
    	    $("#count2").text(currentSlide + 1);
    	 });
		/* (клиенты) */
		$(".slider-pages").on('afterChange', function(event, slick, currentSlide){
    	    $("#clients-pages-count").text(currentSlide + 1);
    	 });
		/* (блог) */
		$(".slider-pages").on('afterChange', function(event, slick, currentSlide){
    	    $("#blog-pages-count").text(currentSlide + 1);
    	 });
    	/* Отзывы */
    	$('.reviews-slider').slick({
    	    infinite: true,
    	    slidesToShow: 1,
    	    slidesToScroll: 1,
    	    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left reviews-slider-picture-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right reviews-slider-picture-next"></i>',
    	    dots: false
    	 });
    	/* Отзывы (2) */
    	$('.reviews-slider-home').slick({
    	    infinite: true,
    	    slidesToShow: 1,
    	    slidesToScroll: 1,
    	    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left reviews-slider-home-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right reviews-slider-home-next"></i>',
    	    dots: false
    	 });
    	/* Слайдер (счастливые клиенты)*/
    	$('.clients-slider').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left clients-slider-arrows-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right clients-slider-arrows-next"></i>',
		    variableWidth: false,
		    dots: false
		  });
    	$(".clients-slider").on('afterChange', function(event, slick, currentSlide){
    	    $("#clients-slider-counter").text(currentSlide + 1);
    	 });
		/* Слайдер (отзывы - статья) */
		$('.article-slider').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left article-slider-arrows-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right article-slider-arrows-next"></i>',
		    variableWidth: false,
		    dots: false
		  });
    	$(".reviews-slider").on('afterChange', function(event, slick, currentSlide){
    	    $("#counter").text(currentSlide + 1);
    	 });
    	/* Блог (страница)*/
		$('.blog-pages-slider').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true, 
    	    prevArrow: '<i class="fas fa-chevron-left blog-pages-slider-arrows-prev"></i>',
    	    nextArrow: '<i class="fas fa-chevron-right blog-pages-slider-arrows-next"></i>',
		    variableWidth: false,
		    dots: false
		  });
    	$(".blog-pages-slider").on('afterChange', function(event, slick, currentSlide){
    	    $("#blog-pages-slider-counter").text(currentSlide + 1);
    	 });
		/* Товар (слайдер)*/
         $('.product-slider-for').slick({
        	fade: false,
            dots : false,
            lazyLoad: 'progressive',
            arrows: false,
            slidesToScroll:1,
            slidesToShow:1,
            infinite:true,
            swipe:true,
            asNavFor: '.product-slider-nav'
        });
        $('.product-slider-nav').slick({
           dots: false,
	       centerMode: false,
	       focusOnSelect: true,
	       vertical:true,
	       infinite:true,
	       // prevArrow: '<i class="fas fa-chevron-left product-slider-nav-arrows-prev"></i>',
	       // nextArrow: '<i class="fas fa-chevron-right product-slider-nav-arrows-next"></i>',
	       slidesToShow: 3,
	       slidesToScroll: 1,
	       asNavFor: '.product-slider-for'
        });
		/* Товар (количество) */
		$('.product-counter_minus').click(function () {
           var $input = $(this).parent().find('input');
           var count = parseInt($input.val()) - 1;
           count = count < 1 ? 1 : count;
           $input.val(count);
           $input.change();
           return false;
       });
       $('.product-counter_plus').click(function () {
           var $input = $(this).parent().find('input');
           $input.val(parseInt($input.val()) + 1);
           $input.change();
           return false;
       });
       /* select */
       $('.header-city-select').styler();
       $('.footer-city').styler();
		 //  /* Фиксированное меню */
		 //  var topmenu =$('.nav').offset().top;
		 //  $(function(){
		 //  $(window).scroll(function() {
		 //  var top = $(document).scrollTop();

			// console.log ( top );
		 //  if(top > topmenu) { $('.nav').addClass('fixed'); } else {    $('.nav').removeClass('fixed');   } 
		 //  });
		 //  });
		 //  /* Мобильное меню */
		 //  $('.slider').slick({
		 //      infinite: true,
		 //      slidesToShow: 1,
		 //      slidesToScroll: 1,
		 //      arrows: false,
		 //      dots: true
		 //    });
		
		});