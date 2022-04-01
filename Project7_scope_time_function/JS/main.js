var X= 50;
function Add_numbers_1() {
    document.write(100+ X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 200 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_Numbers_3() {
    var Y= 15;
    document.write(40+X+"<br>");
}

function Add_Numbers_4() {
    document.write(Y + 100);
}

Add_Numbers_3();
Add_Numbers_4();

function get_Data() {
    if (new Date().getHours() <22) {
        document.getElementById("Greeting").innerHTML="How are you doing today?";
    }
}

if (700<82) {
    document.write("The right number is larger than the left number");
}

function Height_Function() {
    Height=document.getElementById("Height").value;
    if (Height >= 6) {
        Ride="You are too tall to ride! Sorry!";
    }
    else {
        Ride="You are tall enough to ride! Enjoy!";
    }
    document.getElementById("How_tall_are_you?").innerHTML=Ride;
}

function Time_Function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time <=12==Time>0) {
        Reply="It is morning time.";
    }
    else if (Time >=12==Time<18) {
        Reply="It is afternoon";
    }
    else {
        Reply="It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}