var openPlayer1 = document.getElementById("btnPlayer1");
var openPlayer2 = document.getElementById("btnPlayer2");

var closePlayer = document.getElementById("closePlayerName");

var player = document.querySelector("#player-name").value;

const formElement  = document.querySelector("form");

var errorOutput = document.getElementById("nhapLai");

var btnStartGame = document.querySelector("#start-game");
var PlayCaro = document.querySelector("#active-game");

var editedPlayer = 0;
formElement.addEventListener("submit",savePlayer);
closePlayer.addEventListener("click",closeForm);
openPlayer1.addEventListener("click",openForm);
openPlayer2.addEventListener("click",openForm);