function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride";
}

function Vote_Function() {
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote= (Age > 17) ? "You are old enough":"You are not old enough";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}

var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Breed, Age, Color,) {
    this.Animal_Breed= Breed;
    this.Animal_Age= Age;
    this.Animal_Color= Color;
}

var Rico= new Animal("Turkish van", 2, "White");
var Owen= new Animal("Tabby", 7, "Grey and White");
var Luna= new Animal("Mane Coone", 2, "Black");
function Animal_Function() {
    document.getElementById("New_and_This").innerHTML= "Rico is a " + Rico.Animal_Age + " year old " + Rico.Animal_Color + Rico.Animal_Breed + " and Luna is a " + Luna.Animal_Age + " year old " + Luna.Animal_Breed;
}

function Counting_Function() {
    document.getElementById("Nested_Function").innerHTML= count();
    function count() {
        var starting_point= 9;
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return starting_point;
    }
}