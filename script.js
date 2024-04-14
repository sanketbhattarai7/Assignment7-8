const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
let scores = [0, 0];
let currentPlayer = 0;

document.getElementById("rollBtn").addEventListener("click", function() {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dice1").src = diceImages[dice1Value - 1];
  document.getElementById("dice2").src = diceImages[dice2Value - 1];

  scores[currentPlayer] += Math.abs(dice1Value - dice2Value);

  document.getElementById("score1").textContent = scores[0];
  document.getElementById("score2").textContent = scores[1];

  if (scores[currentPlayer] >= 20) {
    document.getElementById("winner").textContent = `Player ${currentPlayer + 1} wins!`;
    document.getElementById("rollBtn").disabled = true;
  }

  currentPlayer = currentPlayer === 0 ? 1 : 0;
});
