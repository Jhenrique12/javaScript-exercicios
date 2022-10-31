//Atacante
const atacante = prompt("Qual o nome do atacante? ");
let poderDeAtaque = parseFloat(prompt("Qual o valor do poder de ataque dele? "));

//Defensor
const defensor = prompt("Qual o nome do defensor? ");
let vidaDefensor = parseFloat(prompt("Qual a quantidade de vida do dele? "));
let poderDeDefesa = parseFloat(prompt("Qual o valor do poder de defesa do defensor? "));
let escudo = confirm("O defensor possui um escudo? OK = SIM e Cancelar = NÃO");

if (poderDeAtaque > poderDeDefesa) {
  var danoCausado = escudo ? (poderDeAtaque - poderDeDefesa) / 2 :(poderDeAtaque - poderDeDefesa);
}

let vidaDefensorAtual = vidaDefensor - danoCausado;
alert(
  `O atacante ${atacante} possui ${poderDeAtaque} de dano e o defensor ${defensor} possui ${vidaDefensor} de vida e ${poderDeDefesa} de defesa.`
);

alert("O golpe foi dado!");
alert(`O dano causado pelo atacante foi de ${danoCausado}`);
alert(`Vida atual do defensor: ${vidaDefensorAtual}`);

var resultadoDaLuta =
  vidaDefensorAtual <= 0
    ? alert(`${atacante} MATA ${defensor} e VENCE a luta!`)
    : alert(
        `${defensor} RESISTE ao ataque de ${atacante} e SOBREVIVE na luta!`
      );