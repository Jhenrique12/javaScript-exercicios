let pacientes = ["João", "Pedro", "Carlos", "Paulo"];
let option = 0;
let novoPaciente = "";

do {
  let lista = "";
  for (let i = 0; i < pacientes.length; i++) {
    lista += ` ${i + 1}° - ${pacientes[i]} \n`;
  }
  option = parseFloat(
    prompt(`Lista de pacientes:\n${lista}
    O que deseja fazer?
    1 - Novo paciente
    2 - Consultar paciente
    3 - SAIR`)
  );

  switch (option) {
    case 1:
      novoPaciente = prompt("Qual nome do paciente a ser adicionado?");
      let preferencia = confirm(
        "O paciente possui preferência na fila? OK = SIM, CANCELAR = NÃO"
      );
      preferencia
        ? pacientes.unshift(novoPaciente)
        : pacientes.push(novoPaciente);
      break;
    case 2:
      const pacienteConsultado = pacientes.shift();
      pacienteConsultado
        ? alert(`Paciente consultado: ${pacienteConsultado}`)
        : alert("Fila vazia!");
      break;
    case 3:
      alert("Programa encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option != 3);

alert("Programa encerrado");