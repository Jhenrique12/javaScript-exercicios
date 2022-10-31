let option1 = 5
do {
  option1 = parseFloat(prompt(`Bem vindo ao menu, o que voce quer comprar?
1 - Cafe
2 - Leite
3 - Acucar
4 - Manteiga
5 - ENCERRAR`))

switch(option1) {
  case 1:
    alert("Cafe foi adicionado ao carrinho!")
    break
  case 2:
    alert("Leite foi adicionado ao carrinho!")
    break
  case 3:
    alert("Acucar foi adicionado ao carrinho!")
    break
  case 4:
    alert("Manteiga foi adicionado ao carrinho!")
    break
  case 5:
    alert("Programa Encerrando...")
    break
  default:
    alert("Opcao Invalida!")
}

}while(option1 != 5)

alert("Programa de loja encerrado!")