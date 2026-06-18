// // Function
// var sayHello = function () {
//     alert("Hello World!");
// };

// // Array
// var numberArray = [1, 2, 3];
// var animals = ["cat", "dog", "mouse", "lion"];

// // Object
// var person = {
//     name: "Barack Hussein Obama II",
//     age: 51,
//     title: "44th President of the United States"
// };

// console.log(numberArray);
// console.log(animals);
// console.log(person);
const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

if (sym1 == sym2) {
    console.log("true");
} else {
    console.log("false"); // because each Symbol is unique
}