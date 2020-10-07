document.addEventListener("DOMContentLoaded", function(e) { 
    const btnList = document.querySelector('#js-list-btn');

    btnList.addEventListener('click', function(e){
        e.preventDefault();

        if(e.target.tagName === 'BUTTON'){
            const CL = e.target.classList;

            if(CL.contains('approaching-tours__first-btn')){
                if(e.target.classList.contains('first-activ-btn')){
                    e.target.classList.remove('first-activ-btn')
                }else{
                    e.target.classList.add('first-activ-btn')
                }
            }else{
                if(CL.contains('next-activ-btn')){
                    e.target.classList.remove('next-activ-btn')
                }else{
                    e.target.classList.add('next-activ-btn')
                }
            }

            
        }
    })
})