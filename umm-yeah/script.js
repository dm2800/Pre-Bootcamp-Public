
var nameSpan = document.querySelector("#name");
var foodtoOrder = "Pizza";




function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}



function pickFood(element) {
    console.log("the food is " + element.value);
    foodtoOrder = element.value; 
}


function order(){
    alert("Ordering a " + foodtoOrder)
}




