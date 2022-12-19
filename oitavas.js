/* ********************** FUNCTION QUE REALIZA O CLICK DO MENU RESPONSIVO **************** */
const burguerInput = document.getElementById("burguer-input")

function toggleMenu() {
  const menu = document.getElementById("menu")
  menu.classList.toggle("active")
}

burguerInput.addEventListener("click", toggleMenu)
/* ***********************FUNCTION QUE CRIA O JOGO ******************* */
function createGame(player1, date, score, player2) {
  const contentToDisplay = score ? score : date
  const winner = calculateWinner(score)
  return `
    <li>
      <img ${winner === "Player2" && 'class="loser"'} src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${contentToDisplay}</strong>
      <img ${winner === "Player1" && 'class="loser"'} src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}
/* ***************** FUNCTION DEFINE VENCEDOR **************** */
function calculateWinner(score) {
  if (!score) {
    return ""
  }
  const [scoreP1, _, scoreP2] = score.split(" ")
  if (Number(scoreP1) > Number(scoreP2)) {
    return "Player1"
  }
  if (Number(scoreP1) < Number(scoreP2)) {
    return "Player2"
  }
  return "empate"
}

let delay = -0.1
function createCard(date, day, games) {
  delay = delay + 0.1
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>${games}</ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("03/12", "sábado", createGame("netherlands", "12:00", "3 x 1", "eua") + createGame("argentina", "16:00", "2 x 1", "australia")) +
  createCard("04/12", "domingo", createGame("france", "12:00", "3 x 1", "poland") + createGame("england", "16:00", "3 x 0", "senegal")) +
  createCard("05/12", "segunda", createGame("japan", "12:00", "1 x 1", "croacia") + createGame("brazil", "16:00", "4 x 1", "southkorea")) +
  createCard("06/12", "terça", createGame("spain", "12:00", "3 x 0", "marrocos") + createGame("portugal", "16:00", "6 x 1", "switzerland"))
