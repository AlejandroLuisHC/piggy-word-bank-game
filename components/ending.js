const winDiv = document.createElement("div");
winDiv.style.display = "flex";
winDiv.style.flexDirection = "column";
winDiv.style.justifyContent = "center";
winDiv.style.alignItems = "center";

const loseDiv = document.createElement("div");
loseDiv.style.display = "flex";
loseDiv.style.flexDirection = "column";
loseDiv.style.justifyContent = "center";
loseDiv.style.alignItems = "center";


let score = document.createElement("h1");
score = 40;

if (score < 50) {
    mainDisplay.appendChild(loseDiv);
} else {
    mainDisplay.appendChild(winDiv);
}

/*WIN*/
const userID = document.createElement("h2");
userID.textContent = `${playerInfo.name}`;
userID.style.fontSize = "42px";
userID.style.color = "black";
userID.style.margin = "10px";
userID.style.padding = "10px";
winDiv.appendChild(userID);

const userWin = document.createElement("h1");
userWin.textContent = "You won!";
userWin.style.color = "green";
userWin.style.margin = "10px";
winDiv.appendChild(userWin);

const finishSeconds = document.createElement("h2");
finishSeconds.textContent = `You finished in ${playerInfo.time} seconds`;
finishSeconds.style.color = "black";
finishSeconds.style.margin = "10px";
winDiv.appendChild(finishSeconds);

const buttonWin = document.createElement("button");
buttonWin.textContent = "Play Again!";
buttonWin.style.backgroundColor = "black";
buttonWin.style.color = "white";
buttonWin.style.fontSize = "25px";
buttonWin.style.cursor = "pointer"
buttonWin.style.width = "300px";
buttonWin.style.margin = "10px";
buttonWin.style.height = "40px";
buttonWin.style.borderRadius = "3px";
winDiv.appendChild(buttonWin);

const changeUserWin = document.createElement("button");
changeUserWin.textContent = "Change user";
changeUserWin.style.backgroundColor = "black";
changeUserWin.style.color = "white";
changeUserWin.style.fontSize = "25px";
changeUserWin.style.cursor = "pointer"
changeUserWin.style.width = "300px";
changeUserWin.style.margin = "10px";
changeUserWin.style.height = "40px";
changeUserWin.style.borderRadius = "3px";
winDiv.appendChild(changeUserWin);

const winImg = document.createElement("img");
winImg.src = "/assets/img/win.gif";
winImg.style.width = "300px";
winDiv.appendChild(winImg);


/* loser */

const loseID = document.createElement("h2");
loseID.textContent = `${playerInfo.name}`;
loseID.style.fontSize = "42px";
loseID.style.color = "black";
loseID.style.margin = "10px";
loseID.style.padding = "10px";
loseDiv.appendChild(loseID);

const userLose = document.createElement("h1");
userLose.textContent = "You lose!";
userLose.style.color = "red";
userLose.style.margin = "10px";
loseDiv.appendChild(userLose);

const finishLose = document.createElement("h2");
finishLose.textContent = "Try again";
finishLose.style.color = "black";
finishLose.style.margin = "10px";
loseDiv.appendChild(finishLose);

const buttonLose = document.createElement("button");
buttonLose.textContent = "Play Again!";
buttonLose.style.backgroundColor = "black";
buttonLose.style.color = "white";
buttonLose.style.fontSize = "25px";
buttonLose.style.cursor = "pointer"
buttonLose.style.width = "300px";
buttonLose.style.margin = "10px";
buttonLose.style.height = "40px";
buttonLose.style.borderRadius = "3px";
loseDiv.appendChild(buttonLose);


const changeUse = document.createElement("button");
changeUse.textContent = "Change user";
changeUse.style.backgroundColor = "black";
changeUse.style.color = "white";
changeUse.style.fontSize = "25px";
changeUse.style.cursor = "pointer"
changeUse.style.width = "300px";
changeUse.style.margin = "10px";
changeUse.style.height = "40px";
changeUse.style.borderRadius = "3px";
loseDiv.appendChild(changeUse);

const loseImg = document.createElement("img");
loseImg.src = "/assets/img/bye.gif";
loseImg.style.width = "300px";
loseDiv.appendChild(loseImg);