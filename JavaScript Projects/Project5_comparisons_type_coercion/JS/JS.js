document.write(typeof 3);

document.write(10 > 2);

document.write(10 < 2);

document.write(10 == 2);

document.write(2 == 2);

console.log(2 + 2);

X = 82;

Y = "82";

document.write(X === Y);

A = 82;

B = 82;

document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 6 && 10 > 4);

document.write(5 > 8 || 10 > 4);

document.write(5 > 8 || 10 > 11);


function my_function() {
    document.getElementById("Test").innerHTML = 0/0
}

function my_function1() {
    document.getElementById("Test1").innerHTML = isNaN("This is a string");
}

function my_function2() {
    document.getElementById("Test2").innerHTML = isNaN("007");
}

function my_function3() {
    document.getElementById("Test3").innerHTML = (-3E985);
}

function my_function4() {
    document.getElementById("Test4").innerHTML = (3E985);
}

function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_function2() {
    document.getElementById("Not2").innerHTML = !(20 < 10);
}