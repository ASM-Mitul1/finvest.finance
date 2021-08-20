(function($) {
    'use strict';
    
    /*---------------------------------------------*
     * Custom Mobile Menu
    ---------------------------------------------*/
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    // Call Mobile Menu
    $(document).ready(function() {
        mainMenu();
    });

    $(".nav-toggle, .cross-wrap").on('click', function (e) {
        $(".menu-toggle").toggleClass("active");
    });
    $(".menu-overlay").on('click', function (e) {
        e.preventDefault();
        $(".nav-menu").toggleClass("menu-on");
        $(".menu-toggle").toggleClass("active");
        $(".navbar-toggler").toggleClass("active");
    });
    $(".menu-overlay").on('click', function (e) {
        e.preventDefault();
        $(".offcanvas-panel").toggleClass("panel-on");
    });

    /*---------------------------------------------*
     * Testimonial Slider V1
    ---------------------------------------------*/
    $('.testimonial-slider-area').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    /*---------------------------------------------*
     * Bootstrap Tooltip
    ---------------------------------------------*/
    // $(function () {
    //     $('[data-toggle="tooltip"]').tooltip()
    // })


    /*---------------------------------------------*
     * WOW JS
    ---------------------------------------------*/
    new WOW().init();

    /*---------------------------------------------*
     * Scroll To Top
    ---------------------------------------------*/
    // Scroll Target Animation
    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
          var target = $(this).attr("data-target");
          // animate
          $("html, body").animate({
              scrollTop: $(target).offset().top,
            },
            1000
          );
          return false;
        });
    }
    // Window Scroll Event
    $(window).on("scroll", function () {
        if ($(".scroll-to-top").length) {
          var strickyScrollPos = 100;
          if ($(window).scrollTop() > strickyScrollPos) {
            $(".scroll-to-top").fadeIn(500);
          } else if ($(this).scrollTop() <= strickyScrollPos) {
            $(".scroll-to-top").fadeOut(500);
          }
        }
    });

    /*---------------------------------------------*
     * Preloader
    ---------------------------------------------*/
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500); 
    })

    /*---------------------------------------------*
     * Sticky Menu
    ---------------------------------------------*/
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });


    
})(jQuery);

