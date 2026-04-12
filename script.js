// // DOM selection and manipulation demo

// const result = document.getElementById("para");
// result.innerHTML = "My self";
// result.title = "myname";

// const result2 = document.getElementsByClassName("heading");
// result2[0].innerHTML = "Hello Heading 1";
// result2[1].innerHTML = "Hello Heading 2";

// const result3 = document.getElementsByTagName("p");
// result3[2].innerHTML = "This is paragraph 3";
// result3[1].style.color = "blue";
// result3[1].innerText = "My Paragraph Updated";

// const test = document.querySelector("ul li:nth-child(3)");
// test.style.backgroundColor = "green";
// test.style.padding = "10px";

// const test2 = document.querySelectorAll("ul li");

// for (let i = 0; i < test2.length; i++) {
//     test2[i].style.margin = "10px";
//     test2[i].style.color = "blue";
// }
// getAttribute example

const element = document.getElementById("myH1");

let text = element.getAttribute("class");
document.getElementById("demo").innerHTML = text;

// setAttribute example

function myFunction() {
    document.getElementById("myH1").setAttribute("class", "newClass");
}