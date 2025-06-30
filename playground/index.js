// operations on Arrays
var dummyArray = ['Ehsan', true, 2, ['dog', false]];

// shift removes the first item in an array and add it to the variable
var fisrtItemInDummyArray = dummyArray.shift();
console.log(fisrtItemInDummyArray); // 'Ehsan'

// pop removes the last item in an array and add it to the variable
var lastItemInDummyArray = dummyArray.pop();
console.log(lastItemInDummyArray); // ['dog', false]

// unshift adds an item at the beggining of an array
dummyArray.unshift('happy');
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
