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


/*WIN*/
const userID = document.createElement("h2");
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
buttonWin.onclick = () => playAgain();
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
changeUserWin.onclick =()=> location.reload();
winDiv.appendChild(changeUserWin);

const winImg = document.createElement("img");
winImg.src = "/assets/img/win.gif";
winImg.style.width = "300px";
winDiv.appendChild(winImg);


/* loser */

const loseID = document.createElement("h2");
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
buttonLose.onclick = () => playAgain();
loseDiv.appendChild(buttonLose);


const changeUserLose = document.createElement("button");
changeUserLose.textContent = "Change user";
changeUserLose.style.backgroundColor = "black";
changeUserLose.style.color = "white";
changeUserLose.style.fontSize = "25px";
changeUserLose.style.cursor = "pointer"
changeUserLose.style.width = "300px";
changeUserLose.style.margin = "10px";
changeUserLose.style.height = "40px";
changeUserLose.style.borderRadius = "3px";
changeUserLose.onclick =()=> location.reload();

loseDiv.appendChild(changeUserLose);

const loseImg = document.createElement("img");
loseImg.src = "/assets/img/bye.gif";
loseImg.style.width = "300px";
loseDiv.appendChild(loseImg);