//Requiring letter.js
var letter = require('./letter.js');

// Constructor used to create an object representing the current word the user is attempting to guess

function Word() {
    // An array of new Letter objects representing the letters of the underlying word
    this.letters = [];
    // A function that returns a string representing the word
    this.wordFunc = function() {
        
    }
    // A function that takes a character as an argument and calls the guess function on each letter object
}