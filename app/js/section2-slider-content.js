document.addEventListener("DOMContentLoaded", function(event) { 

    const sliderContent = [
        {
            img: 'img/approaching-tours/slaid1.webp',
            price: '118 112',
            country: 'Италия',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slaid2.webp',
            price: '140 715',
            country: 'ИСЛАНДИЯ',
            title: 'Майские каникулы в Исландии',
        },
        {
            img: 'img/approaching-tours/slaid3.webp',
            price: '37 302',
            country: 'ТУРЦИЯ',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slaid4.webp',
            price: '145 000',
            country: 'НОРВЕГИЯ, ШПИЦБЕРГЕН',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slide5-8.webp',
            price: '118 112',
            country: 'Италия',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slide5-8.webp',
            price: '140 715',
            country: 'ИСЛАНДИЯ',
            title: 'Майские каникулы в Исландии',
        },
        {
            img: 'img/approaching-tours/slide5-8.webp',
            price: '37 302',
            country: 'ТУРЦИЯ',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slide5-8.webp',
            price: '145 000',
            country: 'НОРВЕГИЯ, ШПИЦБЕРГЕН',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slide9-12.webp',
            price: '118 112',
            country: 'Италия',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slide9-12.webp',
            price: '140 715',
            country: 'ИСЛАНДИЯ',
            title: 'Майские каникулы в Исландии',
        },
        {
            img: 'img/approaching-tours/slide9-12.webp',
            price: '37 302',
            country: 'ТУРЦИЯ',
            title: 'Под небом Тосканы',
        },
        {
            img: 'img/approaching-tours/slide9-12.webp',
            price: '145 000',
            country: 'НОРВЕГИЯ, ШПИЦБЕРГЕН',
            title: 'Под небом Тосканы',
        },
    ];
    
    
    function slider(slide){
        const returnShablon = `
            <li class="popular-slider__item">
                <div class="popular-slider__img-block">
                    <img  class="popular-slider__img" src="${slide.img}" alt="${slide.title}">
    
                    <span class="popular-slider__price">
                        от ${slide.price} ₽
                    </span>
                </div>
    
                <span class="popular-slider__country">
                    ${slide.country}
                </span>
    
                <h3 class="popular-slider__title">
                    ${slide.title}
                </h3>
            </li>
        `;

        return returnShablon;
    }
    
    const templates = sliderContent.map( slid => slider(slid));
    const html = templates.join( ' ' );
    
    document.querySelector('#js-popular-slider-track').innerHTML = html;
})