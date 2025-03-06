let score1 = 0;
let score2 = 0;
let currentScore = 0;
let gamePlaying = true;
let player1 = true;
let player2 = false;

const player1_name = document.getElementById('Player_1');
const player2_name = document.getElementById('Player_2');

const player1name = localStorage.getItem('player1Name');
const player2name = localStorage.getItem('player2Name');

// Set player names from localStorage or default
player1_name.innerHTML = player1name || "Player 1";
player2_name.innerHTML = player2name || "Player 2";

const roll1 = document.getElementById("Rollbutton");
const roll2 = document.getElementById("Rollbutton2");
const winner = document.getElementById("Winner");
const saveButton1 = document.getElementById("Savebutton");
const saveButton2 = document.getElementById("Savebutton2");
const resetButton = document.getElementById("Resetbutton");

// Roll dice for Player 1
roll1.addEventListener("click", () => {
  if (!gamePlaying || !player1) return;

  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);

  if (dice === 1) {
    currentScore = 0;
    // document.getElementById("current1").textContent = dice;
    // setTimeout(switchPlayer, 1500);
    switchPlayer();
  } else {
    currentScore += dice;
    document.getElementById("current1").textContent = currentScore;
  }
});

// Roll dice for Player 2
roll2.addEventListener("click", () => {
  if (!gamePlaying || !player2) return;

  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);

  if (dice === 1) {
    currentScore = 0;
    // document.getElementById("current2").textContent = dice;
    switchPlayer();
  } else {
    currentScore += dice;
    document.getElementById("current2").textContent = currentScore;
  }
});

// Save score for Player 1
saveButton1.addEventListener("click", () => {
  if (!gamePlaying) return;

  score1 += currentScore;
  document.getElementById("score1").textContent = score1;

  if (score1 >= 100) {
    winner.classList.add("active2");
    winner.textContent = `${player1name || "Player 1"} Wins!`;
    gamePlaying = false;
  } else {
    currentScore = 0;
    switchPlayer();
  }
});

// Save score for Player 2
saveButton2.addEventListener("click", () => {
  if (!gamePlaying) return;

  score2 += currentScore;
  document.getElementById("score2").textContent = score2;

  if (score2 >= 100) {
    winner.classList.add("active2");
    winner.textContent = `${player2name || "Player 2"} Wins!`;
    gamePlaying = false;
  } else {
    currentScore = 0;
    switchPlayer();
  }
});

// Reset the game
resetButton.addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  currentScore = 0;
  gamePlaying = true;
  player1 = true;
  player2 = false;

  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.getElementById("current1").textContent = "0";
  document.getElementById("current2").textContent = "0";
  winner.classList.remove("active2");
});

// Switch players
function switchPlayer() {
  player1 = !player1;
  player2 = !player2;
  currentScore = 0;

  document.getElementById("current1").textContent = player1 ? currentScore : "0";
  document.getElementById("current2").textContent = player2 ? currentScore : "0";
}

// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  content.classList.toggle("active");
  overlay.classList.toggle("active");
}
