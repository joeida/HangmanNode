var Letter = require('./letter.js');

var Word = function(word) {
    this.wordSpace = word.replace(/\s/g,'$');
    this.wordArray = wordSpace.split('');
    this.listLettersGuessed = [];
    this.guessedWordRaw = '';
    this.guessedWord = '';
    this.numberGuessesRemaining = 10;
    this.letterClass = new Letter(word);
    this.searchLettersGuessed = function(userGuess) {
        // If letter already exists, imcrement number of guesses remaining
        if (this.listLettersGuessed.indexOf(userGuess) === -1) {
            this.listLettersGuessed.push(userGuess);
            this.numberGuessesRemaining--
        }
        this.guessedWordRaw = this.letterClass.searchWord(userGuess);
        // Get Current Guessed Word
        if (guessedWordRaw.indexOf('$') !== -1) {
            var removeSpace = guessedWordRaw.replace(/\s/g,'');
            this.guessedWord = removeSpace.replace('$', ' ');
        } else {
            this.guessedWord = guessedWordRaw.replace(/\s/g,'');
        }
        return this.guessedWord;
    }
}

module.exports = Word;