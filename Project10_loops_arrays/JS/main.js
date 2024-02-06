/*Use a while loop to print numbers*/
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

/*Get the length of a string*/ 
let text = "Surprise!";
let length = text.length;

document.getElementById("Leng").innerHTML = length;

/* Make a list using a For Loop */
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violim", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/*Create an array*/
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "Eating";
    Cat_Picture[3] = "Purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}


/*Create a constant*/
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

/*Return function */
function Rturn(Fname, Lname) { 
    Fname = "John";
    Lname = "Smith";
    document.getElementById("Rturn").innerHTML= Fname + " " + Lname;

        return(Fname + " " + Lname);
}

/*Objects with properties*/
let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "Red",
    description: function() {
        return "The car is a " + "<br>" + this.year + "<br>" + this.color + "<br>" + this.make + "<br>" + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

/*Break*/
let item = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("Break").innerHTML = item;

/*Continue*/
function TestC() {
    let item2 = "";
    for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("Cont").innerHTML = item2;
}

