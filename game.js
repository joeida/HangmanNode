var Game = function () {
    this.listWords = ['pacman', 'tetris', 'galaga', 'frogger', 'mario bros', 'donkey kong', 'centipede', 'space invaders', 'dig dug', 'zelda', 'contra', 'doom', 'paper boy', 'pong', 'pitfall', 'street fighter'];
    this.currentWord = '';
    this.oldWord = '';
    this.chooseWord = function() {
        do {
        var index = Math.floor(Math.random() * this.listWords.length);
        this.currentWord = this.listWords[index];
        } while (this.currentWord === this.oldWord);

        this.oldWord = this.currentWord;
        return this.currentWord;
    }
}

module.exports = Game;