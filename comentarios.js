let imagens = [
  "imagens/AAAA",
  "imagens/imagem2.jpg",
  "imagens/imagem3.jpg",
  "imagens/imagem4.jpg",
  "imagens/imagem5.jpg",
  "imagens/imagem6.jpg",
  "imagens/imagem7.jpg",
  "imagens/imagem8.jpg",
  "imagens/imagem9.jpg",
  "imagens/imagem10.jpg"
];

let indexAtual = 0;

function mostrarImagem(index) {
  document.getElementById("imagem-carrossel").src = imagens[index];
}

function proximaImagem() {
  indexAtual = (indexAtual + 1) % imagens.length;
  mostrarImagem(indexAtual);
}

function imagemAnterior() {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indexAtual);
}

window.onload = function () {
  mostrarImagem(indexAtual);
};
