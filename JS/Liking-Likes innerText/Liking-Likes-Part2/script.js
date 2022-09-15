var count1 = 9;
var count2 = 12;
var count3 = 9;

elementCount1 = document.querySelector(".count1");
elementCount2 = document.querySelector(".count2");
elementCount3 = document.querySelector(".count3");

console.log(elementCount1);
console.log(elementCount2);
console.log(elementCount3);


function likeFollower1() {
    count1 ++;
    console.log(count1);
    elementCount1.innerText = count1 + " Like(s)";
}

function likeFollower2() {
    count2 ++;
    console.log(count2);
    elementCount2.innerText = count2 + " Like(s)";
}

function likeFollower3() {
    count3 ++;
    console.log(count3);
    elementCount3.innerText = count3 + " Like(s)";
}

