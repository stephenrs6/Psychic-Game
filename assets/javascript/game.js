//Declare variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];

var playerWins = document.getElementById("playerWins");
playerWins.textContent = wins;

var playerLosses = document.getElementById("playerLosses");
playerLosses.textContent = losses;

var playerGuesses = document.getElementById("playerGuesses");
playerGuesses.textContent = guesses;

var playerGuessed = document.getElementById("playerGuessed");
playerGuessed.textContent = guessed;

// Creates an array that lists out all of the options 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess;

// This function is run whenever the user presses a key.
function resetGame(){
    guesses = 9;
    guessed = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}
resetGame();
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    guesses--;

    // Compare the players guess and computer guess

    if (userGuess === computerGuess) {
        wins++;
        resetGame();
    }

    else {
        guessed.push(" " + userGuess);
        if (guesses === 0) {
            losses++;
            resetGame();
        }
    }

    playerWins.textContent = wins;
    playerLosses.textContent = losses;
    playerGuesses.textContent = guesses;
    playerGuessed.textContent = guessed;
};