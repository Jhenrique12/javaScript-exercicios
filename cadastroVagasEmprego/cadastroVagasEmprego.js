// const listaVagas  = [] // array de objetos que vai receber cada vaga com suas especificações -> usar índice da lista
// const vagas = {}
// const vagas = {   // objeto vagas que vai compor a listaVagas sendo cada propriedade uma caracteristica da vaga
//   nome,
//   quantidadeCandidatos,
//   descricao,
//   dataLimite,
//   nomesCandidatos, // array de strings com nomes de candidatos
// }

// function listarVagas () { //nome, indice, qtd cadidatos
//   listaVagas.forEach(function(vaga, indiceVaga,){
    
//   })
// }

function exibirElemento(elemento, indice, array) {
  console.log({
  elemento,
  indice,
  array
  })
  }

const listaVagas = [{nome: 'junior', quantidade: 4}, "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
// for (let i = 0; i < lista.length; i++) {
// exibirElemento(lista[i], i, lista)
// }
// Forma funcional
// lista.forEach(exibirElemento)
// Também poderia ser feito:
let vagas = ''
if (listaVagas.length > 0) {
  lista.forEach(function (elemento, indice) {
    let vaga = `
    Vaga ${indice}
    Nome da vaga: ${elemento.nome}
    Quantidade de Candidatos ${elemento.quantidade}`
    
    vagas = vagas + "\n" + vaga 
    
  })
  
  alert("Lista de Vagas:" + vagas)
} else {
  alert("Sem vagas")
}

// PROXIMO PASSO -> AJUSTAR PARA O FORMATO DA QUESTAO E FAZER CADASTRO PRA TER NOCAO DE COMO FICA A VARIAVEL CRIADA