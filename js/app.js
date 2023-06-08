var player = document.querySelector("#player-name").value;
var closePlayer = document.getElementById("closePlayerName");

const formElement  = document.querySelector("form");

var errorOutput = document.getElementById("nhapLai");

var btnStartGame = document.querySelector("#start-game");
var PlayCaro = document.querySelector("#active-game");


formElement.addEventListener("submit",savePlayer);
closePlayer.addEventListener("click",closeForm)