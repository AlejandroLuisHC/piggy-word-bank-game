const
    mainDisplay         = document.getElementById("mainDisplay"),
    userAccess          = document.getElementById("userAccess"),
    form                = document.getElementById("form"),
    username            = document.getElementById("username"),
    submitBtn           = document.getElementById("submitBtn"),
    rankingDisplay      = document.getElementById("rankingDisplay"),
    topRank             = document.getElementById("topRank"),
    rank1               = document.getElementById("rank1"),
    rank2               = document.getElementById("rank2"),
    rank3               = document.getElementById("rank3"),
    rank4               = document.getElementById("rank4"),
    rank5               = document.getElementById("rank5");



    // Starting the game function 

submitBtn.onclick =()=> {
    if (form.checkValidity()) {
        setPlayer(username.value);
        startGame();
    } else {
        const warning = document.createElement('span');
        warning.textContent = "You need to write a valid username";
        warning.style.color = "red";
        if (form.childElementCount < 4) {
            form.insertBefore(warning, submitBtn)
        }
    }
}

function setPlayer(name) {
    playerInfo.name = name;
}

function startGame() {
    mainDisplay.removeChild(userAccess);
    mainDisplay.appendChild(gameDiv);
    gameHead.innerHTML = `<b>${playerInfo.name}</b>, guess the word!`;
    gamePhase.innerHTML = `PHASE 1`;
    selectWord(fourLetterWords);
    timerOn(); // Storing starting time in game-database
}


    // Pick a random word from the given array of words

function selectWord(array) {
    const randomPos = Math.floor(Math.random() * array.length);
    wordToGuess = array[randomPos].toUpperCase();
}


    // Check if the letter clicked is in the word to guess 

function letterInput(e) {
    if (!wordToGuess.includes(e.textContent)) {
        e.style.backgroundColor = "red";
        if (state < 5) {
            state++
            drawing.setAttribute("src", piggy[state])
        } else {
            console.log("You lost!");
            // redirect to 'lose' screen
        }
    } else {
        e.style.backgroundColor = "green";
        // more actions to develop
    }
}

    // Timer to get score 

function timerOn() {
    startingTime = new Date();
}

function timerOff() {
    let winningTime = (new Date() - startingTime) / (1000 * 60);
    playerInfo.time = winningTime;
}