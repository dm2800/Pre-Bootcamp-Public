console.log("page loaded...");

var x = document.getElementById("myVideo");

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}


var vid = document.getElementById("myVideo");
vid.muted = true;

document.getElementById("myVideo").controls = true;
