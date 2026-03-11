// 2. Program to find the largest of three numbers using ternery operator
let a = 15;
let b = 25;
let c = 10;

let largest = (a > b && a > c)
          ? a
          : (b > c ? b : c);

console.log("Largest number is:", largest);