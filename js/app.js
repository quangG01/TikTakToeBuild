var player1 = document.querySelector("#player-name1").value;
var player2 = document.querySelector("#player-name2").value;



var btnSavePlayerName1 = document.querySelector("#savePlayerName1");
var btnSavePlayerName2 = document.querySelector("#savePlayerName2");

var btnStartGame = document.querySelector("#start-game");
var PlayCaro = document.querySelector("#active-game");


btnSavePlayerName1.addEventListener("click",saveName1);
btnSavePlayerName2.addEventListener("click",saveName2);