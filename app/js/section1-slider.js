$(document).ready(function(){
    $('.approaching-slider').slick({
       /* slidesToShow:1, //показывает
        slidesToScroll: 1, //листает
        speed: 1000, //скорость
        infinite: false, //бесконечность
        touchThreshold: 8, //количство растояния для некст свайпа ( по дефолту 5, чем больше число, тем меньше движения)
        waitForAnimate: false, //переключение слайдов без анимации
        rows: 2, //количество рядов
        slidesPerRow: 2,*/
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:4, //показывает
                    slidesToScroll: 1, //листает
                    speed: 1000, //скорость
                    infinite: false, //бесконечность
                    touchThreshold: 8, //количство растояния для некст свайпа ( по дефолту 5, чем больше число, тем меньше движения)
                    waitForAnimate: false, //переключение слайдов без анимации
                    rows: 1, //количество рядов
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 1,
                    vertical: true,
                },
            },
        ],
    });
})