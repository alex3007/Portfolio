$('document').ready(function () {

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled == 0) {


            $('.headerBg').css({
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

       /*     $('#navUl a').hover(
                function () {
                    $(this).toggleClass('jsHover')

                });*/

        } else {


            $('.headerBg').css({
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

          /*  $('#navUl a').hover(
                function () {
                    $(this).toggleClass('jsHover')

                });*/

        };
        
    
    }
    
    
    $('.nav-link').hover(
                function () {
                    $(this).css('cssText', 'color: #03a9f4 !important; ')
                },
                function () {
                    $(this).css('cssText', 'color:rgba(255, 255, 255, 0.8)!important; ')

                });    
    
    

    $('#navUl').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {


        }
    });


});
