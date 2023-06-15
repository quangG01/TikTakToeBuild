function openGame(){
    // if(players[0].name === "" || players[1].name === "" )
    // {
    //     alert("Nhap ten thi moi dc choi");
    //     return;
    // }
    playCaro.style.display = "flex";
 
}
function switchPlayer(){
    if (activePlayer === 0)
    {
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }
}


function selectGameBtn(event){
    event.target.innerHTML = players[activePlayer].symbol; //player 0
    event.target.classList.add("disabled");
    switchPlayer();
}