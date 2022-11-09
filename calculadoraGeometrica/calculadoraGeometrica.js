let option = 0;
const medidas = {};

function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}
function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do retângulo:"));
  return base * altura;
}
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"));
  return lado * lado;
}
function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(`
  Calculadora Geométrica
  
  Escolha o que quer calcular:
  1 - Área do triângulo 
  2 - Área do retângulo
  3 - Área do quadrado
  4 - Área do trapézio
  5 - Área do círculo (pi = 3.14)
  6 - SAIR`);
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
        break;
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
