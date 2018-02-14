// Constructor that defines:
function Letter() {
    // A string value to store the underlying character for the letter
    this.char = "";
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    // A function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed
    this.ifGuessed = function() {
        if (this.guessed === true) {
            return this.char;
        } else {
            return "_"
        }
    };
    // A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly 
    this.guessChar = function() {
        if (this.char === this.guessed) {
            this.guessed = true
        }
    }
};

console.log(this.char);

module.exports = Letter



