// OnePageNav init

$('document').ready(function () {
    $('.navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });

// To fix menu and to change style

    $(window).scroll(function () {
        if (($(this).scrollTop() > 0)) {
            $("header").addClass("header-fixed");
        } else {
            $("header").removeClass("header-fixed");
        };
    });
    new WOW().init();
})
