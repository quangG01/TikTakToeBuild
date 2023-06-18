var openPlayer1 = document.getElementById("btnPlayer1");
var openPlayer2 = document.getElementById("btnPlayer2");

var closePlayer = document.getElementById("closePlayerName");

 const gameBtns = document.querySelectorAll("ol li");
// const gameBtns = document.getElementById("caro-board");
 
const formElement  = document.querySelector("form");
var errorOutput = document.getElementById("nhapLai");

var btnStartGame = document.querySelector("#start-game");
var playCaro = document.getElementById("active-game");
const appear = document.getElementById("ggez");

var editedPlayer = 0;
var activePlayer = 0;
var currentRound = 1;
const activePlayerName = document.getElementById("active-player");

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const players =[
    {
        name : "",
        symbol : "X"
    },
    {
        name : "",
        symbol : "O"
    },
];

formElement.addEventListener("submit",savePlayer);
closePlayer.addEventListener("click",closeForm);
openPlayer1.addEventListener("click",openForm);
openPlayer2.addEventListener("click",openForm);
btnStartGame.addEventListener("click",openGame);

for (const gameBtn of gameBtns ){
    gameBtn.addEventListener("click",selectGameBtn);
}
// gameBtns.addEventListener("click",selectGameBtn);