function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
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
  createCard(
    "09/12",
    "sexta",
    createGame("bola", "12:00", "bola") + createGame("bola", "16:00", "bola")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("bola", "12:00", "bola") + createGame("bola", "16:00", "bola")
  )
