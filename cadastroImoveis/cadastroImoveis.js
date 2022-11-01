let option = 0
let imoveis = []

do {

option = parseFloat(prompt(`Quantidade de Imoveis: ${imoveis.length}

O que você quer fazer?

1 - Salvar imóvel
2 - Listar imóveis
3 - SAIR`))

switch(option){
  case 1: 
  const imovel = {} // Objeto é declarado vazio sempre que o loop reinicia

    imovel.proprietario = prompt('Qual nome do proprietário do imóvel?')
    imovel.quartos = prompt('Quantos quartos tem no imóvel?')
    imovel.banheiros = prompt('Quantos banheiros tem no imóvel?')
    imovel.garagem = confirm('O imóvel possui garagem? OK = SIM, CANCELAR = NÃO') ? "Possui garagem" : "Não possui garagem"
    imoveis.push(imovel)
    break
    
  case 2:  
  for(let i = 0; i < imoveis.length; i++) {
    alert(`Imóvel 
    Proprietario: ${imoveis[i].proprietario}
    Quartos: ${imoveis[i].quartos}
    Banheiros: ${imoveis[i].banheiros}
    Garagem: ${imoveis[i].garagem}`)
  } 
    break
  case 3:
    alert("Programa encerrando...")
  break
  default:
    alert("Opção inválida!")
}
}while(option !== 3)

alert("Programa encerrado!")