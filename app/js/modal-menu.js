document.addEventListener("DOMContentLoaded", function(event) { 
    const menuOpenBtn = document.querySelector('#js-open-menu'),
          menuCloseBtn = document.querySelector('#js-close-menu'),
          menuBlock = document.querySelector('#js-menu-block'),
          body = document.querySelector('body');

    menuOpenBtn.addEventListener('click', function(e){
        menuBlock.classList.add('activ-modal');
        body.style.overflow = 'hidden';
        body.classList.add('obfuscation');
        menuOpenBtn.setAttribute('aria-expanded', 'true');

    });

    menuCloseBtn.addEventListener('click', function(e){
        menuBlock.classList.remove('activ-modal')
        body.style.overflow = 'auto';
        body.classList.remove('obfuscation');
        menuOpenBtn.setAttribute('aria-expanded', 'false');
    })

    body.addEventListener('click', function(e){
        if(e.target != menuOpenBtn && !e.target.closest('#js-menu-block')){
            menuBlock.classList.remove('activ-modal')
            body.style.overflow = 'auto';
            body.classList.remove('obfuscation');
        }
    })
})