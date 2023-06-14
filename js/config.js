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
    // document.getElementById("player-name").value = ""; 
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
    // var ChangeName = document.getElementById("player-" + editedPlayer).innerHTML = enterPlayerName;
    UpdateName.children[1].innerHTML = enterPlayerName;
}