
var hitemp = [24, 27, 27, 26];
var lotemp = [18, 19, 19, 21];
var todayhi = document.querySelector("#todayhi");
var todaylo = document.querySelector("#todaylo");
var tomhi = document.querySelector("#tomhi");
var tomlo = document.querySelector("#tomlo");
var frihi = document.querySelector("#frihi");
var frilo = document.querySelector("#frilo");
var sathi = document.querySelector("#sathi");
var satlo = document.querySelector("#satlo");


function loadWeather(){
    alert("Loading weather report...");
}


function switchDegrees(){
    hitemp[0] = "75˚";
    hitemp[1] = "80˚";
    hitemp[2] = "69˚";
    hitemp[3] = "78˚";
    lotemp[0] = "65˚";
    lotemp[1] = "66˚";
    lotemp[2] = "61˚";
    lotemp[3] = "70˚";
    console.log(hitemp);
    console.log(lotemp);
    todayhi.innerText = hitemp[0];
    todaylo.innerText = lotemp[0];
    tomhi.innerText = hitemp[1];
    tomlo.innerText = lotemp[1];
    frihi.innerText = hitemp[2];
    frilo.innerText = lotemp[2];
    sathi.innerText = hitemp[3];
    satlo.innerText = lotemp[3];
}




