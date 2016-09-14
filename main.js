var Letter = require('./letter.js');
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
        inquirer.prompt([
            {
                type: "list",
                message: "guess letter",
                choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],
                name: "guess"
            }
            ]).then(function (letter) {
                count++;
                guessedWord = word.searchLettersGuessed(letter.guess);
                if (guessedWord === currentWord) {
                    console.log("You successfully guessed the word!");
                } else {
                    console.log(guessedWord);
                    askGuess();
                }
            });
    } else {
        console.log('Your 10 guesses are done');
    }
}

startGame();
askGuess();
