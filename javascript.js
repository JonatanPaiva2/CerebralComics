/*
function checkScreenSize() {
    var areaEsquerda = document.getElementById('area-esquerda');
    var areaDireita = document.getElementById('area-direita');
    var areaAzul = document.getElementById('azul');
    if (window.innerWidth >= 992) {
        areaEsquerda.setAttribute('onmouseover', 'animacaoAreaEsq()');
        areaDireita.setAttribute('onmouseover', 'animacaoAreaDir()');
        areaAzul.setAttribute('onmouseover', 'animacaoAzul()');
        areaEsquerda.setAttribute('onmouseout', 'areaNormal()');
        areaDireita.setAttribute('onmouseout', 'areaNormal()');
        areaAzul.setAttribute('onmouseout', 'areaNormal()');
    } else if (window.innerWidth < 992) {
        areaEsquerda.removeAttribute('onmouseover', 'animacaoAreaEsq()');
        areaDireita.removeAttribute('onmouseover', 'animacaoAreaDir()');
        areaAzul.removeAttribute('onmouseover', 'animacaoAzul()');
        areaEsquerda.removeAttribute('onmouseout', 'areaNormal()');
        areaDireita.removeAttribute('onmousout', 'areaNormal()');
        areaAzul.removeAttribute('onmousout', 'areaNormal()');
    }
}
*/

function checkScreenSize() {
    var areaEsquerda = document.getElementById('area-esquerda');
    var areaDireita = document.getElementById('area-direita');
    var areaAzul = document.getElementById('azul');
    var capitulosCodinome = document.getElementById('capitulos-codinome');
    var quemSomosP = document.querySelector('#quem-somos > p');
    
    if (window.innerWidth >= 992) {
      areaEsquerda.addEventListener('mouseover', animacaoAreaEsq);
      areaDireita.addEventListener('mouseover', animacaoAreaDir);
      areaAzul.addEventListener('mouseover', animacaoAzul);
      areaEsquerda.addEventListener('mouseout', areaNormal);
      areaDireita.addEventListener('mouseout', areaNormal);
      areaAzul.addEventListener('mouseout', areaNormal);
      capitulosCodinome.style.left = '29%';
      capitulosCodinome.style.opacity = '0';
      capitulosCodinome.style.transition = 'all 0.4s ease-in-out';
      areaAzul.style.height = "100px";
      quemSomosP.style.opacity = '0';
    } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
    areaEsquerda.removeEventListener('mouseover', animacaoAreaEsq);
      areaDireita.removeEventListener('mouseover', animacaoAreaDir);
      areaAzul.removeEventListener('mouseover', animacaoAzul);
      areaEsquerda.removeEventListener('mouseout', areaNormal);
      areaDireita.removeEventListener('mouseout', areaNormal);
      areaAzul.removeEventListener('mouseout', areaNormal);
      capitulosCodinome.style.left = '28%';
      capitulosCodinome.style.opacity = '100';
      capitulosCodinome.style.transition = 'none';
      areaAzul.style.height = "400px";
      quemSomosP.style.opacity = '100%';
    } else {
      areaEsquerda.removeEventListener('mouseover', animacaoAreaEsq);
      areaDireita.removeEventListener('mouseover', animacaoAreaDir);
      areaAzul.removeEventListener('mouseover', animacaoAzul);
      areaEsquerda.removeEventListener('mouseout', areaNormal);
      areaDireita.removeEventListener('mouseout', areaNormal);
      areaAzul.removeEventListener('mouseout', areaNormal);
      capitulosCodinome.style.left = '13%';
      capitulosCodinome.style.opacity = '100';
      capitulosCodinome.style.transition = 'none';
      areaAzul.style.height = "450px";
      quemSomosP.style.opacity = '100%';
    }
  }
  

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
    document.getElementById("azul").style.height = '450px'
    document.getElementById("texto-quem-somos").style.opacity = '100%'
    document.getElementById("texto-quem-somos").style.transitionDelay = '0.2s'
}


