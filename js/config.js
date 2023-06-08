function saveName1(event){
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
function closeForm(){
    errorOutput.innerHTML= "";
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
}