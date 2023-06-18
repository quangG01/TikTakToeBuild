function openGame(){
    // if(players[0].name === "" || players[1].name === "" )
    // {
    //     alert("Nhap ten thi moi dc choi");
    //     return;
    // }
    playCaro.style.display = "flex";
    activePlayerName.innerHTML = players[activePlayer].name;
 
}
function switchPlayer(){
    if (activePlayer === 0)
    {
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }
    activePlayerName.innerHTML = players[activePlayer].name;
}


function selectGameBtn(event){
    const selectedField = event.target;

    var selectedRow = selectedField.dataset.row -1;
    var selectedCol = selectedField.dataset.col -1;

    if(event.target.tagName !== "LI"){
        // console.log(event.target.tagName)
        return;
    }

    if (gameData[selectedRow][selectedCol] > 0)
    {
        alert("this place had been picked,pick another one");
        return;
    }
    
    selectedField.innerHTML = players[activePlayer].symbol; //player 0
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedCol] = activePlayer +1;
    // console.log(gameData);


    const winnerPlayer = checkForWinning();
   
    console.log(winnerPlayer);
    console.log(currentRound);
    if(winnerPlayer !== 0 ){
        annouceWinner(winnerPlayer);
    }
    
    currentRound++;
    switchPlayer(); 
    

}
function checkForWinning(){
    //row
    for (var i = 0;i < 3;i++)
    {
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2] )
        {
            return gameData[i][0];
        }
    }

    //col 
    for (var i = 0;i < 3;i++)
    {
        if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i] )
        {
            return gameData[0][i];
        }
    }

    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2])
    {
        return gameData[0][0];
    }

    if (gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0])
    {
        return gameData[0][2];
    }
    
    if(currentRound == 9 )
    {
        alert("TIE");
        return -1;
    }
    return 0;
}
function annouceWinner(winnerPlayer){
    appear.style.display = "block";

    if( winnerPlayer > 0){
        var winnerName = players[winnerPlayer - 1 ].name;
        appear.firstElementChild.firstElementChild.innerHTML = winnerName; 
        var draw = document.getElementById("turn").style.display = "none";
    } else 
    {
        appear.firstElementChild.innerHTML  = " ITS A TIE ";
        var draw = document.getElementById("turn").style.display = "none";
    }

}