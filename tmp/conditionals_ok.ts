function checkGameStatus(remainingEnemies, remainingPlayers) {
  // ✅ simple conditionals
  if (shouldQuitGame(remainingEnemies, remainingPlayers)) {
    quitGame();
  }
}

function shouldQuitGame(remainingEnemies, remainingPlayers) {
  return (
    isGameWon(remainingEnemies) ||
    isGameDraw(remainingEnemies, remainingPlayers) ||
    isGameLost(remainingPlayers)
  );
}

function isGameWon(remainingEnemies) {
  return remainingEnemies === 0;
}

function isGameLost(remainingPlayers) {
  return remainingPlayers === 0;
}

function isGameDraw(remainingEnemies, remainingPlayers) {
  return remainingEnemies === 1 && remainingPlayers === 1;
}

function quitGame() {
  console.log('See you!');
}
