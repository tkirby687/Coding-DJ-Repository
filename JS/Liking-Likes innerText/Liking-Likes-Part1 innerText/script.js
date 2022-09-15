var count = 3;

elementCount = document.querySelector(".count");

console.log(elementCount);

function likeAdd() {
    count ++;
    console.log(count);
    elementCount.innerText = count + " Like(s) ";
}