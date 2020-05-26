(function ($) {
    'use strict';


    //======================
    // Sticky menu
    //======================

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1) {
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header');
        }
    });


    


    //======================
    // Mobile menu 
    //======================
    $('#mobile-menu-toggler').on('click', function (e) {
        e.preventDefault();
        $('.primary-menu > ul').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown fas fa-angle-down"></i>');

    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function () {
            $(this).prev().slideToggle('slow');
            $(this).toggleClass('fa-angle-down fa-angle-up')
        })
    }

    //======================
    // Foo nav toggler
    //======================
    // if($('.test-caro').width() < 768 ) {
    //     $('.foo-nav h5').on('click', function() {
    //         $(this).siblings('ul').slideToggle();
    //     })
    // }

    //======================
    // Testimonial
    //======================
    $('.test-caro').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    })

    //======================
    // Testimonial 2
    //======================
    $('.test-caro-2').owlCarousel({
        dots: false,
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        smartSpeed: 500,
        thumbs: true,
        thumbsPrerendered: true
    });

    //======================
    // Testimonial 3
    //======================
    $('.test-caro-3').owlCarousel({
        dots: true,
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        smartSpeed: 500,
    });

    //======================
    // Signup/Login carousel
    //======================
    $('.sl-slider-caro').owlCarousel({
        dots: true,
        items: 1,
        nav: false,
        smartSpeed: 500,
    });

    //======================
    // Partners carousel
    //======================
    $('.partners-logo').owlCarousel({
        autoplay: true,
        dots: false,
        items: 6,
        loop: true,
        margin: 60,
        nav: false,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2,
                margin: 30
            },
            400: {
                items: 3,
                margin: 40
            },
            768: {
                items: 4,
                margin: 50
            },
            992: {
                items: 5,
                margin: 50
            },
            1199: {
                items: 6
            }
        }
    });


    //======================
    // Select currency 
    //======================
    $('.curr-select').on('click', function () {
        $(this).children('ul').slideToggle();
    })

    //======================
    // Clock
    //======================
    $('#clock').countdown('2019/10/10').on('update.countdown', function (event) {
        var $this = $(this).html(event.strftime('' +
            '<p>week%!w <span>%-w</span> </p>' +
            '<p>day%!d <span>%-d</span> </p>' +
            '<p>hr <span>%H</span> </p>' +
            '<p>min <span>%M</span> </p>' +
            '<p>sec <span>%S</span> </p>'));
    });

    if ($(window).width() <= 575) {
        $('.footer .foo-nav h5').append('<i class="fas fa-plus fa-minus"></i>');
        $('.footer .foo-nav h5').on('click', function () {
            $(this).next('ul').slideToggle('');
            $(this).children('i').toggleClass('fa-plus');
        })
    }

    $('.btn')
        .on('mouseenter mousemove', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.bh').css({
                top: relY,
                left: relX
            });
            var origin = relX + 'px' + ' ' + relY + 'px';

        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.bh').css({
                top: relY,
                left: relX
            })
        });

    var tB = new TimelineMax({
        repeat: -1,
        yoyo: true,
    });
    tB
        .add('f1')
        .to('.animg1, .ani4img1', 3, {
            rotation: '20',
            ease: Power2.easeNone
        }, 'f1')
        .to('.animg2, .ani4img2', 3, {
            rotation: '-20',
            ease: Power2.easeNone
        }, 'f1')
        .to('.rcvMobile', .7, {
            y: '30',
            ease: Linear.easeNones
        }, 'f1')
        .to('.rcvMobile', .7, {
            y: '0',
            ease: Linear.easeNones
        }, '-=.5');

    var tC = new TimelineMax({});
    tC
        .add('f2')
        .to('.ani5img2, .ani7img1', 10, {
            rotation: '360',
            ease: Linear.easeNone,
            repeat: -1
        }, 'f2')
        .to('.ani5img3, .ani7img2', 15, {
            rotation: '360',
            ease: Linear.easeNone,
            repeat: -1
        }, 'f2')
        .to('.ani5img4, .ani7img3', 20, {
            rotation: '360',
            ease: Linear.easeNone,
            repeat: -1
        }, 'f2')
        .to('.ani7img4', 5, {
            rotation: '360',
            ease: Linear.easeNone,
            repeat: -1
        }, 'f2')

    var tA = new TimelineMax({
        paused: true
    });
    var tB = new TimelineMax({
        paused: true
    });
    tA
        .add('f2')
        .to(
            '.animg5', 1.5, {
                top: '0',
                ease: Power1.easeOut
            }, 'f2'
        )
        .to(
            '.animg5', 1.5, {
                left: '30%',
                ease: Power4.easeOut,
                delay: 1
            }
        )
        .from(
            '.abs-img', 1.5, {
                left: '-20px',
                opacity: 0,
                ease: Power4.easeOut,
                delay: 1
            }, 'f2'
        )
        .from(
            '.ani5img5', 1.5, {
                right: '-20%',
                opacity: 0,
                ease: Power4.easeOut
            }, 'f2'
        )
        .from(
            '.ani7img5', 1.5, {
                left: '-20%',
                opacity: 0,
                ease: Power4.easeOut
            }, 'f2'
        )
        .staggerTo(
            '.an3', 1.5, {
                scale: 1,
                ease: Power4.easeOut,
            }, .3, 'f2'
        )
        .staggerFrom(
            '.scrn-1, .scrn-2, .scrn-3', 1, {
                y: 300,
                ease: Power2.easeOut,
            }, .3, 'f2'
        )
        .staggerFrom(
            '.speciality .iconBox', 1, {
                y: 50,
                opacity: .5,
                ease: Power1.easeOut
            }, .3, 'f2'
        );
    $('.an3, .animg5, .scrn-1, .scrn-2, .scrn-3, .abs-img, .ani5img5').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            tA.restart();
            tB.restart();

        },
        doOut: function () {
            console.log('Out')
            // Do something to the matched elements as they get off scren
        },
    });
    $('.iconBox').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            tA.restart();
            tB.restart();

        },
        doOut: function () {
            // console.log('Out')
            // Do something to the matched elements as they get off scren
        },
    });

    function accordionFun(e) {
        var collBTN = e + ' .accordion-item h5';
        var colbody = e + ' .accordion-item';
        $(collBTN).on('click', function () {
            // console.log('HI', colbody);
            $(colbody).removeClass('active');
            $(this).parent('.accordion-item').addClass('active');

        })
    }

    accordionFun('#accordion');
    accordionFun('#accordion1');
    accordionFun('#accordion2');
    accordionFun('#accordion3');
    accordionFun('#accordion4');
    accordionFun('#accordion5');
    accordionFun('#accordion6');

    /**
     * Nice Select
     */
    $('select').niceSelect();


    /**
     * Smooth scroll to position
     */
    $(".primary-menu a[href^='#'], .navigation[href^='#']").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    if ($(window.location.hash).length > 1) {
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1000);
    }
    /*
     * Smooth scroll product position
     */
    $(".product-scroll a[href^='#'], .navigation[href^='#']").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
    /*
     * Smooth Scroll footer position
     */
    $(".footer-scroll a[href^='#'], .navigation[href^='#']").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    if ($(window.location.hash).length > 1) {
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1000);
    }

    /**
     * Send message button
     */
    // $("#btn-sendcontact").on("click",function(e){
    //     e.preventDefault();
    //     let formvalidated = false;
    //     $("#contact-form input.required").filter(function() {
    //         return !this.value;
    //     }).addClass("error");
    //     if(formvalidated){
    //         $.post("sendmail.php",$( "#contact-form" ).serialize(),function(data){
    //             alert(data);
    //         });
    //         $( "#contact-form" ).reset();
    //     }
    // })
    
    /*
     * Go to top
     */
    var btn = $('#scrollUp');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '500');
     });


    
    

    $('submit').click(function(e){
        e.preventDefault();
        if ($( "#contact-form" ).isValid()){
            $( "#contact-form" ).reset();
        }
    });
    
    
    
    /*
     * Active when click 
     */
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    
    
    /*
     * Active scrollbar 
     */
    var mainNavLinks = document.querySelectorAll("ul li a");
    /*var mainSections = document.querySelectorAll("section");

    var lastId;
    var cur = [];*/
    // This should probably be throttled.
    // Especially because it triggers during smooth scrolling.
    // https://lodash.com/docs/4.17.10#throttle
    // You could do like...
    // window.addEventListener("scroll", () => {
    //        _.throttle(doThatStuff, 100);
    // });
    // Only not doing it here to keep this Pen dependency-free.

    window.addEventListener("scroll", event => {
      var fromTop = window.scrollY;

      mainNavLinks.forEach(link => {
        var section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
    
   
})(jQuery);



// var imported = document.createElement('script');
// imported.src = 'inc/switcher/js/switcher.js';
// document.head.appendChild(imported);
// var styleE = document.createElement('link');
// styleE.href = 'inc/switcher/css/switcher.css';
// styleE.rel = 'stylesheet';
// document.head.appendChild(styleE);