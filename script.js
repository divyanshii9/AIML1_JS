var a = 40;
var b = 20;
var result;
var linebreak = "<br>";

document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result + linebreak);

document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result + linebreak);

document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result + linebreak);

document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result + linebreak);

document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result + linebreak);

document.write("Value of a => (a %= b) => ");
result = (a %= b);
document.write(result + linebreak);