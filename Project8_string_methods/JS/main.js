function full_Sentence() {
    var part_1 = "I have";
    var part_2 = " made this ";
    var part_3 = " into a complete ";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper() {
let text = "this is suppose to be yelling but im not conviced";
let result = text.toUpperCase();

document.getElementById("demo").innerHTML = result;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 36996.21452565565663;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Fix() {
    let test = 852.321456;
    console.log(test.toFixed(1));
}