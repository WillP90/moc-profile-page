console.log("Hello World")

//  Switches names on Profile 
let origName = document.querySelector(".profileName")
let newName = "Janice Smith"
function switchName(){
    origName.innerText = newName
}

// functions that remove the Requester card 
// based on What button is clicked
let card = [document.querySelector(".requesterDelete0"),
            document.querySelector(".requesterDelete1")]
function acceptReq(id){
    addConnect()
    card[id].remove()
}

function rejectReq(id){
    rejectConnect()
    card[id].remove()
}

// Calculates Connection numbers
let connect = document.querySelector(".connectNum")
let connectNum = 2
let yourConnect = document.querySelector(".yourConnectNum")
let yourConnectNum = 500
function addConnect(){
    connectNum--
    yourConnectNum++
    connect.innerText = connectNum
    yourConnect.innerText = yourConnectNum + "+"
}

function rejectConnect(){
    connectNum--
    connect.innerText = connectNum
}

