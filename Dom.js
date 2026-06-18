// function changeColor() {
//     document.getElementById("para").style.color = "blue";
// }git
function changeClass() {
    let x = document.getElementsByClassName("demo");

    for(let i=0;i<x.length;i++) {
        x[i].style.color = "red";
    }
}