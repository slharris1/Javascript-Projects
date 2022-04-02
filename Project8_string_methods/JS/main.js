function slice_Method() {
    var Sentence= "First they are sour, then sweet, then they are gone!";
    var Section= Sentence.slice(15,31);
    document.getElementById("Slice").innerHTML= Section;
}

function string_Method() {
    var X= 528;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();
}

function precision_Method() {
    var Y= 516819.618820;
    document.getElementById("Precision").innerHTML= Y.toPrecision(7);

}

function fixed_Method() {
    var Z= 5.16819618820;
    document.getElementById("Fixed").innerHTML= Z.toFixed(4);
}

function valueof_Method() {
    var str="Hello World!";
    document.getElementById("Value").innerHTML= str.valueOf();
}

function full_sentence() {
    var Part_1= "Barney is ";
    var Part_2= "a dinosaur ";
    var Part_3= "from our ";
    var Part_4= "imagination.";
    var whole_sentence= Part_1.concat(Part_2, Part_3, Part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

   