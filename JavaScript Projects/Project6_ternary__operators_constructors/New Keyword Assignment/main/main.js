function Dog(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

var Braiden = new Dog("Braiden", "Taylor", "12", "Brown");

function New_and_This() {
    document.getElementById("New_and_This").innerHTML = "My dog's name is " + Braiden.firstName + Braiden.lastName + " He is " + Braiden.age + " years old";
}
