// what does this mean ? Math.floor() rounds down, not up ??
// i should use var or let keyword ??

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
var i = 10;

do {
  myArr.push(i);
  i++;
} while (i < 5);

console.log(i, myArr); // 11, [10]

// Math.random() return a random decimal number between 0 and 1 but it could not be 1

/* 
Math.floor() rounds down decimal number
that Math.random() returns, so if we want 
a whole number between 0 and 19 we use 
this code: Math.floor(Math.random() * 20)
*/

// parseInt() converts string to int, if possible!
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// ternary operator in javascript:
function checkEqual(a, b) {
  return a === b ? true : false;
}

checkEqual(1, 2);

// note: with the const keyword we can't reassign that variable twice, its read-only
// note: const variables are mutable if they hold objects or arrays.

// Object.freeze(variableName) makes an object's properties immutable,
// but it does NOT make the variable itself unchangeable or the object deeply frozen.

// Arrow function that returns the current date, assigned to the variable 'magic':
const magic = () => new Date();

// using map and filter in javascript:
const realNumberArray = [4, 5.6, -2, 3, 3.14];

const squardIntegers = realNumberArray
  .filter((num) => Number.isInteger(num) && num > 0)
  .map((filteredNum) => filteredNum * filteredNum);

console.log(squardIntegers); // [16, 9]

// one of the use of reduce() is we can sum up numbers in an array:
const numbersArray = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// Array Destructuring:
const newNumbers = [1, 2, 3];
const [a, b, c] = newNumbers;

console.log(a); // 1
console.log(b); // 2

// Object Destructuring:
const user = { userName: "Ehsan", age: 17 };
const { userName: newA, age: newB } = user;

console.log(newA); // "Ehsan"
console.log(newB);  // 17

// Example of a multi-line template literal with variable interpolation
const myName = "Ehsan";
const myAge = 17;

const message = `My name is ${myName}
and I am ${myAge} years old.`;

console.log(message);
// Output:
// My name is Ehsan
// and I am 17 years old.



// making objects with classes in javascript:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an object (instance) of the class
const person1 = new Person("Ehsan", 17);

// Call the method
person1.greet();
// Output: Hello, my name is Ehsan and I am 17 years old.


// an object that has a function in it in javascript:
const ourDog = {
  dogName: "Rex",
  bark() {
    console.log("Woof!");
  }
};

// getter and setter in a class:
class Book {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

let book = new Book('cris');
console.log(book.writer); // uses the getter, prints 'cris'

book.writer = 'new author'; // uses the setter

console.log(book.writer); // prints 'new author'


