var theme = {
    backgroundColor: '#fff',
    logoSrc: 'imagens/logo_black.png',
    innerHTML: 'Modo escuro',
    txtColor: '#000'
}

function setTheme() {
    var body = document.querySelector('body');
    var img = document.querySelector('#topo img');
    var botao = document.getElementById('temaDeFundo');

    body.style.backgroundColor = theme.backgroundColor;
    img.src = theme.logoSrc;
    botao.innerHTML = theme.innerHTML;
    botao.style.backgroundColor = theme.backgroundColor;
    botao.style.color = theme.txtColor;
}

function temaDeFundo() {
    if (theme.backgroundColor === '#fff') {
        theme.backgroundColor = '#000';
        theme.logoSrc = 'imagens/logo_white.png';
        theme.innerHTML = 'Modo claro';
        theme.txtColor = '#fff';
    } else {
        theme.backgroundColor = '#fff';
        theme.logoSrc = 'imagens/logo_black.png';
        theme.innerHTML = 'Modo escuro';
        theme.txtColor = '#000';
    }

    localStorage.setItem('theme', JSON.stringify(theme));
  setTheme();
}

let storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  theme = JSON.parse(storedTheme);
}

setTheme();


nomePaginaAtual = location.pathname.split('/').pop()
numeroPaginaAtual = parseInt(nomePaginaAtual.match(/\d+/));

if (numeroPaginaAtual > 1) {
    var link = document.createElement('a');
    link.href = 'codinome-' + (numeroPaginaAtual - 1) +'.html';
    link.textContent = 'Anterior';
    
    var linkContainer = document.getElementById('menu-final');
    linkContainer.insertBefore(link, linkContainer.children[0]);
}

if (numeroPaginaAtual != 15) {
    var link = document.createElement('a');
    link.href = 'codinome-' + (numeroPaginaAtual + 1) +'.html';
    link.textContent = 'Próximo';
    
    var linkContainer = document.getElementById('menu-final');
    linkContainer.appendChild(link);
}
