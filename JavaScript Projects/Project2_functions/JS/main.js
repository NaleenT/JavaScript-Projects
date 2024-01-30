function Text_Function() { //Write a function to change the text on a button
    var str = "A button";
    document.getElementById("Test").innerHTML = str;
}

function Text() { //Write a function to change the text of a paragraph
    var str = "Paragraph";
    document.getElementById("Para").innerHTML = str;
}

function myFunction() { //Write a function to concatenate a sentence
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}