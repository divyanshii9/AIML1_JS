// var text = '{"employees":[' +
// '{"firstname":"John","lastname":"Doe"},' +
// '{"firstname":"Anna","lastname":"Smith"},' +
// '{"firstname":"Peter","lastname":"Jones"}]}';

// // Convert JSON string to object
// var obj = JSON.parse(text);

// // Display data
// document.getElementById("Demo").innerHTML =
//     obj.employees[0].firstname + " " + obj.employees[0].lastname;
//     when the function is pass as an argument it is callled higher order function
// Map METHOD

var numbers=[1,2,3,4];
var result=numbers.map(n=>n*2);
console.log(result);

// Filter Method
var number=[30,50];
var result=number.filter(n=>n>20);
console.log(result);

//Reduced Method
var number=[10,20,30];
var sum=number.reduce((total,n)=>total+n,0)
console.log(sum);


//Promise Method
var promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success)
    resolve("Data Loaded");
else 
reject("Error Occured");
});
promise.then(result=>console.log(result)).catch(error=>console.log(error));

//Error Method
try{
    var x=y+10;
}
catch(error){
    console.log(error.message);
}

//Local Storage allows data to be stored permanenetly in the browser
// Store simple data
localStorage.setItem("Name", "jeet");

// Retrieve data
var name = localStorage.getItem("Name");
console.log(name);   // ✔ use 'name' not 'Name'

// Store Object
var user = { name: "Jeet", age: 50 };

localStorage.setItem("user", JSON.stringify(user));  // ✔ setItem

// Retrieve Object
var data = JSON.parse(localStorage.getItem("user")); // ✔ localStorage spelling

console.log(data);