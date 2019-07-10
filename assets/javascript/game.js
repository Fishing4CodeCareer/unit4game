var numbers = ["1", "5", "15", "25"]
    , randomNumbers = ""
    , winCount = 0
    , lossCount = 0
    , guessesLeft = 0
    , guessedNumbers = []
    , defaultGuessesLeft = 7;

window.addEventListener(clickon.button, onButtonPress, false);
newGame();
var sum
function newGame() {
    guessedNumbers = [];
    resetGuesses();
    generateRandomNumber();
    displayOnScreen("wins", "wins: " + winCount);
    displayOnScreen("losses", "losses: " + lossCount);
    displayOnScreen("guessesleft", "Guesses Left: " + guessesLeft);
}
function clickon() {
    number = clickon.button();

    if (numbers.includes(number, 0) && guessedNumbers.includes(number, 0) === false) {
        guessedNumbers.push(clickon.button);
        printKeyPressed(number);
        guessesLeft--;
        displayOnScreen("guessesleft", "Guesses Left: " + guessesLeft);
        if (String(number) == String(randomNumber)) {
            winCount++;
            displayOnScreen("wins", "wins: " + winCount);
            newGame();
        }
        if (guessesLeft === 1) {
            lossCount++;
            displayOnScreen("losses", "losses: " + lossCount);
            newGame();
        }
    }
}

function generateRandomNumber() {
    randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
}
function printKeyPressed(numbers) {
    if (guessesLeft == 7) {
        document.getElementById("guessessofar").innerHTML += number;
    } else {
        document.getElementById("guessessofar").innerHTML += ", " + number;
    }
}

function resetGuesses() {
    guessesLeft = defaultGuessesLeft;
    displayOnScreen("guessesleft", "Losses: " + guessesLeft);
    displayOnScreen("guessessofar", "Your Guesses so far: ");
}

function displayOnScreen(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}