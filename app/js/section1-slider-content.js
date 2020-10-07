document.addEventListener("DOMContentLoaded", function(event) { 

const sliderContent = [
    {
        img: 'img/approaching-tours/slaid1.webp',
        price: '118 112',
        country: 'Италия',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: 'Авиаперелет включен!'
    },
    {
        img: 'img/approaching-tours/slaid2.webp',
        price: '140 715',
        country: 'ИСЛАНДИЯ',
        title: 'Майские каникулы в Исландии',
        discription: 'Рейкьявик — Тингвеллир — Гюдльфосс — Скафтафедль — Сельяландсфосс — Скоугафосс — Йёкюльсаурлоун — Голубая Лагуна — Снайфельсйёкутль — Arnarstapi — Рейкьявик',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19`,
        transportation: false
    },
    {
        img: 'img/approaching-tours/slaid3.webp',
        price: '37 302',
        country: 'ТУРЦИЯ',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: 'Авиаперелет включен!'
    },
    {
        img: 'img/approaching-tours/slaid4.webp',
        price: '145 000',
        country: 'НОРВЕГИЯ, ШПИЦБЕРГЕН',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: false
    },
    {
        img: 'img/approaching-tours/slide5-8.webp',
        price: '118 112',
        country: 'Италия',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: 'Авиаперелет включен!'
    },
    {
        img: 'img/approaching-tours/slide5-8.webp',
        price: '140 715',
        country: 'ИСЛАНДИЯ',
        title: 'Майские каникулы в Исландии',
        discription: 'Рейкьявик — Тингвеллир — Гюдльфосс — Скафтафедль — Сельяландсфосс — Скоугафосс — Йёкюльсаурлоун — Голубая Лагуна — Снайфельсйёкутль — Arnarstapi — Рейкьявик',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19`,
        transportation: false
    },
    {
        img: 'img/approaching-tours/slide5-8.webp',
        price: '37 302',
        country: 'ТУРЦИЯ',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: 'Авиаперелет включен!'
    },
    {
        img: 'img/approaching-tours/slide5-8.webp',
        price: '145 000',
        country: 'НОРВЕГИЯ, ШПИЦБЕРГЕН',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: false
    },
    {
        img: 'img/approaching-tours/slide9-12.webp',
        price: '118 112',
        country: 'Италия',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: 'Авиаперелет включен!'
    },
    {
        img: 'img/approaching-tours/slide9-12.webp',
        price: '140 715',
        country: 'ИСЛАНДИЯ',
        title: 'Майские каникулы в Исландии',
        discription: 'Рейкьявик — Тингвеллир — Гюдльфосс — Скафтафедль — Сельяландсфосс — Скоугафосс — Йёкюльсаурлоун — Голубая Лагуна — Снайфельсйёкутль — Arnarstapi — Рейкьявик',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19`,
        transportation: false
    },
    {
        img: 'img/approaching-tours/slide9-12.webp',
        price: '37 302',
        country: 'ТУРЦИЯ',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: 'Авиаперелет включен!'
    },
    {
        img: 'img/approaching-tours/slide9-12.webp',
        price: '145 000',
        country: 'НОРВЕГИЯ, ШПИЦБЕРГЕН',
        title: 'Под небом Тосканы',
        discription: 'Сансеполькро — (Перуджа) — Ассизи — Губбио — (Сиена) — Ла Верна — Ангиари — Монтерки — Ареццо — Кортона — (Пиенца) - (Монтепульчано)',
        arrivalTime: `8 дней / 7 ночей Русский язык 27.04.19 - 04.05.19и еще 15 дат`,
        transportation: false
    },
];


function slider(slide){
    const returnShablon = `
        <div class="AT-slider__item slider-wraper__item">
            <div class="AT-slider__img-block">
                <img  class="AT-slider__img" src="${slide.img}" alt="${slide.title}">

                <span class="AT-slider__price">
                    от ${slide.price} ₽
                </span>
            </div>

            <span class="AT-slider__country">
                ${slide.country}
            </span>

            <h3 class="AT-slider__title">
                ${slide.title}
            </h3>

            <p class="AT-slider__discription">
                ${slide.discription}
            </p>

            <p class="AT-slider__arrival-time">
                ${slide.arrivalTime}
            </p>
        </div>
    `

    const returnShablon2 = `
        <div class="AT-slider__item slider-wraper__item">
            <div class="AT-slider__img-block">
                <img  class="AT-slider__img" src="${slide.img}" alt="${slide.title}">

                <span class="AT-slider__price">
                    от ${slide.price} ₽
                </span>
            </div>

            <span class="AT-slider__country">
                ${slide.country}
            </span>

            <h3 class="AT-slider__title">
                ${slide.title}
            </h3>

            <p class="AT-slider__discription">
                ${slide.discription}
            </p>

            <p class="AT-slider__arrival-time">
                ${slide.arrivalTime}
            </p>

            <span class="AT-slider__transportation">
                ${slide.transportation}
            </span>
        </div>
    `

    if(slide.transportation == false){
        return returnShablon
    }else{
        return returnShablon2
    }
}

const templates = sliderContent.map( slid => slider(slid));
const html = templates.join( ' ' );

document.querySelector('#js-approaching-track').innerHTML = html;
})