const
    mainDisplay         = document.getElementById("mainDisplay"),
    userAccess          = document.getElementById("userAccess"),
    form                = document.getElementById("form"),
    username            = document.getElementById("username"),
    submitBtn           = document.getElementById("submitBtn"),
    rankingDisplay      = document.getElementById("rankingDisplay"),
    topRank             = document.getElementById("topRank");



    // Starting the game function 

submitBtn.onclick =()=> {
    if (form.checkValidity()) {
        setPlayer(username.value);
        startGame(fourLetterWords);
    } else {
        const warning = document.createElement('span');
        warning.textContent = "You need to write a valid username";
        warning.style.color = "red";
        if (form.childElementCount < 4) {
            form.insertBefore(warning, submitBtn)
        };
    };
}


    // Generate the ranking 

window.onload = setRank();
function setRank() {
    let top5Time = [];
    let top5Name = [];
    if (myStorage.getItem("gamePlayers") !== null) {
        
        // Select from the data the best 5 scores
        gamePlayers = JSON.parse(myStorage.getItem("gamePlayers"));
        for (let i = 0; i <= gamePlayers.players.length; i++) {
            if ((i % 2 !== 0) && (i < 10)) {
                top5Time.push(gamePlayers.players[i]);
                top5Name.push(gamePlayers.players[i - 1])
            } else if (i % 2 !== 0) {
                for (let y = top5Time.length; y >= 0; y--) {
                    if (top5Time[y] > gamePlayers.players[i]) {
                        top5Time[y] = gamePlayers.players[i];
                        top5Name[y] = gamePlayers.players[i - 1];
                        break;
                    };
                };
            };
            
            // Sort best 5 scores order.
            let tempTime = 0;
            let tempName = '';
            for (let x = 0; x < top5Time.length; x++) {
                for(let xi = x; xi < top5Time.length; xi++) {
                    if (top5Time[xi] < top5Time[x]) {
                        tempTime = top5Time[xi];
                        tempName = top5Name[xi];
                        top5Time[xi] = top5Time [x];
                        top5Name[xi] = top5Name [x];
                        top5Time[x] = tempTime;
                        top5Name[x] = tempName;
                    };
                };
            };
        };
        
        // Create the list elements to display scores
        for (let z = 0; z < top5Name.length; z++) {
            let rank = document.createElement('li');
            rank.textContent = `${top5Name[z]} -- ${top5Time[z]} seconds`
            topRank.appendChild(rank);
        };
    } else {
        let rank = document.createElement('span');
        rank.textContent = `No scores to display yet!`
        rank.style.fontSize = '35px';
        rank.style.color = 'red';
        topRank.appendChild(rank);
    };
}

function setPlayer(name) {
    playerInfo.name = name;
}

function startGame(xLetterWords) {
    mainDisplay.removeChild(userAccess);
    mainDisplay.appendChild(gameDiv);
    word.textContent = "____";
    gameHead.innerHTML = `<b>${playerInfo.name}</b>, guess the word!`;
    gamePhase.innerHTML = `PHASE 1`;
    selectWord(xLetterWords);
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
        if (e.style.backgroundColor !== "red") { // Avoid clicking same mistake
            e.style.backgroundColor = "red";
            if (state < 10) {
                state++;
                drawing.setAttribute("src", piggy[state]);
            } else {
                console.log("You lost!");
                loseID.textContent = `${playerInfo.name}, the word was ${wordToGuess}`;
                mainDisplay.removeChild(gameDiv);
                mainDisplay.appendChild(loseDiv);
            };
        };
    } else {
        e.style.backgroundColor = "green";
        checkCharacter(e.textContent, wordToGuess);
        checkWin(word.textContent);
    };
}

    // Timer to get score 
    // Check character included in a word

function checkCharacter(l, w){
    let list = [];
    for( let i = 0; i < w.length; i++) {
        if(l === w[i]) {
            list.push(i);
            displayLetter(word.textContent, i, l);
        };
    };
}

    // Display on screen the guessed letter

function displayLetter(dis, pos, let) {
    let x = Array.from(dis);
    x[pos] = let;
    x = x.join('');
    word.textContent = x;
}

    // Check if you have all the letters

function checkWin(dis) {
    if(word.textContent.indexOf("_") < 0) {
        if(word.textContent.length === 4){
            gameHead.innerHTML = `Well done, <b>${playerInfo.name}</b>! The word was <b>${wordToGuess}</b><br>Guess the new word`;
            selectWord (fiveLetterWords);
            word.textContent = "_____";
            drawingWordDiv.style.marginTop = "18px";
            gamePhase.innerHTML = `PHASE 2`;
            state = 0;
            drawing.setAttribute("src", piggy[state]);
            const keyboardBtns = document.querySelectorAll(".keyboard button");
            keyboardBtns.forEach((btn) => {
            btn.style.backgroundColor = "black";
            });
        }else {
            console.log("You won!");
            timerOff();
            while (topRank.lastChild) {
                topRank.removeChild(topRank.lastChild);
            };
            storeLocal(playerInfo.name, playerInfo.time);
            userID.innerHTML= `${playerInfo.name}, congratulations! <br> The word was ${wordToGuess}`;
            finishSeconds.textContent = `You finished in ${playerInfo.time} seconds`;
            mainDisplay.removeChild(gameDiv);
            mainDisplay.appendChild(winDiv);
            setRank();
        }
    }
}

    // Save information into local storage when winning

function storeLocal(name, time) {
    myStorage.clear();
    if (gamePlayers.players.indexOf(name) < 0) {
        gamePlayers.players.push(name);
        gamePlayers.players.push(time);
    } else {
        let playerIndex = gamePlayers.players.indexOf(name);
        if (gamePlayers.players[playerIndex + 1] > time) {
            gamePlayers.players[playerIndex + 1] = time;
        };
    };
    myStorage.setItem("gamePlayers", JSON.stringify(gamePlayers));
}


    // Play again function

function playAgain() {
    if (mainDisplay.contains(winDiv)) {
        mainDisplay.removeChild(winDiv);
        gameHead.innerHTML = `<b>${playerInfo.name}</b>, guess the word!`;
        drawingWordDiv.style.marginTop = "50px";
        gamePhase.innerHTML = `PHASE 1`;
    } else {
        mainDisplay.removeChild(loseDiv);
        gameHead.innerHTML = `<b>${playerInfo.name}</b>, guess the word!`;
        drawingWordDiv.style.marginTop = "50px";
        gamePhase.innerHTML = `PHASE 1`;
    }
    startAgain();
}

function startAgain() {
    selectWord(fourLetterWords);
    timerOn();
    word.textContent = "____";
    state = 0;
    drawing.setAttribute("src", piggy[state]);
    mainDisplay.appendChild(gameDiv);
    const keyboardBtns = document.querySelectorAll(".keyboard button");
    keyboardBtns.forEach((btn) => {
        btn.style.backgroundColor = "black";
    });
}
    

    // Timer to get score 

function timerOn() {
    startingTime = new Date();
}

function timerOff() {
    let winningTime = (new Date() - startingTime) / (1000);
    playerInfo.time = Math.round(winningTime * 10) / 10;
}


    // Keyboard detection

window.addEventListener("keydown", (ele) => {
    const
    q = document.getElementById("q"),
    w = document.getElementById("w"),
    e = document.getElementById("e"),
    r = document.getElementById("r"),
    t = document.getElementById("t"),
    y = document.getElementById("y"),
    u = document.getElementById("u"),
    i = document.getElementById("i"),
    o = document.getElementById("o"),
    p = document.getElementById("p"),
    a = document.getElementById("a"),
    s = document.getElementById("s"),
    d = document.getElementById("d"),
    f = document.getElementById("f"),
    g = document.getElementById("g"),
    h = document.getElementById("h"),
    j = document.getElementById("j"),
    k = document.getElementById("k"),
    l = document.getElementById("l"),
    z = document.getElementById("z"),
    x = document.getElementById("x"),
    c = document.getElementById("c"),
    v = document.getElementById("v"),
    b = document.getElementById("b"),
    n = document.getElementById("n"),
    m = document.getElementById("m");

    if (ele.key === "q") {
        q.click();
    } else if (ele.key === "w") {
        w.click();
    } else if (ele.key === "e") {
        e.click();
    } else if (ele.key === "r") {
        r.click();
    } else if (ele.key === "t") {
        t.click();
    } else if (ele.key === "y") {
        y.click();
    } else if (ele.key === "u") {
        u.click();
    } else if (ele.key === "i") {
        i.click();
    } else if (ele.key === "o") {
        o.click();
    } else if (ele.key === "p") {
        p.click();
    } else if (ele.key === "a") {
        a.click();
    } else if (ele.key === "s") {
        s.click();
    } else if (ele.key === "d") {
        d.click();
    } else if (ele.key === "f") {
        f.click();
    } else if (ele.key === "g") {
        g.click();
    } else if (ele.key === "h") {
        h.click();
    } else if (ele.key === "j") {
        j.click();
    } else if (ele.key === "k") {
        k.click();
    } else if (ele.key === "l") {
        l.click();
    } else if (ele.key === "z") {
        z.click();
    } else if (ele.key === "x") {
        x.click();
    } else if (ele.key === "c") {
        c.click();
    } else if (ele.key === "v") {
        v.click();
    } else if (ele.key === "b") {
        b.click();
    } else if (ele.key === "n") {
        n.click();
    } else if (ele.key === "m") {
        m.click();
    };
})