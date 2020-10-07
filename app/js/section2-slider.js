$(document).ready(function(){
    $('.popular-slider').slick({
        slidesToShow: 2, //показывает
        slidesToScroll: 1, //листает
        speed: 1000, //скорость
        infinite: false, //бесконечность
        touchThreshold: 8, //количство растояния для некст свайпа ( по дефолту 5, чем больше число, тем меньше движения)
        waitForAnimate: false, //переключение слайдов без анимации
        rows: 1,
        slidesPerRow: 2,
    });
})