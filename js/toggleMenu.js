$('document').ready(function () {

    window.onscroll = function () {

        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        //Styles of the navigation for start position of the page   

        if (scrolled == 0) {

            $('#header').css({
                'backgroundColor': 'rgba(255, 255, 255, 0)',
                'boxShadow': '0 0 10px rgba(255, 255, 255, 0)'
            });

            $('.nav-link').css('cssText', 'color:rgba(255, 255, 255, 0.8)!important;');
            $('.navbarBrand').css('cssText', 'color:rgba(255, 255, 255, 0.8)!important;');
            $('.navbar-toggler-icon').css('cssText', 'background-image: url(images/menu1.png) !important; ');
            $('.navbar-toggler').css('cssText', 'border-color: rgba(255, 255, 255, 0.5)!important;');
            $('.nav-link').hover(
                function () {
                    $(this).css('cssText', 'color: #03a9f4 !important;')
                },
                function () {
                    $(this).css('cssText', 'color:rgba(255, 255, 255, 0.8)!important;')

                });

        } else {

            //Styles for the navigation when the page is scrolling

            $('#header').css({
                'backgroundColor': 'rgba(255, 255, 255, 1)',
                'boxShadow': '0 0 10px grey'
            });
            $('.nav-link').css('cssText', 'color:rgba(0, 0, 0, 0.5)!important;');
            $('.navbarBrand').css('cssText', 'color:rgba(0, 0, 0, 0.5)!important;');
            $('.navbar-toggler-icon').css('cssText', 'background-image: url(images/menu2.png) !important; ');
            $('.navbar-toggler').css('cssText', 'border-color: rgba(0, 0, 0, 0.5)!important;');

            $('.nav-link').hover(
                function () {
                    $(this).css('cssText', 'color: #03a9f4 !important; ')
                },
                function () {
                    $(this).css('cssText', 'color:rgba(0, 0, 0, 0.5)!important; ')
                });
        };
    }

    // Styles of the links when hover    

    $('.nav-link').hover(
        function () {
            $(this).css('cssText', 'color: #03a9f4 !important; ')
        },
        function () {
            $(this).css('cssText', 'color:rgba(255, 255, 255, 0.8)!important; ')

        });

});
