let score1 = 0, score2 = 0, currentScore = 0;
let gamePlaying = true, player1 = true, player2 = false;
let colorInterval;

const roll1 = document.getElementById("Rollbutton");
const roll2 = document.getElementById("Rollbutton2");
const winner = document.getElementById("winner-name");
const saveButton1 = document.getElementById("Savebutton");
const saveButton2 = document.getElementById("Savebutton2");
const resetButton = document.getElementById("Resetbutton");
const audio_button = document.getElementById("audioButton");
const audio = document.getElementById("backgroundAudio");
const dice_roll_audio = document.getElementById("dice_rolling_sound");
const save_score = document.getElementById("score_save_sound");
const winner_sound = document.getElementById("Winner_sound");
const player1_name = document.getElementById("Player_1");
const player2_name = document.getElementById("Player_2");

// Load player names from localStorage
const player1name = localStorage.getItem("player1Name") || "Player 1";
const player2name = localStorage.getItem("player2Name") || "Player 2";
player1_name.innerHTML = player1name;
player2_name.innerHTML = player2name;

// Initialize game UI
audio.play();
audio_button.textContent = "🔇 Mute Audio";
saveButton2.disabled = true;
highlightActivePlayer();

// Toggle audio button
audio_button.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
  audio_button.textContent = audio.paused ? "🔈 Play Audio" : "🔇 Mute Audio";
});

// Color effect functions
function startColorEffect(button) {
  let colors = ["red", "blue"], index = 0;
  colorInterval = setInterval(() => {
    button.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 500);
}

function stopColorEffect(button) {
  clearInterval(colorInterval);
  button.style.backgroundColor = "";
}

// Highlight active player's roll button
function highlightActivePlayer() {
  if (player1) {
    roll1.disabled = false;
    saveButton1.disabled = false;
    startColorEffect(roll1);
    saveButton2.disabled = true;
  } else {
    roll2.disabled = false;
    saveButton2.disabled = false;
    startColorEffect(roll2);
    saveButton1.disabled = true;
  }
}

// Dice rolling function
function rollDice(player, rollButton, scoreDisplay) {
  if (!gamePlaying || !player) return;
  stopColorEffect(rollButton);

  let videos = document.querySelectorAll("video");
  videos.forEach(video => {
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
  });

  let dice = Math.floor(Math.random() * 6) + 1;
  let selectedVideo = videos[dice - 1];
  selectedVideo.style.display = "block";
  dice_roll_audio.play();
  selectedVideo.play();

  if (dice === 1) {
    currentScore = 0;
    showDiceMessage(player1name);
    switchPlayer();
  } else {
    currentScore += dice;
    scoreDisplay.textContent = currentScore;
  }
  rollButton.disabled = true;
}

roll1.addEventListener("click", () => rollDice(player1, roll1, document.getElementById("current1")));
roll2.addEventListener("click", () => rollDice(player2, roll2, document.getElementById("current2")));

// Save score function
function saveScore(player, score, scoreDisplay, rollButton, playerName) {
  if (!gamePlaying) return;
  stopColorEffect(rollButton);
  save_score.play();

  score += currentScore;
  scoreDisplay.textContent = score;

  if (score >= 100) {
    showWinner(playerName);
    audio.pause();
    winner_sound.play();
    winner.innerHTML = `🎉 ${playerName} Wins! 🎉`;
    gamePlaying = false;
  } else {
    currentScore = 0;
    switchPlayer();
  }
}

saveButton1.addEventListener("click", () => saveScore(player1, score1, document.getElementById("score1"), roll1, player1name));
saveButton2.addEventListener("click", () => saveScore(player2, score2, document.getElementById("score2"), roll2, player2name));

// Reset game
resetButton.addEventListener("click", () => {
  score1 = score2 = currentScore = 0;
  gamePlaying = true;
  player1 = true;
  player2 = false;
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.getElementById("current1").textContent = "0";
  document.getElementById("current2").textContent = "0";
  highlightActivePlayer();
});

// Switch players
function switchPlayer() {
  player1 = !player1;
  player2 = !player2;
  currentScore = 0;
  document.getElementById("current1").textContent = player1 ? currentScore : "0";
  document.getElementById("current2").textContent = player2 ? currentScore : "0";
  highlightActivePlayer();
}

// Toggle sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("overlay").style.display = document.getElementById("sidebar").classList.contains("active") ? "block" : "none";
}

// Show dice message
function showDiceMessage(player) {
  const message = document.getElementById("diceMessage");
  message.textContent = "You Rolled a 1!";
  message.style.display = "block";
  setTimeout(() => (message.style.display = "none"), 2000);
}

// Show winner popup
function showWinner(player) {
  document.getElementById("winnerPopup").style.display = "flex";
}

// Close winner popup
function closePopup() {
  document.getElementById("winnerPopup").style.display = "none";
}