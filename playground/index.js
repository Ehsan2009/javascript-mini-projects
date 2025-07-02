// operations on Arrays
var dummyArray = ["Ehsan", true, 2, ["dog", false]];

// shift removes the first item in an array and add it to the variable
var fisrtItemInDummyArray = dummyArray.shift();
console.log(fisrtItemInDummyArray); // 'Ehsan'

// pop removes the last item in an array and add it to the variable
var lastItemInDummyArray = dummyArray.pop();
console.log(lastItemInDummyArray); // ['dog', false]

// unshift adds an item at the beggining of an array
dummyArray.unshift("happy");
console.log(dummyArray); // [happy, true, 2]

// push adds an item to the end of an array
dummyArray.push(10);
console.log(dummyArray); // [happy, true, 2, 10]

/* 
3 == 3 => true
3 == '3' => true
*/

/* 
triple equal sign
3 === 3 => true
3 === '3' => false
*/

// switch case
function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
      answer = "alpha";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

console.log(caseInSwitch(3));

/*
Note: for getting the value of a property 
that has space in it, in an object,
we use bracket notations instead of dot notations!
*/

// the following code is an object in javascript
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// chaning the value of a property in an object
var myDog = {
  name: "camper",
  legs: 4,
};

myDog.name = "happy camper";

console.log(myDog.name); // 'happy camper'

// we can also add a new propery to our object using dot notaion and bracket notation:
myDog.bark = "bow-wow";
myDog["tails"] = 1;

// we can use 'delete' keyword to delete a propery in an object:
delete myDog.bark;
console.log(myDog); // {name: 'happy camper', legs: 4, tails: 1}

// we can understand if an object has a specific property:
console.log(myDog.hasOwnProperty("name")); // true

// to have a copy of an object we do this :
var myDogCopy = JSON.parse(JSON.stringify(myDog));

// loops in javascript

// while loop
var numbers = [];

var i = 0;
while (i < 5) {
  numbers.push(i);
  i++;
}

console.log(numbers); // [0, 1, 2, 3, 4]

// for loop
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray); // [1, 2, 3, 4, 5]

/*
do-while loop runs the code in the loop 
at least one time and then checks the
condition to continue or break the loop!
*/
var myArr = [];
var i = 10

do {
    myArr.push(i);
    i++;
} while (i < 5)

console.log(i, myArr); // 11, [10]