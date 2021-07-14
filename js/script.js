// START - FUNÇÃO PARA ABERTURA E FECHAMENTO DO MENU DE NAVEGAÇÃO  //
window.onload = function () {
    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu(event) {
        if(event.type == 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
        }
    } 

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
};

// start - função para abertura e fechamento do sub-menu de navegação  //
function onClickMenu(li) {
    const liMenu = document.getElementById(li)

    if(liMenu.style.display == 'block') {
        liMenu.style.display = 'none';
    } else {
        liMenu.style.display = 'block';
    }
    
};
// end - função para abertura e fechamento do sub-menu de navegação  //
// END - FUNÇÃO PARA ABERTURA E FECHAMENTO DO MENU DE NAVEGAÇÃO  //