var Letter = function(letter) {
    this.letter = letter;
    this.success = false;
    this.setFound = function() {
        this.success = true;
    }
}

module.exports = Letter;