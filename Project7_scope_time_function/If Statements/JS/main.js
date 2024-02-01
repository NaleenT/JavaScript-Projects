var X = 10; //* Univerisal variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    var Y = 20; //* Local variable
    document.write(Y + 100);
}

function Add_numbers_3() {
     //* No assigned variable
    document.write(Y + 100);
}


Add_numbers_1();
Add_numbers_2();
Add_numbers_3();



if (1 < 2) {
    document.write("The left number is smaller than the number on the right."); //*See if the statement is true, if true than write the statement */
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").ariaValueMax;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= Time < 18) {
        Reply =  "It is afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

}