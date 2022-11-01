let listaImoveis = [['joao','pedro', 'alvere'],['hejrqw']]
let quantidadeImoveis = 0
let option = 0
let dadosImoveis = ''


let imoveis = ''
let lista = ''
    for(let i = 0; i < listaImoveis.length; i++){
      let dadosImoveis = ''
      var indice = (`Imovel ${i + 1}:`)
      for(let j = 0; j < listaImoveis[i].length; j++){
        dadosImoveis += (`${listaImoveis[i][j]}\n `)
        imoveis = (`${indice} \n ${dadosImoveis}`)
      } 
    lista += imoveis
    }  
      
    
     alert(lista)
// do{
//   quantidadeImoveis = listaImoveis.length - 1
//   option = parseFloat(prompt(`Número de imóveis cadastrados: ${quantidadeImoveis}
//   Escolha uma opção:
//   1 - Listar imóveis
//   2 - Cadastrar um imóvel
//   3 - SAIR`))



  
  
//   switch(option){
//     case 1:
      
//     case 2:
//     }
    
    
//     }
//     while(option !== 3)










    
//     listaImoveis[listaImoveis.length] = prompt("Qual nome do proprietario?")
//     let quartos = prompt("Qual a quantidade de quartos?")
//     let banheiros = prompt("Qual a quantidade de banheiros?")
//     let garagem = confirm("Tem garagem? OK = SIM, CANCELAR = NAO") ? 'Possui':'Nao possui'
      
//     var imovel =(`Proprietario: ${proprietario} \n Quartos: ${quartos} \n Banheiros: ${banheiros} \n garagem: ${garagem} \n`)