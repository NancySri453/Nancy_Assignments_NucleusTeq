let score1 = 0;
let score2 = 0;
let currentScore = 0;
let gamePlaying = true;
let player1 = true;
let player2 = false;

const roll1 = document.getElementById("Rollbutton");
const roll2 = document.getElementById("Rollbutton2");
const winner = document.getElementById("Winner");
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

document.getElementById("player1").classList.add("active");

//Play audio on page load
window.addEventListener("load", () => {
  audio.play();
  audio_button.textContent = "🔇 Mute Audio";
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
  }, 500); // Change color every 500ms
}

// Function to stop color change effect and reset color
function stopColorEffect(button) {
  clearInterval(colorInterval); // Stop interval
  button.style.backgroundColor = ""; // Reset to default
}

// Highlight the active player's roll button
function highlightActivePlayer() {
  if (player1) {
      startColorEffect(roll1);
      // stopColorEffect(roll2);
  } else {
      startColorEffect(roll2);
      // stopColorEffect(roll1);
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
  setTimeout(() => {
    document.getElementById("score-display").innerHTML=dice;
  }, 700);
  
  if (dice === 1) {
    currentScore = 0;
    showDiceMessage(player1name || "Player 1");
    switchPlayer();
  } else {
    currentScore += dice;
    document.getElementById("current1").textContent = currentScore;
  }
});

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
  setTimeout(() => {
    document.getElementById("score-display").innerHTML=dice;
  }, 700);

  if (dice === 1) {
    currentScore = 0;
    showDiceMessage(player1name || "Player 1");
    switchPlayer();
  } else {
    currentScore += dice;
    document.getElementById("current2").textContent = currentScore;
  }
});

// Save score for Player 1
saveButton1.addEventListener("click", () => {
  if (!gamePlaying) return;

  stopColorEffect(roll1);
  save_score.play();

  score1 += currentScore;
  document.getElementById("score1").textContent = score1;

  if (score1 >= 100) {
    winner.classList.add("active2");
    audio.pause();
    winner_sound.play();
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

  stopColorEffect(roll2);
  save_score.play();

  score2 += currentScore;
  document.getElementById("score2").textContent = score2;

  if (score2 >= 100) {
    winner.classList.add("active2");
    audio.pause();
    winner_sound.play();
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

  document.getElementById("player1").classList.toggle("active", player1);
});

// Switch players
function switchPlayer() {
  player1 = !player1;
  player2 = !player2;
  currentScore = 0;

  document.getElementById("current1").textContent = player1 ? currentScore : "0";
  document.getElementById("current2").textContent = player2 ? currentScore : "0";

  document.getElementById("player1").classList.toggle("active", player1);
  document.getElementById("player2").classList.toggle("active", player2);

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
  }, 2000); // Hide message after 2 seconds
}

// document.getElementById("Rollbutton1").addEventListener("click", function() {
//   document.getElementById("Rolling1").style.display = "inline"; // Show animation
// });
// document.getElementById("Rolling1").style.display = "inline"; // Show animation
// setTimeout(() => {
//   document.getElementById("Rolling1").style.display = "none"; // Hide after 2s
// }, 2000);

// document.getElementById("Rolling2").style.display = "inline"; // Show animation
// setTimeout(() => {
//   document.getElementById("Rolling2").style.display = "none"; // Hide after 2s
// }, 2000);

// document.getElementById("Savebutton1").addEventListener("click", function() {
//   document.getElementById("Rolling1").style.display = "none"; // Hide animation
// });

// document.getElementById("Rollbutton2").addEventListener("click", function() {
//   document.getElementById("Rolling2").style.display = "inline"; // Show animation
// });

// document.getElementById("Savebutton2").addEventListener("click", function() {
//   document.getElementById("Rolling2").style.display = "none"; // Hide animation
// });