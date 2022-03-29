function addition_Function() { //Defining the addition function
    var addition= 2+2;
    document.getElementById("Math").innerHTML="2+2=" + addition;
}

function subtraction_Function() { //Defining the subtraction function
    var subtraction= 5-2;
    document.getElementById("Math").innerHTML="5-2=" + subtraction;
}

function multiplication() { //Defining the multiplication function
    var simple_Math= 6*8;
    document.getElementById("Math").innerHTML="6*8=" + simple_Math;
}

function division() { //Defining the division function
    var simple_Math= 48/6;
    document.getElementById("Math").innerHTML="48/6=" + simple_Math;
}

function more_Math() {  //Defining the fuction for more math
    var simple_Math= (1+2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() { //Defining the Remainer/modulos function
    var simple_Math= 25%6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of: "+ simple_Math;
}

function negation_Operator() { //Defining the Negation function
    var x= 10;
    document.getElementById("Math").innerHTML=-x;
}

var X= 5;
X++;
document.write(X);

var Y= 6.18;
Y--;
document.write(Y);

window.alert(Math.random());

window.alert(Math.random()*100);

document.getElementById("Math").innerHTML=Math.round(4.6);
