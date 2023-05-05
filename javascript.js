function animacaoAreaEsq() {
    document.getElementById("area-esquerda").style.width = '69%'
    document.getElementById("area-direita").style.width = '29%'
    document.getElementById("capitulos-codinome").style.left = '36%'
    document.getElementById("capitulos-codinome").style.top = '65%'
    document.getElementById("capitulos-codinome").style.opacity = '100%'
}

function animacaoAreaDir() {
    document.getElementById("area-esquerda").style.width = '29%'
    document.getElementById("area-direita").style.width = '69%'
    document.getElementById("capitulos-codinome").style.left = '16%'
    document.getElementById("capitulos-codinome").style.top = '60%'
    document.getElementById("capitulos-codinome").style.opacity = '0%'
}

function areaNormal() {
    document.getElementById("area-esquerda").style.width = '49%'
    document.getElementById("area-direita").style.width = '49%'
    document.getElementById("capitulos-codinome").style.left = '29%'
    document.getElementById("capitulos-codinome").style.top = '60%'
    document.getElementById("capitulos-codinome").style.opacity = '0%'
    document.getElementById("azul").style.height = '100px'
    document.getElementById("texto-quem-somos").style.opacity = '0%'
    document.getElementById("azul").style.transitionDelay = '0.2s'
}

function animacaoAzul() {
    document.getElementById("azul").style.height = '400px'
    document.getElementById("texto-quem-somos").style.opacity = '100%'
    document.getElementById("texto-quem-somos").style.transitionDelay = '0.2s'
}



