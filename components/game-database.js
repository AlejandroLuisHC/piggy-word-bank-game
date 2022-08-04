    // Local storage database

let myStorage = window.localStorage;
myStorage = [];

    // Current player info that will be stored afterwards

let playerInfo = {
    name: 'noname',
    time: 0
}

    //Starting time 

let startingTime = 0

    // Word to guess 

let wordToGuess = "";


    // Set of words length 4 letters

const fourLetterWords = ["FEET", "HACK", "CALL", "WORD"];


    // Set of words length 5 letters

const fiveLetterWords = [];

    // Hangman drawing (Using different pictures that change as you fail??)

const hangman = [] // We can store the pictures path in an array to have access easily later