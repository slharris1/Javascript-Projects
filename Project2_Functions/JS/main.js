function My_First_Function() {  //Defining and naming function//
    var str="This is the button text!"; //definf the variable and giving it a string value//
    document.getElementById("Button_Text").innerHTML=str;  //putting the value of the variable into the HTML element frompoint with the "Button_Text" id.//
}

function MyFunction() { //Defining and nameing the function.
    var sentence="I am learning"; //defining the variable
    sentence +="a lot from this book!"; //confinung the variable using the += operator
    document.getElementById("Concatenate").innerHTML=sentence; //putting the value of the variable into the HTML element

}