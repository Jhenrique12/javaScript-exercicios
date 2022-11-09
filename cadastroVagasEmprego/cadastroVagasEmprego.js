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

const listaVagas = [];

function criarVagas() {
  alert("Preparando para criar vaga...");
  const vaga = {};
  vaga.nome = prompt("Qual nome da vaga a ser anunciada?");
  vaga.descricao = prompt("Digite uma descrição para a vaga.");
  vaga.dataLimite = prompt("Qual a data limite para enviarem a candidatura?");
  vaga.quantidadeCandidatos = 0;
  vaga.nomesCandidatos = [];

  let confirmarVaga = confirm(`
  Os dados da vaga estão corretos? 
  Nome da vaga: ${vaga.nome}\n
  Descrição:
  ${vaga.descricao}\n
  Data limite: ${vaga.dataLimite}`);

  if (confirmarVaga) {
    listaVagas.push(vaga);
    alert("Vaga criada com sucesso!");
  } else {
    alert("Reiniciando criação de vaga");
    criarVagas();
  }
}
function listarVagas() {
  let vagas = "";
  if (listaVagas.length > 0) {
    listaVagas.forEach(function (vaga, indice) {
      vagas += `\n
      Indice da Vaga ${indice + 1}
      Nome da vaga: ${vaga.nome}
      Quantidade de Candidatos ${vaga.quantidadeCandidatos}`;
    });

    alert("Lista de vagas disponíveis:" + vagas);
  } else {
    alert("Sem vagas dispovíveis!");
  }
}

function inscreverCandidato() {
  alert("Preparando candidatura...");

  listarVagas();

  let indiceVagaEscolhida = prompt(
    "Qual o índice da vaga que irá se candidatar?"
  );
  if (indiceVagaEscolhida > listaVagas.length || indiceVagaEscolhida < 1) {
    alert("Índice inválido");
  } else {
    listaVagas.forEach(function (vaga, indice) {
      if (indice + 1 == indiceVagaEscolhida) {
        let nomeCandidato = prompt("Digite seu nome.");

        let confirmacaoVaga = confirm(`
          Confirma a vaga escolhida? OK = SIM, Cancelar = NÃO \n
          Indice da Vaga ${indice + 1}
          Nome da vaga: ${vaga.nome}
          Descrição:
          ${vaga.descricao}
          Data limite: ${vaga.dataLimite}`);

        if (confirmacaoVaga) {
          vaga.nomesCandidatos.push(nomeCandidato);
          vaga.quantidadeCandidatos++;
          alert("Candidato inscrito com sucesso!");
        } else {
          alert("Candidatura falhou, por favor recomeçar!");
        }
      }
    });
  }
}
