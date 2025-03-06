document.getElementById("play_game").addEventListener("click", () => {
  const player1Name = document.getElementById("player1Name").value.trim();
  const player2Name = document.getElementById("player2Name").value.trim();
  console.log(player1Name);
  if (player1Name && player2Name) {
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);
    window.location.href = "indexmain.html";
  } else {
    alert("Please enter both player or skip");
    return;
  }
});
document.getElementById("skipButton").addEventListener("click", () => {
  localStorage.removeItem("player1Name");
  localStorage.removeItem("player2Name");
  window.location.href = "indexmain.html";
});
