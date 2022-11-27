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
  createCard("21/11", "segunda", createGame("netherlands", "", "2 x 0", "senegal")) +
  createCard("22/11", "terça", createGame("argentina", "", "1 x 2", "saudiarabia") + createGame("france", "", "4 x 1", "australia")) +
  createCard("23/11", "quarta", createGame("germany", "", "1 x 2", "japan") + createGame("spain", "13:00", "7 x 0", "costarica")) +
  createCard("24/11", "quinta", createGame("brazil", "16:00", "2 x 0", "serbia") + createGame("portugal", "13:00", "3 x 2", "ghana")) +
  createCard("25/11", "sexta", createGame("netherlands", "13:00", "1 x 1", "equador")) +
  createCard("26/11", "sábado", createGame("france", "13:00", "2 x 1", "denmark") + createGame("argentina", "16:00", "2 x 0", "mexico")) +
  createCard("27/11", "domingo", createGame("spain", "16:00", "", "germany")) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00", "", "brazil") + createGame("portugal", "16:00", "", "uruguay")) +
  createCard("29/11", "terça", createGame("netherlands", "12:00", "", "qatar")) +
  createCard("30/11", "quarta", createGame("france", "12:00", "", "tunisia") + createGame("argentina", "16:00", "", "poland")) +
  createCard("01/12", "quinta", createGame("spain", "16:00", "", "japan") + createGame("germany", "16:00", "", "costarica")) +
  createCard(
    "02/12",
    "sexta",
    createGame("brazil", "16:00", "", "cameroon") + createGame("portugal", "12:00", "", "southkorea") + createGame("uruguay", "12:00", "", "ghana")
  )
