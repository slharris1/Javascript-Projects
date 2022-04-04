function call_Loop() {
    var Digit= "";
    var X=1;
    while (X<11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML= Digit;
    
}

function call_String() {
  let text= "Hello World!";
  let length= text.length;
    document.getElementById("Length").innerHTML= length;
}

var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br";
    }
    document.getElementById("List_of_instruments").innerHTML= Content;
}

function vegetable_List() {
    var vegetable_List= [];
    vegetable_List [0]= "Carrot";
    vegetable_List [1]= "Pepper";
    vegetable_List [2]= "Cucumber";
    vegetable_List [3]= "Broccoli";
    document.getElementById("Vegetables").innerHTML = "In this list, the only green vegetable is " + vegetable_List[3] + ".";
}

function constant_Function() {
    const Musical_Instruments= {type: "violin", brand: "electric", color: "white"};
    Musical_Instruments.price= "$11,000";
    Musical_Instruments.type= "cello";
    document.getElementById("Constant").innerHTML= "The cost of the " + Musical_Instruments.type + " is listed at a whopping " + Musical_Instruments.price + "!!!";
}

var A= 204;
document.write(A);
{
    let B= 100;
    document.write("<br>" + B);
}
var C= 8000;
document.write("<br>" + C);

document.getElementById("demo").innerHTML = myFunction("Shalena");

function myFunction(name) {
  return "Hello " + name;
}

let animal = {
    Breed: "Cat",
    Age: "2",
    Color: "white",
    disposition: "energetic",
    description: function() {
        return "Rico is a " + this.Age + " year old " + this.disposition + ", " + this.Color + " " +this.Breed;
    }
};
document.getElementById("animal").innerHTML= animal.description();