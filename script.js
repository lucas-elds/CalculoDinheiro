let recebido = document.querySelector("#recebido");
let valor = document.querySelector("#valor");
const troco = document.querySelector("#troco");
let notasHTML = document.querySelector("#notas");
const notas = [200, 100, 50, 20, 10, 5, 2, 1];
const cedulas = [
  "/img/real200.png",
  "/img/real100.png",
  "/img/real50.png",
  "/img/real20.png",
  "/img/real10.png",
  "/img/real5.png",
  "/img/real2.png",
  "/img/real1.png",
];

function calcular() {
  let calculo = recebido.value - valor.value;
  notasHTML.innerHTML = `<h2>Troco: ${calculo}</h2>`;
  while (calculo > 0) {
    for (let i = 0; i < notas.length; i++) {
      if (notas[i] <= calculo) {
        let imagem = document.createElement("img");
        imagem.src = cedulas[i];
        let item = document.createElement("li");
        item.innerHTML = notas[i];
        notasHTML.appendChild(item);
        notasHTML.appendChild(imagem);
        calculo = calculo - notas[i];
        break;
      }
    }
  }
}
