var Likemeter = document.querySelector("#like-count");


var count = 3; 

// var countElement = document.querySelector("#like-count")

function addLike(){
    count++; 
    console.log(count);
    Likemeter.innerText = count + " like(s)"
}