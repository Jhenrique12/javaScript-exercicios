let saldo = 0
let dinheiro = 0
let option2 = 3

saldo = parseFloat(prompt("Quanto de dinheiro voce quer depositar no banco? "))

do {

  option2 = parseFloat(prompt(`Seu dinheiro atual: ${saldo} reais.
    O que voce quer fazer?
    1- Depositar dinheiro
    2- Sacar dinheiro
    3- SAIR`))

  switch(option2) {
    case 1:
      dinheiro = parseFloat(prompt("Quanto voce deseja depositar?"))
      saldo += dinheiro
      break
    case 2:
      dinheiro = parseFloat(prompt("Quanto voce deseja sacar?"))
      saldo -= dinheiro
      break
    case 3:
      dinheiro = alert("Encerrando programa...")
      saldo += dinheiro
      break
  }
}while(option2 !== 3)

alert("Programa de banco encerrado")