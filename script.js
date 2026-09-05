const fotos = document.querySelectorAll(".galeria-container img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const proxima = document.querySelector(".proxima");
const anterior = document.querySelector(".anterior");
const fechar = document.querySelector(".fechar");
const contador = document.querySelector(".contador");

let indiceAtual = 0;

// ABRIR FOTO
fotos.forEach(function(foto, indice) {
    foto.addEventListener("click", function() {
        indiceAtual = indice;
        lightboxImg.src = foto.src;
      contador.textContent = (indiceAtual + 1) + " / " + fotos.length;
        lightbox.classList.add("active");
    });
});

// PRÓXIMA FOTO
proxima.addEventListener("click", function(event) {
    event.stopPropagation();

    indiceAtual++;

    if (indiceAtual >= fotos.length) {
        indiceAtual = 0;
    }

    lightboxImg.src = fotos[indiceAtual].src;
  contador.textContent = (indiceAtual + 1) + " / " + fotos.length;
});

// FOTO ANTERIOR
anterior.addEventListener("click", function(event) {
    event.stopPropagation();

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = fotos.length - 1;
    }

    lightboxImg.src = fotos[indiceAtual].src;
  contador.textContent = (indiceAtual + 1) + " / " + fotos.length;
});

// FECHAR AO CLICAR NO FUNDO
lightbox.addEventListener("click", function() {
    lightbox.classList.remove("active");
});

// BOTÃO FECHAR
fechar.addEventListener("click", function(event) {
    event.stopPropagation();

    lightbox.classList.remove("active");
});
// DESLIZAR NO CELULAR
let toqueInicialX = 0;
let toqueFinalX = 0;

lightbox.addEventListener("touchstart", function(event) {
    toqueInicialX = event.touches[0].clientX;
});

lightbox.addEventListener("touchend", function(event) {
    toqueFinalX = event.changedTouches[0].clientX;

    const distancia = toqueFinalX - toqueInicialX;

    // Deslizar para a esquerda = próxima foto
    if (distancia < -50) {
        indiceAtual++;

        if (indiceAtual >= fotos.length) {
            indiceAtual = 0;
        }

        lightboxImg.src = fotos[indiceAtual].src;
        contador.textContent =
            (indiceAtual + 1) + " / " + fotos.length;
    }

    // Deslizar para a direita = foto anterior
    if (distancia > 50) {
        indiceAtual--;

        if (indiceAtual < 0) {
            indiceAtual = fotos.length - 1;
        }

        lightboxImg.src = fotos[indiceAtual].src;
        contador.textContent =
            (indiceAtual + 1) + " / " + fotos.length;
    }
});
//Verifição da posição de cada tela//
const elementos = document.querySelectorAll(".revelar");

function verificarRevelacao() {
    elementos.forEach(function(elemento) {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add("visivel");
        }
    });
}

window.addEventListener("scroll", verificarRevelacao);

verificarRevelacao();
window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.classList.add("fixo");
    } else {
        header.classList.remove("fixo");
    }

});