// console.log("1 questão: ");
// let firstName = prompt("Digite seu primeiro nome: ");
// let lastName = prompt("Digite seu sobrenome: ");
// let age = 2022 - parseFloat(prompt("Digite seu ano de nascimento: "));
// let studyField = prompt("Digite seu campo de estudo: ");

// confirm(
//   `Olá ${firsttName} ${lastName}. Você tem ${age} anos de idade e seu campo de estudo é ${studyField}, esses dados estão corretos? `
// );

// alert("Agora digite dois números");

// console.log("2 questão: ");

// let number1 = parseFloat(prompt("Qual o primeiro número? "));
// let number2 = parseFloat(prompt("Qual o segundo número? "));

// let Sum = number1 + number2;
// let sub = number1 - number2;
// let multi = number1 * number2;
// let div = number1 / number2;

// alert(
//   `Resultado das operações dos números digitados:
//    Soma = ${Sum}
//    Subtração = ${sub}
//    Multiplicação = ${multi}
//    Divisão = ${div} `
// );

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
