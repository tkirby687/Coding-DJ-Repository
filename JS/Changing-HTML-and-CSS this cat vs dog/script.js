var testpic = document.querySelector("#userCirclePic");

console.log(testpic);

function pickGear(element){
    testpic.src = "./icons/gear.png";
    element.style.backgroundColor = "goldenrod";
    
}

function pickUserCircle(element){
    testpic.src = "./icons/user-circle.png";
    element.classList.add("btn");
}