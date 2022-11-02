let option = 0;
const medidas = {};
do {
  option = parseFloat(
    prompt(`
  Calculadora Geométrica
  
  Escolha o que quer calcular:
  1 - Área do triângulo 
  2 - Área do retângulo
  3 - Área do quadrado
  4 - Área do trapézio
  5 - Área do círculo (pi = 3.14)
  6 - SAIR`)
  );

  switch (option) {
    case 1:
      function areaDoTriangulo(base, altura) {
        return (base * altura) / 2;
      }
      medidas.base = parseFloat(prompt("Digite o valor da base"));
      medidas.altura = parseFloat(prompt("Digite o valor da altura"));

      alert(
        `A área do Triângulo é ${areaDoTriangulo(medidas.base, medidas.altura)}`
      );
      break;
    case 2:
      function areaDoRetangulo(base, altura) {
        return base * altura;
      }
      medidas.base = parseFloat(prompt("Digite o valor da base"));
      medidas.altura = parseFloat(prompt("Digite o valor da altura"));

      alert(
        `A área do Retângulo é ${areaDoRetangulo(medidas.base, medidas.altura)}`
      );
      break;
    case 3:
      function areaDoQuadrado(lado) {
        return lado * lado;
      }
      medidas.lado = parseFloat(prompt("Digite o valor do lado do quadrado"));

      alert(`A área do Quadrado é ${areaDoQuadrado(medidas.lado)}`);
      break;
    case 4:
      function areaDoTrapezio(baseMaior, baseMenor, altura) {
        return ((baseMaior + baseMenor) * altura) / 2;
      }
      medidas.baseMaior = parseFloat(prompt("Digite o valor da base maior"));
      medidas.baseMenor = parseFloat(prompt("Digite o valor da base menor"));
      medidas.altura = parseFloat(prompt("Digite o valor da altura"));

      alert(
        `A área do Trapézio é ${areaDoTrapezio(
          medidas.baseMaior,
          medidas.baseMenor,
          medidas.altura
        )}`
      );
      break;
    case 5:
      function areaDoCirculo(raio) {
        return raio * raio * 3.14;
      }
      medidas.raio = parseFloat(prompt("Digite o valor do raio do círculo"));

      alert(`A área do Círculo é ${areaDoCirculo(medidas.raio)}`);
      break;
    case 6:
      alert("Programa encerrando...");
      break;
  }
} while (option != 6);
