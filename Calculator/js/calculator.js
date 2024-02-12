//Creates and object to keep track of values
const Calculator = {
    //Display 0 on screen
    Display_Value:  '0',
    //Hold the first operand for any expressions
    First_Operand: null,
    //This checks if a second operand has been entered
    Wait_Second_Operand: false,
    //Hold the operand
    operator: null,
};

//This modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //This checks if Wait_Second_Operand is true and sets the Display_Value
    //to the key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites the Display_value if the current value is 0
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }

//This section handles decimal points
function Input_Digit(dot) {
    //Ensures that accidental clicking of decimal point doesnt cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //This says that if the Display_Value does not contain a decimal point we add one
        Calculator.Display_Value += dot;
    }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number 
    //displayed on the screen to a number and store the result
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if operator already exists
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        //Checks if operator exists
        const Value_Now = First_Operand || 0;
        //If operator exists property lookup is progormed
        //in the Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed (9);
        //This will remove trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
    };
}

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//This functon updates the calculator scree with the contents of Display_Value
function Update_Display() {
    //Makes use of the calculator screen class to target the input tag
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target varible is an object that represents the element
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classlist.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classlist.contains('decimal')) {
        Input_Digit(target.value);
        Update_Display();
        return
    }

    //Ensures that AC clears all inputs
    if (target.classlist.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();

})
