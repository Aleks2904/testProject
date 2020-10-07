document.addEventListener("DOMContentLoaded", function(event) { 
    const consentLabel = document.querySelector('#js-consent'),
        consentModal = document.querySelector('#js-consent-modal'),
        checkInput = document.querySelector('#data-processing')


    consentLabel.addEventListener('click', function(e){
        e.preventDefault();

        if(checkInput.getAttribute('checked') === null){
            consentModal.style.display="flex";
        }else{
            checkInput.removeAttribute('checked')
        }

    })

    checkInput.addEventListener('keyup', function(e){
        if(e.code === 'Space'){
            e.preventDefault();
            consentModal.style.display="flex";
        }
    })

    checkInput.addEventListener('click', function(e){
        e.preventDefault();
        consentModal.style.display="flex";
    })

    consentModal.addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON'){
            e.preventDefault();
            consentModal.style.display="none";

            const val = e.target.value

            if( val === 'yes'){
                checkInput.setAttribute('checked', 'true')
            }
        }
    })
})