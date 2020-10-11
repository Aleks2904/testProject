document.addEventListener("DOMContentLoaded", function(e) { 
    const btnList = document.querySelector('#js-list-btn'),
          listPerproposals = document.querySelector('#js-approaching-track');

    btnList.addEventListener('click', function(e){
        e.preventDefault();

        function registr(country){
            country = country.replace(/\s+/g, ' ').trim();
            country = country.toLowerCase();
            return country;
        }

        if(e.target.tagName === 'BUTTON'){
            const CL = e.target.classList,
                  lPChildren = listPerproposals.children;

            let vButton = e.target.children[0].textContent;
            vButton = registr(vButton);

            //cтили кнопкам

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

            //фильтр

            for(let i = 0; i < lPChildren.length; i++){
                const itemCountry = lPChildren[i].querySelector('.AT-slider__country');
 
                let textIC = itemCountry.textContent;
                textIC = registr(textIC);
 
                if(textIC == vButton){
                    if(e.target.classList.contains('first-activ-btn') || e.target.classList.contains('next-activ-btn')){
                        if(textIC == 'испания'){
                            itemCountry.parentElement.classList.add('spain')
                        }
                        if(textIC == 'италия'){
                            itemCountry.parentElement.classList.add('italy')
                        }
                        if(textIC == 'исландия'){
                            itemCountry.parentElement.classList.add('iceland')
                        }
                        if(textIC == 'турция'){
                            itemCountry.parentElement.classList.add('turkey')
                        }
                    }else{
                        if(textIC == 'испания'){
                            itemCountry.parentElement.classList.remove('spain')
                        }
                        if(textIC == 'италия'){
                            itemCountry.parentElement.classList.remove('italy')
                        }
                        if(textIC == 'исландия'){
                            itemCountry.parentElement.classList.remove('iceland')
                        }
                        if(textIC == 'турция'){
                            itemCountry.parentElement.classList.remove('turkey')
                        }
                    }
                }
             }
        }
    })
})