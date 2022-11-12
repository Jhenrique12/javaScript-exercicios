function addPlayer() {
  const playersList = document.getElementById("players-list");

  const posicao = document.getElementById("posicao").value;
  const name = document.getElementById("fullname").value;
  const number = document.getElementById("number").value;

  if (
    confirm(
      `Confirma escalação do jogador? \n Nome: ${name}\n Número: ${number} \n Posição: ${posicao}`
    )
  ) {
    const liItem = document.createElement("li");
    liItem.id = "player-" + number;
    liItem.innerText =
      "Nome: " +
      name +
      "\nNúmero do jogador: " +
      number +
      "\nPosição: " +
      posicao;

    playersList.append(liItem);
  }
  name = "";
  number = "";
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm("Remover jogador?\n" + playerToRemove.innerText);

  if (confirmation) {
    playerToRemove.remove();
  }

  number = "";
}
