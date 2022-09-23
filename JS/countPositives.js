// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// // your code here!
// for(var i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         countPositives += 1;
//     }
// }
    
// console.log("there are " + countPositives + " positive values");


// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }
    
// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);


function reverse(arr) {

    var newArr = [];

    for(var i = arr.length-1; i>=0; i--) {        
        
        newArr.push(arr[i])
        console.log(i);
       

    }
    return newArr;

}

console.log(reverse(["a", "b", "c", "d", "e"]));


var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);
