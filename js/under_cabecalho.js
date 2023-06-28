(function(){
    const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

    const botaoMobile = document.querySelector('.botao-mobile');
    const botaoMobileSpan = document.querySelectorAll('.botao-mobile span');
    const [span1, span2, span3] = botaoMobileSpan;

    const botaoOculto = document.querySelector('.botao-oculto');
    const botaoOcultoSpan = document.querySelectorAll('.botao-oculto span');
    const [span4, span5] = botaoOcultoSpan;

    document.addEventListener('click', e => {

        const el = e.target;

        if(el == botaoMobile || el == span1 || el == span2 || el == span3){
            cabecalhoOculto.classList.add('container-oculto-desocultar');
        } else if(el == botaoOculto || el == span4 || el == span5){
            cabecalhoOculto.classList.remove('container-oculto-desocultar');
        }

    })

})();