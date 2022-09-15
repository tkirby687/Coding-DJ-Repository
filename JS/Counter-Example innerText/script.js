var count = 1;

var countElement = document.querySelector("#count");

console.log(countElement);

function add1() {
    count ++;
    console.log(count);
    countElement.innerText = "The count is " + count;
}

function sub1() {
    count --;
    console.log(count);
    countElement.innerText = "The count is " + count;
}