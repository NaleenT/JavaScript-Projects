function my_Dictionary() {
    var Animal = {
        Spercies: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;

}