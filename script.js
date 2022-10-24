console.log("1 questão: ");
let firstName = prompt("Digite seu primeiro nome: ");
let lastName = prompt("Digite seu sobrenome: ");
let age = 2022 - parseFloat(prompt("Digite seu ano de nascimento: "));
let studyField = prompt("Digite seu campo de estudo: ");

confirm(
  `Olá ${firsttName} ${lastName}. Você tem ${age} anos de idade e seu campo de estudo é ${studyField}, esses dados estão corretos? `
);

alert("Agora digite dois números");

console.log("2 questão: ");

let number1 = parseFloat(prompt("Qual o primeiro número? "));
let number2 = parseFloat(prompt("Qual o segundo número? "));

let Sum = number1 + number2;
let sub = number1 - number2;
let multi = number1 * number2;
let div = number1 / number2;

alert(
  `Resultado das operações dos números digitados:
   Soma = ${Sum}
   Subtração = ${sub} 
   Multiplicação = ${multi} 
   Divisão = ${div} `
);
