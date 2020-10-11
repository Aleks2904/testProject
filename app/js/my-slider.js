$(document).ready(function() { 

    //количество элементо регулируется их шириной в vw и растоянием между ними(если больше одного элемента)

    const   btnNextApproaching = $('#js-approaching-btn-next'),
            btnPrevApproaching = $('#js-approaching-btn-prev'),
            btnAddApproaching = $('#js-approaching-btn-add'),
            btnNextPopular = $('#js-popular-slider-btn-next'),
            btnPrevPopular = $('#js-popular-slider-btn-prev');

    class MySlider{
        constructor(arr){
            this.posit = 0;
            this.wraper = $(`#${arr.id}`);
            this.suffix = `${arr.suffix}`;
            this.btnPrev = $(`#${arr.btnPrev}`);
            this.btnNext = $(`#${arr.btnNext}`);
            this.btnAdd = $(`#${arr.btnAdd}`)
            this.arr = arr;

            this.conteiner = this.wraper.find(`.${this.suffix}__container`);
            this.track = this.wraper.find(`.${this.suffix}__track`);
            this.item = this.wraper.find(`.${this.suffix}__item`);


            /*
                this.slToShow = arr.slidesToShow;       //показл элементов в строке
                this.slToRow = arr.slidesToRow;         //показл элементов в колонке
                this.slToScroll = arr.slidesToScroll;   //скролл элементов в строке
                this.gapСl = arr.gapСolumn              //растояние между слайдами в строке
                this.gapRw = arr.gapRow                 //растояние между слайдами в колонке
             */
        }

        btnChechked(){
            const   array = this.arr.breacPoint,
            doc_w = $(document).width();

            for( let i = 0; i < array.length; i++){
                if( doc_w < array[i].br){

                    const track = this.track.children();

                    let allWidth = 0,
                        allHeigh = 0,
                        allInfo = []
                    $.each(track, function(i, p) {
                        const   w_div = $(p).width(),
                                h_div = $(p).height(),
                                all_in = {w: w_div, h: h_div};

                        allInfo.push(all_in);
                        allWidth = allWidth + w_div;
                        allHeigh = allHeigh + h_div;
                    });

                    const   lTrack = this.track.children().length, //количество всех элементов;
                            slToShow = array[i].slidesToShow,
                            elemStrok = lTrack / slToShow, // элементов в строке
                            itemWh = this.item.width(), //ширина одного элемента
                            gapСl = array[i].gapСolumn,
                            checkEquation = ((elemStrok * itemWh) + ((elemStrok * gapСl) - gapСl)) - ((itemWh * slToShow)+ (slToShow - 1) * gapСl); //высчитываем всю ширину слайдов кроме видимых в месте с отступами

                    let result = 0 - checkEquation, //отнимаем от стартового значение ширину, т.к. крутим слайдер в отрицательную сторону листая в перед
                        hhConteiner = this.conteiner.height();

                    result = result.toFixed(3);

                    this.btnPrev.removeClass('btnDisable');
                    this.btnNext.removeClass('btnDisable');
                    this.btnAdd.removeClass('btnDisableAdd');

                    if(this.posit >= 0){
                        this.btnPrev.addClass('btnDisable');
                        return false;
                    }
                    if(this.posit == result){
                        this.btnNext.addClass('btnDisable');
                        return false;
                    }
                    
                    if(hhConteiner >= allHeigh){
                        this.btnAdd.addClass('btnDisableAdd');
                        return false;
                    }
                }
            }
        }

        meaning(){
            const   array = this.arr.breacPoint,
                    doc_w = $(document).width();

            for( let i = 0; i < array.length; i++){
                if( doc_w < array[i].br){

                    const track = this.track.children();

                    let allWidth = 0,
                        allHeigh = 0,
                        allInfo = []
                    $.each(track, function(i, p) {
                        const   w_div = $(p).width(),
                                h_div = $(p).height(),
                                all_in = {w: w_div, h: h_div};

                        allInfo.push(all_in);
                        allWidth = allWidth + w_div;
                        allHeigh = allHeigh + h_div;
                    });

                    if(array[i].vertical == false){
                        const   slToShow = array[i].slidesToShow, //сколько показываем в строку
                                slToRow = array[i].slidesToRow, //сколько показывает в колонку
                                gapСl = array[i].gapСolumn, //растояние в строке
                                gapRw = array[i].gapRow,    //растояние в колонке
                                startEl = array[i].start,  //начальный элемент
                                sumEl = allInfo.length,     //колиечество всех элементов
                                wStartEl = allInfo[startEl].w, //ширина стартового элемента
                                hStartEl = allInfo[startEl].h,
                                whConteiner = (wStartEl * slToShow) + ((gapСl * slToShow)-gapСl), //ширина контейнера для показа
                                resultS = sumEl / slToRow; //количество строк

                        let wInStartEl = 0; //ширина всех элементов до стартового

                        for(let i = (startEl - 1); i >= 0; i--){
                            wInStartEl += allInfo[i].w;
                        };

                        const allWhInStartEl = wInStartEl + (gapСl * startEl); //ширина всех элементов с гэпом до старотового
                    
                        this.track.css('grid-template-columns', `repeat(${resultS}, 1fr)`); //количество столбцов
                        this.track.css('grid-template-rows', `repeat(${slToRow}, 1fr)`);
                        this.track.css('grid-auto-flow', 'column');
                        this.track.css('grid-auto-rows', 'auto');

                        this.track.css('grid-column-gap', `${gapСl}px`); //растояние в строке ( в длину )
                        this.track.css('grid-row-gap', `${gapRw}px`);    //растояние между строками (в высоту)
                        this.conteiner.css('width', `${whConteiner}px`); //ширина контейнера для показа
/*
                        this.track.css({
                            transform: `translateX(-${allWhInStartEl}px)`
                        });

                        this.posit = this.posit - allWhInStartEl;
*/
                        return false;
                    }else{
                        const   slToShow = array[i].slidesToShow,
                                slToRow = array[i].slidesToRow,
                                gapСl = array[i].gapСolumn,
                                gapRw = array[i].gapRow,

                                itemWh = allInfo[0].w, //ширина одного элемента
                                itemHh = allInfo[0].h, //высота одного элемента

                                whConteiner = (itemWh * slToShow) + ((gapСl * slToShow)-gapСl), //ширина контейнера для показа
                                hhConteiner = (itemHh * slToRow) + ((gapRw * slToRow)-gapRw); //высота контейнера для показа

                        this.track.css('grid-template-columns', `repeat(${slToShow},1fr)`); //количество столбцов
                        this.track.css('grid-column-gap', `${gapСl}px`); //растояние в строке ( в длину )
                        this.track.css('grid-row-gap', `${gapRw}px`);    //растояние между строками (в высоту)
                        this.conteiner.css('width', `${whConteiner}px`); //ширина контейнера для показа
                        this.conteiner.css('height', `${hhConteiner}px`); //высота контейнера для показа

                        return false;
                    }
                }
            }
        };

        prevScroll(){
            const   array = this.arr.breacPoint,
            doc_w = $(document).width();

            for( let i = 0; i < array.length; i++){
                if( doc_w < array[i].br){

                    const track = this.track.children();

                    let allWidth = 0,
                        allHeigh = 0,
                        allInfo = []
                    $.each(track, function(i, p) {
                        const   w_div = $(p).width(),
                                h_div = $(p).height(),
                                all_in = {w: w_div, h: h_div};

                        allInfo.push(all_in);
                        allWidth = allWidth + w_div;
                        allHeigh = allHeigh + h_div;
                    });

                    if(array[i].vertical == false){
                        this.btnNext.removeClass('btnDisable');


                        const   itemWh = allInfo[0].w, //ширина одного элемента
                                slToScroll = array[i].slidesToScroll,
                                gapСl = array[i].gapСolumn;

                        if(this.posit >= 0){
                            this.btnPrev.addClass('btnDisable');
                            return false;
                        }else{
                            this.btnPrev.removeClass('btnDisable');

                            let scroll = (itemWh * slToScroll) + (slToScroll * gapСl);
                            this.posit += scroll;
                            
                            this.track.css({
                                transform: `translateX(${this.posit}px)`
                            });

                            if(this.posit >= 0){
                                this.btnPrev.addClass('btnDisable');
                            }
                        }
                    }else{
                        this.btnNext.removeClass('btnDisable');

                        const   itemHh = this.item.height(), //ширина одного элемента
                                slToScroll = array[i].slidesToScroll,
                                gapRw = array[i].gapRow;

                        if(this.posit >= 0){
                            this.btnPrev.addClass('btnDisable');
                            return false;
                        }else{
                            this.btnPrev.removeClass('btnDisable');

                            let scroll = (itemHh * slToScroll) + (slToScroll * gapRw);
                            this.posit += scroll;
                            
                            this.track.css({
                                transform: `translateY(${this.posit}px)`
                            });

                            if(this.posit >= 0){
                                this.btnPrev.addClass('btnDisable');
                            }
                        }
                    }
                    return false;
                }
            }
        };

        nextScroll(){ // кнопка в перед
            const   array = this.arr.breacPoint,
            doc_w = $(document).width();

            for( let i = 0; i < array.length; i++){
                if( doc_w < array[i].br){

                    const track = this.track.children();

                    let allWidth = 0,
                        allHeigh = 0,
                        allInfo = []
                    $.each(track, function(i, p) {
                        const   w_div = $(p).width(),
                                h_div = $(p).height(),
                                all_in = {w: w_div, h: h_div};

                        allInfo.push(all_in);
                        allWidth = allWidth + w_div;
                        allHeigh = allHeigh + h_div;
                    });

                    if(array[i].vertical == false){
                        this.btnPrev.removeClass('btnDisable');

                        const   lTrack = this.track.children().length, //количество всех элементов;
                                slToShow = array[i].slidesToShow,
                                slToSRow = array[i].slidesToRow,
                                itemWh = allInfo[0].w, //ширина одного элемента
                                gapСl = array[i].gapСolumn,
                                slToScroll = array[i].slidesToScroll;

                        const checkEquation = ((lTrack/slToSRow) * itemWh) + ((lTrack/slToSRow - 1) * gapСl) - ((slToShow * itemWh) + ((slToShow - 1) * gapСl)); //высчитываем всю ширину слайдов кроме видимых в месте с отступами
                        let result = 0 - checkEquation; //отнимаем от стартового значение ширину, т.к. крутим слайдер в отрицательную сторону листая в перед

                        result = result.toFixed(3);

                        if(this.posit == result){
                            this.btnNext.addClass('btnDisable');
                            return false;
                        }else{
                            let scroll = (itemWh * slToScroll) + (slToScroll * gapСl);
                            this.posit -= scroll;

                            this.track.css({
                                transform: `translateX(${this.posit}px)`
                            });

                            if(this.posit == result){
                                this.btnNext.addClass('btnDisable');
                            }
                        }
                    }else{
                        this.btnPrev.removeClass('btnDisable');

                        const   lTrack = this.track.children().length, //количество всех элементов;
                                slToRow = array[i].slidesToRow, //элементов в ряду
                                itemHh = allInfo[0].h, //высота одного элемента
                                gapRw = array[i].gapRow, //растояние между элементами
                                slToScroll = array[i].slidesToScroll, //по сколько листаем

                                checkEquation = ( allHeigh + ((lTrack * gapRw) - gapRw)) - ((slToRow * itemHh) + ((slToRow * gapRw)) - gapRw) ;

                        let result = 0 - checkEquation; //отнимаем от стартового значение ширину, т.к. крутим слайдер в отрицательную сторону листая в перед

                        result = result.toFixed(3);

                        if(this.posit == result){
                            this.btnNext.addClass('btnDisable');
                            return false;
                        }else{
                            let scroll = (itemHh * slToScroll) + (slToScroll * gapRw);
                            this.posit -= scroll;

                            this.track.css({
                                transform: `translateY(${this.posit}px)`
                            });

                            if(this.posit == result){
                                this.btnNext.addClass('btnDisable');
                            }
                        }
                    }
                    return false;
                }
            }

        };

        add(){
            const   array = this.arr.breacPoint,
            doc_w = $(document).width();

            for( let i = 0; i < array.length; i++){
                if( doc_w < array[i].br){

                    const track = this.track.children();

                    let allWidth = 0,
                        allHeigh = 0,
                        allInfo = []
                    $.each(track, function(i, p) {
                        const   w_div = $(p).width(),
                                h_div = $(p).height(),
                                all_in = {w: w_div, h: h_div};

                        allInfo.push(all_in);
                        allWidth = allWidth + w_div;
                        allHeigh = allHeigh + h_div;
                    });

                    if(array[i].vertical == false){
                        // ... когда нибудь я доделаю
                    }else{
                        const   lTrack = this.track.children().length, //количество всех элементов;
                                slToRow = array[i].slidesToRow, //элементов в ряду
                                itemHh = allInfo[0].h, //высота одного элемента
                                gapRw = array[i].gapRow, //растояние между элементами
                                slToScroll = array[i].slidesToScroll, //по сколько листаем

                                checkEquation = ( allHeigh + ((lTrack * gapRw) - gapRw)) - ((slToRow * itemHh) + ((slToRow * gapRw)) - gapRw) ;

                        let result = 0 - checkEquation, //отнимаем от стартового значение ширину, т.к. крутим слайдер в отрицательную сторону листая в перед
                            hhConteiner = this.conteiner.height(); //высота отображаймого контейнера

                        result = result.toFixed(3);

                        if(hhConteiner >= allHeigh){
                            this.btnAdd.addClass('btnDisableAdd');
                            return false;
                        }else{
                            let scroll = (itemHh * slToScroll) + (slToScroll * gapRw);

                            hhConteiner = hhConteiner + scroll; //высота контейнера + прокрутка

                            const scrollTop = $(window).scrollTop(); //узнаем высоту странице перед скроллам

                            this.conteiner.css('height', `${hhConteiner}px`);

                            $(window).scrollTop(scrollTop); //возвращаемся на высоту странице перед скроллам

                            if(hhConteiner >= allHeigh){
                                this.btnAdd.addClass('btnDisableAdd');
                            }
                        }
                    }
                    return false;
                }
            }
        }

        resize(){ // при изменение ширины окна, сбрасывает слайды в 0
            this.posit = 0;

            this.track.css({
                transform: `translateX(0px)`
            });

            this.conteiner.css('height', `auto`);
        }
    }

    const slideApproaching = {
        id: 'js-approaching-slider', 
        btnPrev: 'js-approaching-btn-prev', 
        btnNext: 'js-approaching-btn-next',
        btnAdd: 'js-approaching-btn-add',
        suffix: 'AT-slider',
        breacPoint: [
            {
                br: 768,              //брейпоинт
                vertical: true,         //вертикалочка
                start: 0,               //с какого элемента начинаем, старт с 0;
                slidesToShow: 1,        //элементов в строку
                slidesToRow: 3,         //элементов в колонку
                slidesToScroll: 1,      //на сколько скролим
                gapСolumn: 20,          //гэп в строку
                gapRow: 29,             //гэп в колонку
            },
            {
                br: 5000,
                vertical: false,
                start: 0,
                slidesToShow: 2, 
                slidesToRow: 2, 
                slidesToScroll: 2, 
                gapСolumn: 20, 
                gapRow: 56,
            }
        ],
    }
    const slidePopular = {
        id: 'js-popular-slider', 
        btnPrev: 'js-popular-slider-btn-prev', 
        btnNext: 'js-popular-slider-btn-next',
        btnAdd: 'js-popular-slider-btn-add',
        suffix: 'popular-slider',
        breacPoint: [
            {
                br: 768,              //брейпоинт
                vertical: false,         //вертикалочка
                start: 0,               //с какого элемента начинаем, старт с 0;
                slidesToShow: 1,        //элементов в строку
                slidesToRow: 1,         //элементов в колонку
                slidesToScroll: 1,      //на сколько скролим
                gapСolumn: 20,          //гэп в строку
                gapRow: 29,             //гэп в колонку
            },
            {
                br: 5000,
                vertical: false,
                start: 0,
                slidesToShow: 2, 
                slidesToRow: 1, 
                slidesToScroll: 2, 
                gapСolumn: 20, 
                gapRow: 56,
            }
        ],
    }

    const mySlideApproaching = new MySlider(slideApproaching);
    const mySlidePopular = new MySlider(slidePopular);

    //+++++++

    mySlideApproaching.meaning();
    mySlideApproaching.btnChechked();

    btnNextApproaching.on('click', function(){
        mySlideApproaching.nextScroll();
    })
    btnPrevApproaching.on('click', function(){
        mySlideApproaching.prevScroll();
    })
    btnAddApproaching.on('click', function(){
        mySlideApproaching.add()
    })

    //+++++++++++

    mySlidePopular.meaning();
    mySlidePopular.btnChechked();

    btnNextPopular.on('click', function(){
        mySlidePopular.nextScroll();
    })
    btnPrevPopular.on('click', function(){
        mySlidePopular.prevScroll();
    })


    $(window).resize(function(){
        mySlideApproaching.resize();
        mySlideApproaching.meaning();
        mySlideApproaching.btnChechked();

        //++++++++++++

        mySlidePopular.resize();
        mySlidePopular.meaning();
        mySlidePopular.btnChechked();
    })

})