var Word = require('./word.js');
var Game = require('./game.js');
var inquirer = require('inquirer');
var currentWord = '';
var guessedWord = '';
var count = 0;
var wins = 0;
var losses = 0;
var word;
var guessedWord;
var game;
var lettersChosenArray = [];

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
                if (lettersChosenArray.indexOf(letter.guess) === -1) {
                    lettersChosenArray.push(letter.guess);
                    count++;
                    word.searchWord(letter.guess.toLowerCase());
                    guessedWord = word.getGuessedWord();
                    if (guessedWord === currentWord) {
                        wins++;
                        console.log(guessedWord);
                        console.log("You successfully guessed the word!");
                        console.log("Wins: " + wins);
                        console.log("Losses: " + losses);
                        inquirer.prompt([
                        {
                            type: "list",
                            message: "Would you like to play again?",
                            choices: ["yes", "no"],
                            name: "answer",

                        }
                        ]).then(function(answer) {
                            if (answer.answer === "yes") {
                                console.log("Starting new game!");
                                count = 0;
                                currentWord = game.chooseWord();
                                word = new Word(currentWord);
                                askGuess();
                            } else {
                                console.log("Thanks for playing!  See you later.")
                            }
                        });
                    } else {
                        var guessLeft = 10 - count;
                        console.log(guessedWord);
                        console.log('You have ' + guessLeft + ' left.');
                        console.log("Please choose again");
                        askGuess();
                    }
                } else {
                    var guessLeft = 10 - count; 
                    console.log(guessedWord);
                    console.log('You have ' + guessLeft + ' left.');
                    console.log("You've already chose that letter.  Please choose again.");
                    askGuess();
                }
            });
    } else {
        losses++;
        console.log('Game Over!  You filaed to guess in 10 tries.');
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play again?",
            choices: ["yes", "no"],
            name: "answer",

        }
        ]).then(function(answer) {
            if (answer.answer === "yes") {
                console.log("Starting new game!");
                count = 0;
                guessedWord = '';
                lettersChosenArray = [];
                currentWord = game.chooseWord();
                word = new Word(currentWord);
                askGuess();
            } else {
                console.log("Thanks for playing!  See you later.")
            }
        });
    }
}

startGame();
askGuess();
