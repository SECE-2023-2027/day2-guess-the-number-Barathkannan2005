let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
  
};

document.getElementById("check").addEventListener("click", () => {
  const guess = Number(document.getElementById("guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number-label").textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number-box").style.width = "8rem";

    if (score > highscore) {
      highscore = score;
      document.getElementById("highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.getElementById("score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.getElementById("score").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.getElementById("score").textContent = score;
  document.querySelector(".number-label").textContent = "?";
  document.getElementById("guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number-box").style.width = "6rem";
});