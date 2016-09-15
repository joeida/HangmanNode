var Letter = require('./letter.js');

var Word = function(word) {
    this.word = word;
    this.letterArray = [];
    for (var i = 0; i < this.word.length; i++) {
        this.letterArray.push(new Letter(this.word[i]));
    }
    for (var item in this.letterArray) {
        console.log(this.letterArray[item]);
    }
    this.searchWord = function(letter) {
        for (var ii = 0; ii < this.word.length; ii++) {
            if (letter === this.word.charAt(ii)) {
                this.letterArray[ii].setFound();
            }
        }
    }
    this.getGuessedWord = function() {
        var guessedWord = '';
        console.log(this.letterArray);
        for (var iii = 0; iii < this.letterArray.length; iii++) {
            if (this.letterArray[iii].letter === ' ') {
                guessedWord += ' ';
            } else if (this.letterArray[iii].success === true) {
                guessedWord += this.letterArray[iii].letter;
            } else {
                guessedWord += '_';
            }
        }
        return guessedWord;
    }
}

module.exports = Word;