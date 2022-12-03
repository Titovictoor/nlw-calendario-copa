const burguerInput = document.getElementById("burguer-input")

function toggleMenu() {
  const menu = document.getElementById("menu")
  menu.classList.toggle("active")
}

burguerInput.addEventListener("click", toggleMenu)

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
  createCard("03/12", "sábado", createGame("netherlands", "12:00", "eua") + createGame("argentina", "16:00", "australia")) +
  createCard("04/12", "domingo", createGame("france", "12:00", "poland") + createGame("england", "16:00", "senegal")) +
  createCard("05/12", "segunda", createGame("japan", "12:00", "croacia") + createGame("brazil", "16:00", "southkorea")) +
  createCard("06/12", "terça", createGame("spain", "12:00", "marrocos") + createGame("portugal", "16:00", "switzerland"))
