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
    "21/11",
    "segunda",
    createGame("netherlands", "13:00", "senegal")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudiarabia") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costarica")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard("25/11", "sexta", createGame("netherlands", "13:00", "equador")) +
  createCard(
    "26/11",
    "sábado",
    createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard("27/11", "domingo", createGame("spain", "16:00", "germany")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("29/11", "terça", createGame("netherlands", "12:00", "qatar")) +
  createCard(
    "30/11",
    "quarta",
    createGame("france", "12:00", "tunisia") +
      createGame("argentina", "16:00", "poland")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("spain", "16:00", "japan") +
      createGame("germany", "16:00", "costarica")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("brazil", "16:00", "cameroon") +
      createGame("portugal", "12:00", "southkorea") +
      createGame("uruguay", "12:00", "ghana")
  )
