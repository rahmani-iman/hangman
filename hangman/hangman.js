const words = ['BULLET', 'HANGMAN', 'WEATHER', 'WORKOUT'];
const randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord)
const letters = document.querySelector("#letters");
let clue = document.querySelector("#clue");
console.log(clue)
const random = ([...randomWord]);
console.log(letters)
letters.addEventListener("click", takenWordHandler);
window.addEventListener("keydown", keyHandler);
let clicked = [];
let mistakes = 0;
function takenWord(word) {
    word = word.toUpperCase();
    clicked.indexOf(word) === -1 ? clicked.push(word) : null ; 
    document.getElementById(word).className = "used"
    if (randomWord.indexOf(word) >= 0) {
        setUnderScores();
        checkIfWon();
    } else {
        mistakes++;
        checkIfLose();
        updateHangmanImg();
    };
}
function takenWordHandler(event) {
    takenWord(event.target.id);
}
function keyHandler(event) {
    takenWord(event.key);
}
let result = "";
function setUnderScores() {
    let splitedWord = randomWord.split("");
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "-"));
    console.log(mappedWord);
    result = mappedWord.join("");
    clue.innerHTML = `<p>${result}</p>`;
}
setUnderScores();
const image = document.querySelector("#image").querySelector("img");
const gameOver = document.querySelector("#gameover").querySelector("p");
function checkIfWon() {
    if (randomWord === result) {
        gameOver.style.display = "block";
        image.src = "./assets/winner.png";
    }
}
function checkIfLose() {
    if (mistakes === 6) {
        gameOver.style.display = "block";
        clue.innerHTML = `<p>The word was <span>${randomWord}</span> !</p>`
    };
}
function updateHangmanImg() {
    image.src = `./assets/hangman${mistakes}.png`;
}