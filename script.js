// // document.write example
// function practice() {
//     document.open();
//     document.write("<h1>PRACTICE</h1>");
//     document.close();
// }

// // change text color on double click
// function changeColor() {
//     document.getElementById("text").style.color = "red";
// }

// // change input style on key press
// function customizeInput() {
//     var ele = document.getElementsByTagName("input")[0];
//     ele.style.backgroundColor = "yellow";
//     ele.style.color = "red";
// }
// focus and blur events on input

const x = document.querySelector("input");

x.addEventListener("focus", onHandleFocus);
x.addEventListener("blur", onHandleBlur);

function onHandleFocus() {
    x.style.background = "red";
}

function onHandleBlur() {
    x.style.background = "yellow";
    x.style.borderColor = "green";
}
