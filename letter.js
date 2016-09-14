var Word = require('./word.js');

var Letter = function(currentWord) {
    this.currentWord = currentWord;
    this.listGuess = [];
    this.searchWord = function(userGuess) {
        // If letter matches, enter letter into current guess
        for (var ii = 0; ii < this.currentWord.length; ii++) {
            if (userGuess === this.currentWord.charAt(ii)) {
                this.listGuess[ii] = userGuess;
            }
        }
        return (this.listGuess.join(' '));
    }
    // Push blank values onto guessed word list as a placeholder
    for (var i = 0; i < this.currentWord.length; i++) {
        if (this.currentWord[i] === ' ') {
            this.listGuess.push('$');
        } else {
            this.listGuess.push('_');
        }
    }
}

module.exports = Letter;