(function(){
    const divPortuguesImgDesktop = document.querySelector('.cabecalho .br');
    const divPortuguesPDesktop = document.querySelector('.cabecalho .br ~ p');
    const divPortuguesDesktop = document.querySelector('.cabecalho .dropdown>div:nth-of-type(1)');

    const linguaAtualDesktop = document.querySelector('.cabecalho .lingua-atual');

    const divInglesImgDesktop = document.querySelector('.cabecalho .en');
    const divInglesPDesktop = document.querySelector('.cabecalho .en ~ p');
    const divInglesDesktop = document.querySelector('.cabecalho .dropdown>div:nth-of-type(2)');

    const divPortuguesImgMobile = document.querySelector('.cabecalho-oculto .br');
    const divPortuguesPMobile = document.querySelector('.cabecalho-oculto .br ~ p');
    const divPortuguesMobile = document.querySelector('.cabecalho-oculto .dropdown>div:nth-of-type(1)');

    const linguaAtualMobile = document.querySelector('.cabecalho-oculto .lingua-atual');

    const divInglesImgMobile = document.querySelector('.cabecalho-oculto .en');
    const divInglesPMobile = document.querySelector('.cabecalho-oculto .en ~ p');
    const divInglesMobile = document.querySelector('.cabecalho-oculto .dropdown>div:nth-of-type(2)');

    const cabecalhoNavA = document.querySelectorAll('.cabecalho nav a');
    const [a1, a2, a3, a4, a5] = cabecalhoNavA;

    const cabecalhoOcultoNavA = document.querySelectorAll('.cabecalho-oculto nav a');
    const [a6, a7, a8, a9, a10] = cabecalhoOcultoNavA;

    const homeA = document.querySelector('.home a');
    const homeP = document.querySelector('.home p');

    const sobreh1 = document.querySelector('.sobre h1');
    const sobreP = document.querySelector('.sobre p');
    const sobreA = document.querySelector('.sobre a');

    const solucaoh1 = document.querySelector('.container-solucoes h1');

    const solucaoSpan1 = document.querySelector('.solucao:nth-of-type(1) span');
    const solucaoA1 = document.querySelector('.solucao:nth-of-type(1) a');
    const solucaoP1 = document.querySelector('.solucao:nth-of-type(1) p');

    const solucaoSpan2 = document.querySelector('.solucao:nth-of-type(2) span');
    const solucaoA2 = document.querySelector('.solucao:nth-of-type(2) a');
    const solucaoP2 = document.querySelector('.solucao:nth-of-type(2) p');

    const solucaoSpan3 = document.querySelector('.solucao:nth-of-type(3) span');
    const solucaoA3 = document.querySelector('.solucao:nth-of-type(3) a');
    const solucaoP3 = document.querySelector('.solucao:nth-of-type(3) p');

    const blogH1 = document.querySelector('.container-blog h1');
    const blogH2post1 = document.querySelector('.post:nth-of-type(1) h2');
    const blogppost1 = document.querySelector('.post:nth-of-type(1) p');
    const blogh3post1 = document.querySelector('.post:nth-of-type(1) h3');

    const blogH2post2 = document.querySelector('.post:nth-of-type(2) h2');
    const blogppost2 = document.querySelector('.post:nth-of-type(2) p');
    const blogh3post2 = document.querySelector('.post:nth-of-type(2) h3');

    const contatosh1 = document.querySelector('.container-contato h1');
    const contatosA = document.querySelector('.contatos>div:nth-of-type(2) a');

    const rodapeP = document.querySelector('.rodape p');

    document.addEventListener('click', e => {

        const el = e.target;
        console.log(el);

        if(el == divPortuguesImgDesktop || el == divPortuguesPDesktop || el == divPortuguesDesktop
            || el == divPortuguesImgMobile || el == divPortuguesPMobile || el == divPortuguesMobile){
            linguaAtualDesktop.innerHTML = ''
            linguaAtualMobile.innerHTML = ''
            let img = document.createElement('img');
            img.setAttribute('src', '../images/portugues.png');
            img.setAttribute('class', 'br');
            img.setAttribute('alt', 'TYC - Take your cloud - Portugues');
            linguaAtualDesktop.appendChild(img);

            img = document.createElement('img');
            img.setAttribute('src', '../images/portugues.png');
            img.setAttribute('class', 'br');
            img.setAttribute('alt', 'TYC - Take your cloud - Portugues');
            linguaAtualMobile.appendChild(img);

            a1.innerText = 'Início';
            a6.innerText = 'Início';

            a2.innerText = 'Sobre';
            a7.innerText = 'Sobre';

            a3.innerText = 'Soluções';
            a8.innerText = 'Soluções';

            a4.innerText = 'Blog';
            a9.innerText = 'Blog';

            a5.innerText = 'Contato';
            a10.innerText = 'Contato';

            homeA.innerText = 'Entre em contato conosco';
            homeP.innerHTML = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'
            
            sobreh1.innerText = 'Sobre nós';
            sobreP.innerText = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';
            sobreA.innerText = 'Saiba mais';

            solucaoh1.innerHTML = 'Soluções';

            solucaoSpan1.innerHTML = 'Consultoria Openstack';
            solucaoA1.innerHTML = 'Ver mais';
            solucaoP1.innerHTML = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';

            solucaoSpan2.innerHTML = 'Consultoria Openstack';
            solucaoA2.innerHTML = 'Ver mais';
            solucaoP2.innerHTML = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';

            solucaoSpan3.innerHTML = 'Consultoria Openstack';
            solucaoA3.innerHTML = 'Ver mais';
            solucaoP3.innerHTML = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';

            blogH1.innerHTML = 'O nosso Blog';
            blogH2post1.innerHTML = 'O que é Lorem Ipsum?';
            blogppost1.innerHTML = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';
            blogh3post1.innerHTML = 'Ver mais';

            blogH2post2.innerHTML = 'O que é Lorem Ipsum?';
            blogppost2.innerHTML = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';
            blogh3post2.innerHTML = 'Ver mais';
            
            contatosh1.innerHTML = 'Entre em Contato Conosco';
            contatosA.innerHTML = 'Entre em contato';

            rodapeP.innerHTML = '© 2023 Take your cloud - Todos os direitos reservados!';
        }

        if(el == divInglesImgDesktop || el == divInglesPDesktop || el == divInglesDesktop
            || el == divInglesImgMobile || el == divInglesPMobile || el == divInglesMobile){
            linguaAtualDesktop.innerHTML = ''
            linguaAtualMobile.innerHTML = ''
            let img = document.createElement('img');
            img.setAttribute('src', '../images/ingles.png')
            img.setAttribute('class', 'en')
            img.setAttribute('alt', 'TYC - Take your cloud - English')
            linguaAtualDesktop.appendChild(img);

            img = document.createElement('img');
            img.setAttribute('src', '../images/ingles.png')
            img.setAttribute('class', 'en')
            img.setAttribute('alt', 'TYC - Take your cloud - English')
            linguaAtualMobile.appendChild(img);

            a1.innerText = 'Home';
            a6.innerText = 'Home';

            a2.innerText = 'About';
            a7.innerText = 'About';

            a3.innerText = 'Solutions';
            a8.innerText = 'Solutions';

            a4.innerText = 'Blog';
            a9.innerText = 'Blog';

            a5.innerText = 'Contact';
            a10.innerText = 'Contact';

            homeA.innerText = 'Contact us';
            homeP.innerHTML = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.'
        
            sobreh1.innerText = 'About Us';
            sobreP.innerText = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.';
            sobreA.innerText = 'Know more';

            solucaoh1.innerHTML = 'Solutions';

            solucaoSpan1.innerHTML = 'Openstack Consulting';
            solucaoA1.innerHTML = 'View more';
            solucaoP1.innerHTML = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.';

            solucaoSpan2.innerHTML = 'Openstack Consulting';
            solucaoA2.innerHTML = 'View more';
            solucaoP2.innerHTML = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.';

            solucaoSpan3.innerHTML = 'Openstack Consulting';
            solucaoA3.innerHTML = 'View more';
            solucaoP3.innerHTML = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.';

            blogH1.innerHTML = 'Our Blog';
            blogH2post1.innerHTML = 'What is Lorem Ipsum?';
            blogppost1.innerHTML = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.';
            blogh3post1.innerHTML = 'View more';

            blogH2post2.innerHTML = 'What is Lorem Ipsum?';
            blogppost2.innerHTML = 'Lorem Ipsum is simply a text simulation of the printing and typesetting industry, and has been in use since the 16th century, when an unknown printer picked up a tray of typefaces and shuffled them to make a typeface model book.';
            blogh3post2.innerHTML = 'View more';

            contatosh1.innerHTML = 'Contact us';
            contatosA.innerHTML = 'Contact';

            rodapeP.innerHTML = '© 2023 Take your cloud - All rights reserved!';
        }

        

    });

})();