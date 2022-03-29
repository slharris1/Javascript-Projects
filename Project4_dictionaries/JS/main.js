function my_Dictionary() { //Defining the function Dictionary
    var Animal= {         //Assigining the variable animal
        Species: "Cat",  //KVP for species
        Color: "White",  //KVP for color
        Breed: "Turkish Van", //KVP for breed
        Age: 2,        //KVP for age
        Sound: "Meow!",  //KVP for sound
    };
    delete Animal.Sound; //setting operator of delect for the key of sound
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}