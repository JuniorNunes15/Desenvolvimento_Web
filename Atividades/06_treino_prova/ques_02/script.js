const imagens = [
    '🍎', '🍌', '🍇', '🍉',
    '🍓', '🍍', '🥝', '🍒'
];

const cartas = [...imagens, ...imagens]; // duplicar
cartas.sort(() => 0.5 - Math.random()); // embaralhar

const tabuleiro = document.getElementById('tabuleiro');
let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;
let pontos = 0;

function criarTabuleiro() {
    cartas.forEach((img, i) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.valor = img;
    carta.dataset.index = i;
    carta.style.backgroundImage = "none";

    carta.addEventListener('click', () => {
        if (bloqueio || carta.classList.contains('revelada')) return;

        revelarCarta(carta);

        if (!primeiraCarta) {
        primeiraCarta = carta;
        } else {
        segundaCarta = carta;
        verificarCartas();
        }
    });

    tabuleiro.appendChild(carta);
    });
}

function revelarCarta(carta) {
    carta.style.backgroundImage = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='50'>${carta.dataset.valor}</text></svg>")`;
}

function esconderCarta(carta) {
    carta.style.backgroundImage = 'none';
}

function verificarCartas() {
    bloqueio = true;

    if (primeiraCarta.dataset.valor === segundaCarta.dataset.valor) {
    primeiraCarta.classList.add('revelada');
    segundaCarta.classList.add('revelada');
    pontos++;
    document.getElementById('pontuacao').innerText = `Pontos: ${pontos}`;
    resetarCartas();
    verificarFimDeJogo();
    } else {
    setTimeout(() => {
        esconderCarta(primeiraCarta);
        esconderCarta(segundaCarta);
        resetarCartas();
    }, 1000);
    }
}

function resetarCartas() {
    primeiraCarta = null;
    segundaCarta = null;
    bloqueio = false;
}

function verificarFimDeJogo() {
    const todasReveladas = document.querySelectorAll('.carta.revelada').length === cartas.length;
    if (todasReveladas) {
    setTimeout(() => {
        alert("Parabéns! Você completou o jogo!");
    }, 500);
    }
}

criarTabuleiro();
