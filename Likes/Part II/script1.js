var likesCount = [9,12,9];
var likeMeterA = document.querySelector("#lma")
var likeMeterB = document.querySelector("#lmb")
var likeMeterC = document.querySelector("#lmc")


function addLikeA(){
    likesCount[0]++;
    likeMeterA.innerText = likesCount[0] + " like(s)";
    console.log(likesCount);
}

function addLikeB(){
    likesCount[1]++;
    likeMeterB.innerText = likesCount[1] + " like(s)";
    console.log(likesCount);
}

function addLikeC(){
    likesCount[2]++;
    likeMeterC.innerText = likesCount[2] + " like(s)";
    console.log(likesCount);
}


