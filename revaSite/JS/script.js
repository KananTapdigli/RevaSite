$(document).ready(function () {

    // ----------------------------

    // Showing-Active-Nav-and-Page

    $('.navbar-content li').on('click', function () {
        $('.pages').each((index, element) => {
            $(element).addClass('d-none')
        });
        $('.navbar-content li').each((index, element) => {
            $(element).removeClass('active-nav');
        });
        $(this).addClass('active-nav');
        $('.pages').eq($(this).index()).removeClass('d-none')
    })

    // ----------------------------



    // ----------------------------

    // Changing-Images-By-Right-Arrow

    let customIndex = 0;

    let images = $('.frame img');

    $('.right-arrow').on('click', () => {

        customIndex += 1;
        if (customIndex > 2) {
            customIndex = 0;
        }

        $('.frame img').each((index, element) => {
            $(element).css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });

        images.eq(customIndex).css({
            'opacity': '1',
            'visibility': 'visible'
        });

        if (customIndex == 0) {
            $('.typing').show()
            $('.text').css('top', '36%')
            $('.name').css('margin-bottom', '0')
        } else {
            $('.typing').hide()
            $('.text').css('top', '39%')
            $('.name').css('margin-bottom', '20px')
        }
    })

    // ----------------------------



    // ----------------------------

    // Changing-Images-By-Left-Arrow

    $('.left-arrow').on('click', () => {

        customIndex -= 1;
        if (customIndex < 0) {
            customIndex = 2;
        }

        $('.frame img').each((index, element) => {
            $(element).css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });

        images.eq(customIndex).css({
            'opacity': '1',
            'visibility': 'visible'
        });


        if (customIndex == 0) {
            $('.typing').show()
            $('.text').css('top', '36%')
            $('.name').css('margin-bottom', '0')
        } else {
            $('.typing').hide()
            $('.text').css('top', '39%')
            $('.name').css('margin-bottom', '20px')
        }
    })

    // ----------------------------



    // ----------------------------

    // Changing-Image-By-SetTimeout

    window.setInterval(() => {
        customIndex += 1;
        if (customIndex > 2) {
            customIndex = 0;
        }

        $('.frame img').each((index, element) => {
            $(element).css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });

        images.eq(customIndex).css({
            'opacity': '1',
            'visibility': 'visible'
        });

        if (customIndex == 0) {
            $('.typing').show()
            $('.text').css('top', '36%')
            $('.name').css('margin-bottom', '0')
        } else {
            $('.typing').hide()
            $('.text').css('top', '39%')
            $('.name').css('margin-bottom', '20px')
        }
    }, 15000)

    // ----------------------------



    // ----------------------------

    // TypingWriter

    var typed = new Typed('.typing', {
        strings: ['Frontend Developer.', 'Web Designer.', 'Graphic Designer.'],
        typeSpeed: 120,
        backSpeed: 20,
        loop: true

    });

    // ----------------------------



    // ----------------------------

    // Closing-Navbar

    $(document).on('click', '.closing-button', () => {
        $('.closing-button').addClass('opening-button')
        $('.closing-button').css('left', '37px');
        $('.left').addClass('fa-angle-right').removeClass('fa-angle-left')
        $('.navbar').css('width', '100px');
        $('.bg_logo').css({
            'background-size': '43px',
            'top': '65px'
        })
        $('.navbar-content li').css({
            'width': '60px',
            'height': '32px',
        });
        $('.navbar-content p').hide();
        $('.social-media').removeClass('d-flex').hide();
        $('.closing-button').removeClass('closing-button')

        $('.frame').css('width', 'calc(100% - 100px)')
        $('.about-page').css('width', 'calc(100% - 100px)')
        $('.services-page').css('width', 'calc(100% - 100px)')
        $('.portfolio-page').css('width', 'calc(100% - 100px)')
        $('.testimonials-page').css('width', 'calc(100% - 100px)')
        $('.contact-page').css('width', 'calc(100% - 100px)')


        // ----------------------------

    })

    // ----------------------------

    // Opening-Navbar

    $(document).on('click', '.opening-button', () => {
        $('.opening-button').addClass('closing-button').removeClass('opening-button')
        $('.closing-button').css('left', '185px');
        $('.left').addClass('fa-angle-left').removeClass('fa-angle-right')
        $('.navbar').css('width', '220px');
        $('.bg_logo').css({
            'background-size': '50px',
            'top': '20px'
        })
        $('.navbar-content li').css({
            'width': '110px',
            'height': '57px',
        });
        $('.navbar-content p').show();
        $('.social-media').addClass('d-flex').show();
        $('.opening-button').removeClass('opening-button')

        $('.frame').css('width', 'calc(100% - 220px)')
        $('.about-page').css('width', 'calc(100% - 220px)')
        $('.services-page').css('width', 'calc(100% - 220px)')
        $('.portfolio-page').css('width', 'calc(100% - 220px)')
        $('.testimonials-page').css('width', 'calc(100% - 220px)')
        $('.contact-page').css('width', 'calc(100% - 220px)')
    })

    // ----------------------------


    // ----------------------------

    // Opening-Burger-Menu

    $(document).on('click', '.burger-menu', () => {
        $('.closing-button').addClass('opening-button').removeClass('closing-button')
        $('.opening-button').css('left', '37px');
        $('.left').addClass('fa-angle-right').removeClass('fa-angle-left')
        $('.navbar').css('width', '100px');
        $('.bg_logo').css({
            'background-size': '43px',
            'top': '65px'
        })

        $('.burger-menu').addClass('x');
        $('.line1').css({
            'transform': 'rotate(45deg)',
            'top': '10px'
        })
        $('.line2').css({
            'transform': 'rotate(-45deg)',
            'top': '10px'
        })
        $('.line3').css({
            'transform': 'rotate(-45deg)',
            'top': '10px'
        })
        $('.navbar').css('left', '0')
        $('.burger-menu').removeClass('burger-menu');


        // ----------------------------


        // ----------------------------

        // Closing-Burger-Menu

        $(document).on('click', '.x', () => {


            $('.x').addClass('burger-menu');
            $('.line1').css({
                'transform': 'rotate(0)',
                'top': '2px'
            })
            $('.line2').css({
                'transform': 'rotate(0)',
                'top': '10px'
            })
            $('.line3').css({
                'transform': 'rotate(0)',
                'top': '18px'
            })

            $('.navbar').css('left', '-220px')
            $('.x').removeClass('x');


        })

        // ----------------------------

    })

    // ----------------------------

    // Img-Animation-in-About

    $(document).on('click', '.about-nav', () => {
        $('.about-image').css({
            'animation': 'img-animation',
            'animation-duration': '1s',
            'animation-fill-mode': 'forwards'
        })
    })


    // ----------------------------


    // ----------------------------

    // Showing-Active-About-and-Page

    $('.about-information-top li').on('click', function () {
        $('.about-information-top li').each((index, element) => {
            $(element).removeClass('active-nav-2');
        });
        $(this).addClass('active-nav-2');

        $('.about-pages').each((index, element) => {
            $(element).addClass('d-none');
        })

        $('.about-pages').eq($(this).index()).removeClass('d-none');

    })

    // ----------------------------



    // ----------------------------

    // Playing-Video-in-Service-Page

    $(document).on('click', '.play-btn', () => {
        $('.modal-services').removeClass('d-none')
        $('.modal-services').css('display', 'flex')
        $('body').css('overflow', 'hidden');
    })

    // ----------------------------


    // ----------------------------

    // Quiting-Video

    $(document).on('click', '.x-close', () => {
        $('.modal-services').css('display', 'none')
        $('body').css('overflow', 'auto');
    })


    $(window).on('click', () => {
        let target = $(event.target);
        if (target.is('.modal-services')) {
            $('.modal-services').css('display', 'none')
            $('body').css('overflow', 'auto');
        }
    })

    $('.modal-services').each(function () {
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function () {

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });

    // ----------------------------


    // ----------------------------

    // Active-Nav-and-Contents-in-Portfolio

    $(document).on('click', '.portfolio-nav li', function () {
        $('.portfolio-nav li').each((index, element) => {
            $(element).removeClass('active');
        })
        $(this).addClass('active');
    })

    $(document).on('click', '.all', function () {
        $('.item-web,.item-marketing, .item-graphic').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    $(document).on('click', '.web-design', function () {
        $('.item-marketing, .item-graphic').css({
            'opacity': '0.2',
            'pointer-events': 'none'
        })
        $('.item-web').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    $(document).on('click', '.graphic-design', function () {
        $('.item-marketing, .item-web').css({
            'opacity': '0.2',
            'pointer-events': 'none'
        })
        $('.item-graphic').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    $(document).on('click', '.marketing', function () {
        $('.item-graphic, .item-web').css({
            'opacity': '0.2',
            'pointer-events': 'none'
        })
        $('.item-marketing').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })
    // ----------------------------

    // ----------------------------

    // Opening-Images-in-Portfolio

    $(document).on('click','.expand', (element) => {
        $('.modal-portfolio').removeClass('d-none');
        $('.modal-portfolio img').attr('src', $(element.target).parent().parent().next().children().attr('src'))
        $('body').css('overflow', 'hidden');
    })

    
    // ----------------------------

    // ----------------------------

    // Closing-Images-in-Portfolio

    $(document).on('click','.x-close-2', () => {
        $('.modal-portfolio').addClass('d-none');
        $('body').css('overflow', 'auto');
    })

    $(window).on('click', () => {
        target = $(event.target);
        if (target.is('.modal-portfolio')) {
            $('.modal-portfolio').addClass('d-none')
            $('body').css('overflow', 'auto');
        }
    })

    // ----------------------------






    // ----------------------------

    // Transferring-Img-from-Small-to-Big-DIV
    let url;

    $('.small-imgs').each(function (index, element) {
        $(element).on('click', () => {
            $('.small-imgs').each(function (index, element) {
                $(element).css('border', 'none')
            })
            $(element).css('border', ' 2px solid #b0914f')
            $('.inf').each(function (index, element) {
                $(element).addClass('d-none');
            });
            $('.inf').eq(index).removeClass('d-none')
            url = $(element).css('background-image')
            $('.big-img').css('background-image', url)
        })
    });

    // ----------------------------

    // ----------------------------

    // Opening-Map

    $(document).on('click', '.open-map', () => {
        $('.open-map').addClass('close-map').removeClass('open-map')
        $('.map-container').css('height', '430px');
        $('.fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-down')
        $('.map-btn-text span').text('Close Map')
    })

    // ----------------------------

    // ----------------------------

    // Closing-Map

    $(document).on('click', '.close-map', () => {
        $('.close-map').addClass('open-map').removeClass('close-map')
        $('.map-container').css('height', '0');
        $('.fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-up')
        $('.map-btn-text span').text('Open Map')
    })

    // ----------------------------

});