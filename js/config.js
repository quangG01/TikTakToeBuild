function saveName(event){
    // event.preventDefault();
    // const data = new FormData(event.target)
    // const enterPlayerName = FormData.get("player-name");
    // if(player1.trim() != "")
    // {
    //     var name1 = document.querySelector("article #player1").innerHTML = player1;
    // }
    // else 
    // {
    //     alert("chuỗi k đc rỗng và phải là tên,kh ký tự đặc biệt");
    // }
   
}
function openForm(event){
    editedPlayer = +event.target.dataset.playerid;//string into int
    console.log(editedPlayer);
}

function closeForm(){
    errorOutput.innerHTML= "";
    document.getElementById("player-name").value = ""; 
}
function savePlayer(event){
    event.preventDefault();
    const data = new FormData(event.target)
    const enterPlayerName = data.get("player-name").trim();
    if(!enterPlayerName)
    {
       errorOutput.innerHTML = "Input is not valid";
       return;
    }
    var UpdateName = document.getElementById("edited-" + editedPlayer );
    console.log(UpdateName);
     const ChangeName = document.getElementById("player-" + editedPlayer).innerHTML = enterPlayerName;
    // UpdateName.children[1].innerHTML = enterPlayerName;
    if(editedPlayer === 1)
    {
        players[0].name = enterPlayerName;
        console.log(players[0].name)
    }
    else {
        players[1].name = enterPlayerName;
        console.log(players[1].name)
    
    }
}
