var Word = require('./word.js');
var Game = require('./game.js');
var inquirer = require('inquirer');
var currentWord = '';
var guessedWord = '';
var count = 0;
var word;
var game;

var startGame = function() {
    game = new Game();
    currentWord = game.chooseWord();
    word = new Word(currentWord);
}

var askGuess = function() {
    if (count < 10) {
        if (count === 0) {
            var initialWord = word.getGuessedWord();
            console.log(initialWord);
        }
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess letter:",
                validate: function(value) {
                    if (value.length === 1 && value.match(/[a-z]/i)) {
                        return true;
                    } else {
                        console.log("\nPlease try entering a valid letter.");
                        return false;
                    }
                }
            }
            ]).then(function (letter) {
                count++;
                word.searchWord(letter.guess.toLowerCase());
                var guessedWord = word.getGuessedWord();
                if (guessedWord === currentWord) {
                    console.log(guessedWord);
                    console.log("You successfully guessed the word!");
                } else {
                    var guessLeft = 10 - count;
                    console.log(guessedWord);
                    console.log('You have ' + guessLeft + ' left.');
                    console.log("Please choose again");
                    askGuess();
                }
            });
    } else {
        console.log('Your 10 guesses are done');
    }
}

startGame();
askGuess();
