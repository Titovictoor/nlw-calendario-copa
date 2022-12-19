const burguerInput = document.getElementById("burguer-input")

function toggleMenu() {
  const menu = document.getElementById("menu")
  menu.classList.toggle("active")
}

burguerInput.addEventListener("click", toggleMenu)

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
  createCard("09/12", "sexta", createGame("brazil", "12:00", "1 x 1", "croacia") + createGame("netherlands", "16:00", "2 x 2", "argentina")) +
  createCard("10/12", "sábado", createGame("portugal", "12:00", "0 x 1", "marrocos") + createGame("england", "16:00", "0 x 2", "france"))
