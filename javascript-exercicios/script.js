// const turista = prompt("Qual seu nome?")
// let visitou = confirm("Você já visitou alguma cidade? OK = SIM, Cancelar = NÃO")
// let cidades = ""
// let numeroCidades = 0

//   while(visitou) {
//     let cidade = prompt("Qual nome da cidade?")
//     cidades += " - " + cidade +"\n"
//     numeroCidades++
//     visitou = confirm("Você já visitou mais alguma cidade? OK = SIM, Cancelar = NÃO")
//   }

// alert(`O turista ${turista} já visitou ${numeroCidades} cidades:\n ${cidades}`)

//////////////////////////////////////////////////////////////////////////////////////////////

// let option1 = 5
// do {
//   option1 = parseFloat(prompt(`Bem vindo ao menu, o que voce quer comprar?
// 1 - Cafe
// 2 - Leite
// 3 - Acucar
// 4 - Manteiga
// 5 - ENCERRAR`))

// switch(option1) {
//   case 1:
//     alert("Cafe foi adicionado ao carrinho!")
//     break
//   case 2:
//     alert("Leite foi adicionado ao carrinho!")
//     break
//   case 3:
//     alert("Acucar foi adicionado ao carrinho!")
//     break
//   case 4:
//     alert("Manteiga foi adicionado ao carrinho!")
//     break
//   case 5:
//     alert("Programa Encerrando...")
//     break
//   default:
//     alert("Opcao Invalida!")
// }

// }while(option1 != 5)

// alert("Programa de loja encerrado!")

//////////////////////////////////////////////////////////////////////////////////////////////

// let saldo = 0
// let dinheiro = 0
// let option2 = 3

// saldo = parseFloat(prompt("Quanto de dinheiro voce quer depositar no banco? "))

// do {

//   option2 = parseFloat(prompt(`Seu dinheiro atual: ${saldo} reais.
//     O que voce quer fazer?
//     1- Depositar dinheiro
//     2- Sacar dinheiro
//     3- SAIR`))

//   switch(option2) {
//     case 1:
//       dinheiro = parseFloat(prompt("Quanto voce deseja depositar?"))
//       saldo += dinheiro
//       break
//     case 2:
//       dinheiro = parseFloat(prompt("Quanto voce deseja sacar?"))
//       saldo -= dinheiro
//       break
//     case 3:
//       dinheiro = alert("Encerrando programa...")
//       saldo += dinheiro
//       break
//   }
// }while(option2 !== 3)

// alert("Programa de banco encerrado")

// let numero = parseFloat(prompt("Digite um numer:"))
// let tabuada = "Tabuada do " + numero + "\n"

// for(let i = 0; i <=10; i++){
//   tabuada = (`${tabuada} ${i} x ${numero} = ${i*numero} \n`)

// }
// console.log(tabuada)

let palavra = prompt("Digite uma palavra para testar se eh palindromo")
let palavraInvertida = ''

for(let i = 0; i < palavra.length; i++){
  palavraInvertida += palavra[palavra.length - 1 - i]
}

palavra.toLowerCase()===palavraInvertida.toLowerCase() ?  console.log('palindromos') : console.log(`Nao sao: palavra - ${palavra} // palavra invertida: ${palavraInvertida}`)


