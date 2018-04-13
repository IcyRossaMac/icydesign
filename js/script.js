/* Preloader */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* Team */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* Progress Bars */

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/* Responsive Tabs */

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/* Portfolio */

$(window).on('load', function () {
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // Get filter value
        let filterValue = $(this).attr('data-filter');

        // Filter Portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* Magnifier */

$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* Testimonials */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* Stats */

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* Clients */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});

/* Google Map */

$(window).on('load', function () {
    var addressString = "230 Broadway, New York, NY, USA";
    var myLatLng = {lat: 40.712742, lng: -74.005969};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Click To See Address'
    });

    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/* Navigation */

$(function () {
    showHideNav();

    $(window).scroll(function () {
        showHideNav()
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
});

/* Smooth Scrolling */

$(function () {
    $("a.smooth-scroll").click(function () {

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    })
});

/* Mobile Menu */

$(function () {
    //Show mobile navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    })

    //Hide mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav").click(function () {
        $("#mobile-nav").css("height", "0%");
    })
});

/* Animation */

// Animate on scroll
$(function () {
    new WOW().init();
});

