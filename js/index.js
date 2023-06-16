(function(){

    const homeA = document.querySelector('.home a');
    const subir = document.querySelector('#subir');

    document.addEventListener('click', e => {

        const el = e.target;

        if(el == homeA || el == subir){
            e.preventDefault();
            const href = el.getAttribute('href');
            const to = document.querySelector(href).offsetTop;

            scroll({
                top: to - 80,
                behavior: 'smooth',
            })
        }
 
    })

})();