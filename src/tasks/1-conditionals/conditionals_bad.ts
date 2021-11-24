function checkGameStatus(remainingEnemies, remainingPlayers) {
  // ❌ complex conditionals
  if (
    remainingEnemies === 0 ||
    (remainingEnemies === 1 && remainingPlayers === 1) ||
    remainingPlayers === 0
  ) {
    quitGame();
  }
}
function quitGame() {
  console.log('See you!');
}
