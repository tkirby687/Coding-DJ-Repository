

// Data types 

var myString = "Caden";
// console.log(myString);

var unicorn = "24";

// numbers


var num4 = 6;

console.log("Im concatenating" + " " + myString + " " + num4);

console.log(`Im concatenating ${myString} ${num4}`);


// boolean
var isHuman = false;

// Undefined 
var nothing;

// Null
var nothing = null;

var numbers = [2,4,6,8,10]
            // 0         1        2
var names = ['Caden', 'Lauren', 'Trae']


names[0] = 'Bassam';

names.pop();

console.log(names[1]);

var caden = {
    name: "Caden",
    age: 24,
    email: "cwilcox@codingdojo.com",
    isHuman: false,
    favHobbies: ["Gaming","Playing music", "Coding"],
}
// console.log(`${caden.name} is ${caden.age}`);

console.log(caden.favHobbies[1]);


var day = "Tuesday"

if (day === "Friday"){
    console.log("Its the weekend!");
}else if (day === "Saturday"){
    console.log("Still the weekend");
}
else if (day === "Sunday"){
    console.log("Last day of your weekend");
}else{
    console.log("Another weekday");
}

for (var num = 0; num <= 10; num++){
    console.log(num);
}

function sayHi(name){
    return "Hello " + name
}
// console.log(sayHi());

var greeting = sayHi("Trae");

// console.log(greeting);

function addNums(num1, num2){
    console.log(num1+num2);
}
var total = addNums(num3, num4);
console.log(total);







