const gameDiv = document.createElement('div'); // Main container
gameDiv.style.display        = "flex";
gameDiv.style.flexDirection  = "column";
gameDiv.style.justifyContent = "center";
gameDiv.style.alignItems     = "center";
gameDiv.style.width          = "100%";

const gameDisplayDiv = document.createElement('div'); // Header, drawing and word container
gameDisplayDiv.style.display        = "flex";
gameDisplayDiv.style.flexDirection  = "column";
gameDisplayDiv.style.justifyContent = "center";
gameDisplayDiv.style.alignItems     = "center";
gameDisplayDiv.style.width          = "100%";
gameDiv.appendChild(gameDisplayDiv);

const gameHead = document.createElement('h1'); // Header
gameHead.style.textAlign = "center";
gameHead.style.marginBottom = "10px";
gameDisplayDiv.appendChild(gameHead);

const gamePhase = document.createElement('h2'); // Phase
gamePhase.style.textAlign = "center";
gameDisplayDiv.appendChild(gamePhase);

const drawingWordDiv = document.createElement('div'); // Drawing and word cotainer
drawingWordDiv.style.display        = "flex";
drawingWordDiv.style.justifyContent = "space-between";
drawingWordDiv.style.alignItems     = "center";
drawingWordDiv.style.width          = "90%";
drawingWordDiv.style.marginTop      = "50px";
gameDisplayDiv.appendChild(drawingWordDiv);

const drawing = document.createElement('img'); // Drawing (sample)
drawing.setAttribute("src", piggy[state]);
drawing.setAttribute("alt", "piggy");
drawing.style.width     = "350px";
drawing.style.height    = "350px";
drawingWordDiv.appendChild(drawing);

const word = document.createElement('span'); // Word box
word.style.fontSize      = "90px";
word.style.letterSpacing = "20px";
drawingWordDiv.appendChild(word);

const keyboard = document.createElement('div');
keyboard.className                    = "keyboard";
keyboard.style.display                = "flex";
keyboard.style.flexDirection          = "column"
keyboard.style.rowGap                 = "20px"
keyboard.style.justifyContent         = "center"
keyboard.style.alignItems             = "center"
keyboard.style.width                  = "100%";

keyboard.innerHTML = `
    <div style="display: flex; column-gap: 20px;">
        <button id="q" onclick="letterInput(this)">Q</button>
        <button id="w" onclick="letterInput(this)">W</button>
        <button id="e" onclick="letterInput(this)">E</button>
        <button id="r" onclick="letterInput(this)">R</button>
        <button id="t" onclick="letterInput(this)">T</button>
        <button id="y" onclick="letterInput(this)">Y</button>
        <button id="u" onclick="letterInput(this)">U</button>
        <button id="i" onclick="letterInput(this)">I</button>
        <button id="o" onclick="letterInput(this)">O</button>
        <button id="p" onclick="letterInput(this)">P</button>
    </div>
    <div style="display: flex; column-gap: 20px;">
        <button id="a" onclick="letterInput(this)">A</button>
        <button id="s" onclick="letterInput(this)">S</button>
        <button id="d" onclick="letterInput(this)">D</button>
        <button id="f" onclick="letterInput(this)">F</button>
        <button id="g" onclick="letterInput(this)">G</button>
        <button id="h" onclick="letterInput(this)">H</button>
        <button id="j" onclick="letterInput(this)">J</button>
        <button id="k" onclick="letterInput(this)">K</button>
        <button id="l" onclick="letterInput(this)">L</button>
    </div>
    <div style="display: flex; column-gap: 20px;">
        <button id="z" onclick="letterInput(this)">Z</button>
        <button id="x" onclick="letterInput(this)">X</button>
        <button id="c" onclick="letterInput(this)">C</button>
        <button id="v" onclick="letterInput(this)">V</button>
        <button id="b" onclick="letterInput(this)">B</button>
        <button id="n" onclick="letterInput(this)">N</button>
        <button id="m" onclick="letterInput(this)">M</button>
    </div>
`
gameDiv.appendChild(keyboard);