function Dog (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

var Braiden = new Dog("Braiden", "Taylor", "12", "Brown");

function myFunction() {
    document.getElementById("New_and_This").innerHTML = "My dog's name is " + Braiden.firstName + " " + Braiden.lastName + " He is " + Braiden.age + " years old";
}

function count_Function() {
  document.getElementById("Counting").innerHTML = Count ();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}