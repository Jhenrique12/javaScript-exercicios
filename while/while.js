const turista = prompt("Qual seu nome?")
let visitou = confirm("Você já visitou alguma cidade? OK = SIM, Cancelar = NÃO")
let cidades = ""
let numeroCidades = 0

  while(visitou) {
    let cidade = prompt("Qual nome da cidade?")
    cidades += " - " + cidade +"\n"
    numeroCidades++
    visitou = confirm("Você já visitou mais alguma cidade? OK = SIM, Cancelar = NÃO")
  }

alert(`O turista ${turista} já visitou ${numeroCidades} cidades:\n ${cidades}`)




let palavra = prompt("Digite uma palavra para testar se eh palindromo")
let palavraInvertida = ''

for(let i = 0; i < palavra.length; i++){
  palavraInvertida += palavra[palavra.length - 1 - i]
}

palavra.toLowerCase()===palavraInvertida.toLowerCase() ?  console.log('palindromos') : console.log(`Nao sao palindromos: palavra - ${palavra} // palavra invertida: ${palavraInvertida}`)


