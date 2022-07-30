const msg = document.querySelector('.message');
const scoreDisplay = document.querySelector('#score');
const startBtn = document.querySelector('#start');
const grid = document.querySelector('.grid');
let isAlive;
let currentSnake = [2,1,0];
let tail = currentSnake.pop();
let squares = [];
let direction = 1;
let width = 10;
let appleIndex;
let score = 0;
let intervalTime = 1000;
let timerId;
let speedIncrease = 0.9;


function createGrid() {
    for (let i = 0; i < 100; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        squares.push(square);
    }
}
createGrid()

function hitWall(){
    isAlive = false;
    clearInterval(timerId);
    msg.innerHTML = "Snake hit a wall.<br> Wanna play again?";
}

function hitSelf(){
    isAlive = false;
    clearInterval(timerId);
    msg.innerHTML = "Snake hit itself. <br> Wanna play again?";
}

function startGame(){
    squares.forEach(el => {
        if(el.classList.contains('apple'))el.classList.remove('apple');
     });
    msg.innerHTML = ''
    clearInterval(timerId);
    currentSnake.forEach(el => {
        squares[el].classList.remove('snake');
    });
    currentSnake = [2,1,0];
    currentSnake.forEach(el => {
        squares[el].classList.add('snake');
    });
    isAlive = true;
    direction = 1;
    score = 0;
    scoreDisplay.textContent = score;
    generateApple();
    intervalTime = 1000;
    timerId = setInterval(move, intervalTime)    
}
/* 
remove snake class from all squares except for those of currentSnake 
*/
function move(){
    if(
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] % width === 9 && direction === 1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    (currentSnake[0] + width >= 100 && direction === +width)){
        hitWall();
    } else if(squares[currentSnake[0] + direction].classList.contains('snake')){
        hitSelf();
    }
    if(isAlive){
        currentSnake.forEach(index => {
            squares[index].classList.remove('snake');
        })
        currentSnake.pop();
        currentSnake.unshift(currentSnake[0] + direction);  
        currentSnake.forEach(index => {
            squares[index].classList.add('snake');
        })
        if(squares[currentSnake[0]].classList.contains('apple')){
            squares[currentSnake[0]].classList.remove('apple');
            currentSnake.push(tail);
            squares[currentSnake[tail]].classList.add('snake');
            score++;
            scoreDisplay.textContent = score;
            intervalTime *= speedIncrease;
            generateApple();
    }
}
}


// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow



// clearInterval(timerId)

function generateApple(){
    /* appleIndex cannot equal elem from currentSnake
    appleIndex can equal any other index of squares*/
    function generateAppleIndex(){
        appleIndex = Math.floor(Math.random() * squares.length);
        if(currentSnake.indexOf(appleIndex) !== -1){
            return generateAppleIndex();
        } else if (currentSnake.indexOf(appleIndex) === -1){
            return appleIndex;
        }
    }
        squares[generateAppleIndex()].classList.add("apple");
}



function control(e){
    if (e.keyCode === 39){
        direction = 1;
    } else if (e.keyCode === 38){
        direction = -width;
    } else if (e.keyCode === 37){
        direction = -1;
    } else if (e.keyCode === 40){
        direction = +width;
    }
}
document.addEventListener('keydown', control);
startBtn.addEventListener('click', startGame);
