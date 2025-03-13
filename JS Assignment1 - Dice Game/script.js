let score1 = 0;
let score2 = 0;
let currentScore = 0;
let gamePlaying = true;
let player1 = true;
let player2 = false;

const roll1 = document.getElementById("Rollbutton");
const roll2 = document.getElementById("Rollbutton2");
const winner = document.getElementById("winner-name");
const saveButton1 = document.getElementById("Savebutton");
const saveButton2 = document.getElementById("Savebutton2");
const resetButton = document.getElementById("Resetbutton");
let colorInterval;

const audio_button = document.getElementById("audioButton");
const audio = document.getElementById("backgroundAudio");
const dice_roll_audio = document.getElementById("dice_rolling_sound");
const save_score = document.getElementById("score_save_sound");
const winner_sound = document.getElementById("Winner_sound");

// Initialize effect for Player 1 at game start
highlightActivePlayer();

// document.getElementById("player1").classList.add("active");

//Play audio on page load
window.addEventListener("load", () => {
  audio.play();
  audio_button.textContent = "🔇 Mute Audio";
  saveButton2.disabled = true;
});

// Toggle button functionality
audio_button.addEventListener("click", () => {
  if (audio.paused) {
      audio.play();
      audio_button.textContent = "🔇 Mute Audio";
  } else {
      audio.pause();
      audio_button.textContent = "🔈 Play Audio";
  }
});
function startColorEffect(button) {
  let colors = ["red", "blue"];
  let index = 0;

  colorInterval = setInterval(() => {
      button.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length; // Loop through colors
  }, 500); 
}

// Function to stop color change effect and reset color
function stopColorEffect(button) {
  clearInterval(colorInterval); 
  button.style.backgroundColor = ""; 
}

// Highlight the active player's roll button
function highlightActivePlayer() {
  if (player1) {
      roll1.disabled = false;
      saveButton1.disabled=false;
      startColorEffect(roll1);
      saveButton2.disabled=true;
  } else {
    roll2.disabled = false;
    saveButton2.disabled=false;
    startColorEffect(roll2);
    saveButton1.disabled=true;
  }
}

const player1_name = document.getElementById('Player_1');
const player2_name = document.getElementById('Player_2');

const player1name = localStorage.getItem('player1Name');
const player2name = localStorage.getItem('player2Name');

// Set player names from localStorage or default
player1_name.innerHTML = player1name || "Player 1";
player2_name.innerHTML = player2name || "Player 2";

// Roll dice for Player 1
roll1.addEventListener("click", () => {
  if (!gamePlaying || !player1) return;

  stopColorEffect(roll1);

  let videos = document.querySelectorAll("video");
  // Hide all videos first
  videos.forEach(video => {
      video.style.display = "none";
      video.pause();
      video.currentTime = 0;
  });
  let dice = Math.floor(Math.random() * 6) + 1;
  let randomIndex= dice-1;
  console.log(dice);
  let selectedVideo = videos[randomIndex];
  selectedVideo.style.display = "block";
  dice_roll_audio.play();
  selectedVideo.play();

  if (dice === 1) {
    currentScore = 0;
    showDiceMessage(player1name || "Player 1");
    switchPlayer();
  } else {
    currentScore += dice;
    document.getElementById("current1").textContent = currentScore;
  }

  roll1.disabled = true;
});

//Winner Pop Up
function showWinner(player) {
  document.getElementById("winnerPopup").style.display = "flex";
}

//Close winner popup 
function closePopup() {
  document.getElementById("winnerPopup").style.display = "none";
}

// Roll dice for Player 2
roll2.addEventListener("click", () => {
  if (!gamePlaying || !player2) return;

  stopColorEffect(roll2);

  let videos = document.querySelectorAll("video");
  // Hide all videos first
  videos.forEach(video => {
      video.style.display = "none";
      video.pause();
      video.currentTime = 0;
  });

  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  let randomIndex= dice-1;
  console.log(dice);
  let selectedVideo = videos[randomIndex];
  selectedVideo.style.display = "block";
  dice_roll_audio.play();
  selectedVideo.play();

  if (dice === 1) {
    currentScore = 0;
    showDiceMessage(player1name || "Player 1");
    switchPlayer();
  } else {
    currentScore += dice;
    document.getElementById("current2").textContent = currentScore;
  }
  roll2.disabled = true;
});

// Save score for Player 1
saveButton1.addEventListener("click", () => {
  if (!gamePlaying) return;

  stopColorEffect(roll1);
  save_score.play();

  score1 += currentScore;
  document.getElementById("score1").textContent = score1;

  if (score1 >= 100) {
    showWinner(player1name);
    audio.pause();
    winner_sound.play();
    //Winner name 
    document.getElementById("winner-name").innerHTML = `🎉 ${player1name || "Player 1"} Wins! 🎉`;
    gamePlaying = false;
  } else {
    currentScore = 0;
    switchPlayer();
  }
});

// Save score for Player 2
saveButton2.addEventListener("click", () => {
  if (!gamePlaying) return;

  stopColorEffect(roll2);
  save_score.play();
  score2 += currentScore;
  document.getElementById("score2").textContent = score2;

  if (score2 >= 100) {
    showWinner(player2name);
    audio.pause();
    winner_sound.play();
    //Winner name 
    document.getElementById("winner-name").innerHTML = `🎉 ${player2name || "Player 2"} Wins! 🎉`;
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

  if(player2=true){
    stopColorEffect(roll2);
  }

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

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");

  // Hide sidebar if clicking outside
  if (document.getElementById("sidebar").classList.contains("active")) {
    document.getElementById("overlay").style.display = "block";
  } else {
    document.getElementById("overlay").style.display = "none";
  }
}

function showDiceMessage(player) {
  const message = document.getElementById("diceMessage");
  message.textContent = `You Rolled a 1!`;
  message.style.display = "block";

  setTimeout(() => {
      message.style.display = "none";
  }, 2000);
}