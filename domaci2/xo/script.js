

// XO
var plays;
var gameWon;
var origBoard;
var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
let cells = document.querySelectorAll(".cell");
var curPlayer = 'X';
startGame();

function startGame() {
  curPlayer = "X";
  document.querySelector(".endgame").style.display = "none";
  origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick);
  }
}
function turnClick(e) {
  if (typeof origBoard[e.target.id] == 'number') {

    turn(e.target.id, curPlayer)
  }
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    gameWon = checkWin(player);
    curPlayer == "X" ? curPlayer = "O" : curPlayer = "X";
    if (gameWon) gameOver();
    if (gameWon) setTimeout(function () { alert("Pobjednik je " + gameWon.player); }, 30);
    if ((origBoard.every(checkDraw) == true) && gameWon == null) startGame();
  
  }
  function checkDraw(a) {
    return typeof a !== "number";
  }
  function checkWin(player) {
    plays = [];
    for (var i = 0; i < origBoard.length; i++) {
      if (origBoard[i] === player) {
        plays.push(i);
        plays.sort(function (a, b) { return a - b });
  
      }
    }
    gameWon = null;
    for (var i = 0; i < winCombos.length; i++) {
  
      for (var j = 0; j < 1; j++) {
        if (plays.indexOf(winCombos[i][j]) > -1 && plays.indexOf(winCombos[i][j + 1]) > -1 && plays.indexOf(winCombos[i][j + 2]) > -1) {
          gameWon = { index: i, player: player };
          break;
  
        }
  
  
  
      }
  
    } 
  
    return gameWon;
  
  }
  
  function gameOver() {
    var j = 0;
    for (var i = 0; i < 3; i++) {
      document.getElementById(winCombos[gameWon.index][j]).style.backgroundColor =
        gameWon.player == "X" ? "green" : "red";
      j++;
    }
    for (var i = 0; i < cells.length; i++) {
      cells[i].removeEventListener('click', turnClick);
    }
    curPlayer = "X";
  
  }
  


