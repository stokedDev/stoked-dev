const scoreDisplay = document.querySelector('#score')
const startBtn = document.querySelector('#start')
const grid = document.querySelector('.grid')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
let timerId = 0
let speedIncrease = 0.9


function createGrid() {
    for (let i = 0; i < 100; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function startGame(){
    
    clearInterval(timerId)
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    currentSnake = [2,1,0]
    squares[appleIndex].classList.remove('apple')
    direction = 1
    score = 0
    scoreDisplay.textContent = score
    generateApples()
    intervalTime = 1000
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)
}

function move(){
    if(
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] % width === 9 && direction === 1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    (currentSnake[0] + width >= 100 && direction === +width) ||
    squares[currentSnake[0] + direction].classList.contains('snake')
    ){
        return clearInterval(timerId)
    }
    
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add('snake')


//deal with snake head gets apple
        if(squares[currentSnake[0]].classList.contains('apple')){
    //remove the class of apple
    squares[currentSnake[0]].classList.remove('apple')
    //grow our snake by adding class of snake to it
    squares[tail].classList.add('snake')
    
    //grow our snake array
    currentSnake.push(tail)
    
    //generate new apple
    generateApples()
    //add one to the score
    score++
    //display our score
    scoreDisplay.textContent = score
    //speed up our snake
    clearInterval(timerId)
    intervalTime *= speedIncrease
    timerId = setInterval(move, intervalTime)
    
}

}

// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow



// clearInterval(timerId)

function generateApples(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length)//generate random number
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}



function control(e){
    if (e.keyCode === 39){
        direction = 1
    } else if (e.keyCode === 38){
        direction = -width
    } else if (e.keyCode === 37){
        direction = -1
    } else if (e.keyCode === 40){
        direction = +width
    }
}
document.addEventListener('keydown', control)
startBtn.addEventListener('click', startGame)