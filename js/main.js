$(window).on("load", function() {
    $(".containt svg").addClass("animation");
    $(".preloader").fadeOut("slow");
});

$(document).ready(function() {

    $("#open-menu").click(function() {
        "use strict";
        $(".slide-nav").css("left", "0").css("opacity", "1");

        $("#close-menu").click(function() {
            $(".slide-nav").css("left", "-320px").css("opacity", "0");
        });
    });
    /**************** Navabr Shrink**************** */
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $(".main_menu").addClass("navbar-shrink");
        } else {
            $(".main_menu").removeClass("navbar-shrink");
        }
    });
    /**************** Video Popup **************** */
    const videoSrc = $("#player-1").attr("src");
    $(".btn-video-play").on("click", function() {
        if ($(".video-popup").hasClass("opne")) {
            $(".video-popup").removeClass("open");
            $("player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == "")
                $("#player-1").attr("src", videoSrc);
        }

        $(".video-popup-close").on("click", function() {
            $(".video-popup").removeClass("open");
            if ($("#player-1").attr("src") == videoSrc)
                $("#player-1").attr("src", "");
        });
    });

    /* *************************feature********************** */
    $(".feature-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    });
    /* **********************screenshots************************* */
    $(".app-screenshots-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
    /* ***********************testimonials************************ */
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    /* **********************Teanm************************* */
    $(".team-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });



    /* **********************Navbar Collapse************************* */
    $(".nav-link").on("click", function() {
        // $(".navbar-collapse.navbar-side").collapse("hide");
        $(".slide-nav").css("left", "-320px").css("opacity", "0");
    });


    /* 
     **
     **
     */
    function toggleTheme() {
        updateIcon();
        if (localStorage.getItem("raqi-theme") !== null) {
            if (localStorage.getItem("raqi-theme") === "dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }

    }
    toggleTheme();

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark")
        if ($("body").hasClass("dark")) {
            localStorage.setItem("raqi-theme", "dark")
        } else {
            localStorage.setItem("raqi-theme", "light")
        }
    })


    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass(" fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass(" fa-moon");
        }
    }
});