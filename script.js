var count ;
    document.write("starting loop" +" <br/>");
    for(count=0;count<10;count++){
        document.write("current Count:" + count );
        document.write("<br/>");
    }
const person={
    fname:"Ajay",
    Lname:"singh",
    age:25
};
for(let x in person){
    console.log("person details:" + ":"+ person[x])
}