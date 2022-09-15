
var nameSpan = document.querySelector("#name");
var foodToOrder = "Pizza";

function setName(element) {
    
    nameSpan.innerText = element.value;
    console.log(element.value);    
}


function pickFood(element) {
    console.log("the food is " + element.value);

    foodToOrder = element.value;
}

function order() {
    alert("Ordering a " + foodToOrder);
}