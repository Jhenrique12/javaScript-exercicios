// Metodo 1 utilizando forEach pra listar elementos

const listaVagas = [];

function criarVagas() { 
  alert("Preparando para criar vaga...");
  const vaga = {};
  vaga.nome = prompt("Qual nome da vaga a ser anunciada?");
  vaga.descricao = prompt("Digite uma descrição para a vaga.");
  vaga.dataLimite = prompt("Qual a data limite para enviarem a candidatura (dd/mm/aaaa)? ");
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
    return
  } 
    alert("Reiniciando criação de vaga");
    criarVagas();
  
}
function listarVagas() {
  let vagas = "";
  if (listaVagas.length > 0) {
    listaVagas.forEach(function (vaga, indice) {
      vagas += `\n
      Indice da vaga: ${indice + 1}
      Nome da vaga: ${vaga.nome}
      Quantidade de Candidatos: ${vaga.quantidadeCandidatos}`;
    });

    alert("Lista de vagas disponíveis:" + vagas);
    return
  } 
    alert("Sem vagas dispovíveis!");
  
}
function inscreverCandidato() {
  alert("Preparando candidatura...");

  listarVagas();

  let indiceVagaEscolhida = prompt(
    "Qual o índice da vaga que irá se candidatar?"
  );
  if (indiceVagaEscolhida > listaVagas.length || indiceVagaEscolhida < 1) {
    alert("Índice inválido");
    return
  } 
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
          return
        } 
          alert("Candidatura falhou, por favor recomeçar!");
        
      }
    });
  
}
function visualizarVaga() {
  alert("Preparando visualização...");

  listarVagas();

  let indiceVagaEscolhida = prompt(
    "Qual o índice da vaga que quer visualizar?"
  );

  if (indiceVagaEscolhida > listaVagas.length || indiceVagaEscolhida < 1) {
    alert("Índice inválido");
    return
  } 
    listaVagas.forEach(function (vaga, indice) {
      if (indice + 1 == indiceVagaEscolhida) {
        alert(`
        Índice da vaga: ${indice + 1}
        Nome da vaga: ${vaga.nome}
        Descrição: 
        ${vaga.descricao}
        Data limite: ${vaga.dataLimite}
        Quantidade de candidatos: ${vaga.quantidadeCandidatos}
        Candidatos: ${vaga.nomesCandidatos}
        `);
      }
    });
  
}
function excluirVaga() {
  alert("Iniciando exclusão de vaga...");

  listarVagas();

  let indiceVagaEscolhida = prompt("Qual o índice da vaga que quer excluir?");

  if (indiceVagaEscolhida > listaVagas.length || indiceVagaEscolhida < 1) {
    alert("Índice inválido");
    return
  } 
    listaVagas.forEach(function (vaga, indice) {
      if (indice + 1 == indiceVagaEscolhida) {
        let confirmacaoVaga = confirm(`
        Confirmar vaga a ser excluída? Ok = SIM, Cancelar = NÃO

        Índice da vaga: ${indice + 1}
        Nome da vaga: ${vaga.nome}
        Descrição: 
        ${vaga.descricao}
        Data limite: ${vaga.dataLimite}
        `);

        if (confirmacaoVaga) {
          listaVagas.splice(indiceVagaEscolhida - 1, 1);
          alert("Exclusão feita com sucesso!");
          return
        } 
          alert("Processo de exclusão cancelado...");
        
      }
    });
  
}
function exibirMenu() {
  let option = 0;
  do {
    option = parseFloat(
      prompt(`
    Sistema de cadastro de vagas!
    
    == MENU ==
    
    Escolha sua opção
    1 - Criar vaga
    2 - Listar vagas
    3 - Inscrever candidato
    4 - Visualizar vaga
    5 - Excluir vaga
    6 - SAIR`)
    );
  
    switch (option) {
      case 1:
        criarVagas();
        break;
      case 2:
        listarVagas();
        break;
      case 3:
        listaVagas.length > 0
          ? inscreverCandidato()
          : alert("Sem vagas disponíveis! Por favor criar uma vaga.");
        break;
      case 4:
        listaVagas.length > 0
          ? visualizarVaga()
          : alert("Sem vagas disponíveis! Por favor criar uma vaga.");
        break;
      case 5:
        listaVagas.length > 0
          ? excluirVaga()
          : alert("Sem vagas disponíveis! Por favor criar uma vaga.");
        break;
      case 6:
        alert("Saindo...");
        break;
    }
  } while (option !== 6);
}

exibirMenu()

