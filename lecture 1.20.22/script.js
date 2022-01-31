
//this is a function declaration 
function myFunction(element){
    element.innerText = "I have changed the paragraph to Titty!"
}

//this is a function call 
myFunction();

function changeColor(element){
    element.style.color = "red";
}

function like(id){
    document.querySelector(id).innerText++;
}


function changeImage(element){
    element.src = "../lecture 1.20.22/socialsnakes.png";
}



function myAlert(){
    alert("did it work?");
}

function disappear(element){
    element.remove();
}


function timeFunction(element){
}

setTimeout(myAlert, 5000);