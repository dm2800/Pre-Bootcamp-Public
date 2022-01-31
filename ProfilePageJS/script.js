
var jane = document.querySelector(".name")
var line1 = document.querySelector(".line1")
var line2 = document.querySelector(".line2")
var num2 = document.querySelector(".number2")
var connum = document.querySelector(".con-num")


function changeName(){
    jane.innerText = "Paco Picón";
}

function acceptContact(){
    line1.remove();
    num2.innerText--;
    connum.innerText++;
}

function declineContact(){
    line1.remove();
    num2.innerText--;
}

function acceptContactB(){
    line2.remove();
    num2.innerText--;
    connum.innerText++;
}
function declineContactB(){
    line2.remove();
    num2.innerText--;
}





