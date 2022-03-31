document.write("40" + 8);
document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML= 0/0;
    document.getElementById("Test").innerHTML= isNaN('This is a string');   
}
document.write(5>10);
console.log(2+2);
console.log(10<5);
document.write(7==5);

X= 2;
Y= 2;
document.write(X===Y);

A=7;
B=2;
document.write(A===B);

C= 2;
C= 8;
document.write(C===C);

document.write(5>10 || 10>4)
document.write(5>2 && 6<9);

function not_Function() {
    document.getElementById("Not").innerHTML=!(5>10);
}