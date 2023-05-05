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

document.querySelector('#toggle-theme').addEventListener('click', toggleTheme);