//This variable keeps track of those turn is it
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already
    //The .some() method is sed to check each element of the selectSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is
        if (activePlayer === 'X') {
            //if activePlater is equal to "X", the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Actice player may only be "X" or "O" so, if not "X" it must be "O"
        } else {
            //If activePlayer is equal to "O, the o.png is placed in HTML"
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is "X change it to "O"
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //This function plays placement sound
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn
            disableClick();
            //this function waits 1 seconds before the computer places an image and enable click
            setTimeout(function() {computersTurn();}, 1000);
        }
        //Returning ture is needed for our computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected by the computer
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0 - 8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to for win conditions
//drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}

    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function() {resetGame(); }, 500);
    }
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordX2, coordX3) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis
    let x1 = coordX1,
        y1 = coordY1,
        x3 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //This function interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }

    }
//This function clears our cancas after our win line is drawn
function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}

disableClick();
audio('./media/winGame.mp3');
animateLineDrawing();
setTimeout(function() {clear(); resetGame();}, 1000);

}

//This function reserts the game in the event of a tie or a win
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundimage = '';
    }
    selectedSquares = [];
}