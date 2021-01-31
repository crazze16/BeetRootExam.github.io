$(function () {
    $('.recent_works_slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    centerMode: false,
                }
            },
        ]
    })
});

$(function () {
    $('.our_team_slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                    centerMode: false,

                },

            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,

                }
            },
            {
                breakpoint: 390,
                settings: {
                    arrows: false,
                    dots: true

                }
            },
        ],
    })
});

document.querySelector('.gallery')
    .addEventListener('click', () => {
        document.querySelector('.module_gallery_bg').style.display = 'flex';
    });
document.querySelector('.menu')
    .addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('active');

    });
document.querySelector('.close', )
    .addEventListener('click', () => {
        document.querySelector('.module_gallery_bg').style.display = 'none';
    });
document.querySelector('.module_gallery_bg', )
    .addEventListener('click', () => {
        document.querySelector('.module_gallery_bg').style.display = 'none';
    });
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}

let upPage = document.querySelector('.upPage')

upPage.addEventListener('click', () => {
    scrollTo(document.querySelector('.header'))
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('scroll');
    } else {
        $('.header').removeClass('scroll')
    }
});