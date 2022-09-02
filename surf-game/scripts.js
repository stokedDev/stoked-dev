/* Allow player to start game after entering username. Use localStorage to keep track of user scores and display their history after each wave(wave lasts for limited time to maximize incentive to play) Different ranks can be achieved with various levels of final wave scores. In gameplay, depending on players position on wave, there are different opportunities to perform maneuvers. For instance, if player is at bottom and gets to top of wave outside barrel in limited time, aerial is performed if certain key is pressed within limited time before or having reached top of wave. Using this same logic will enable constant stream of: encouraging messages about tricks, points, combos. Each trick will be essential to creating unique combos. */
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#message");
messageDisplay.textContent = "Enjoy the ride..."
const width = 28;
let score = 0;
let squares = []
/* sun = 0 // sun could be another element placed with negative margin
sky = 1
ocean = 2
wave face = 3
barrel = 4 // change surfer color to alpha when in barrel
white wash = 5
beach = 6 */
let environment = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    5,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    5,5,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
    6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
    6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
]

/* sun = 0 // sun could be another element placed with negative margin
sky = 1
ocean = 2
wave-face = 3
barrel = 4 // change surfer color to alpha when in barrel
white-wash = 5
beach = 6 */
function createLevel(){
    for(let i = 0; i < environment.length; i++){
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
        if(environment[i] === 1){
            squares[i].classList.add('sky')
        } else if(environment[i] === 2){
            squares[i].classList.add('ocean')
        } else if(environment[i] === 3){
            squares[i].classList.add('wave-face')
        } else if(environment[i] === 4){
            squares[i].classList.add('barrel')
        } else if(environment[i] === 5){
            squares[i].classList.add('white-wash')
        } else if(environment[i] === 6){
            squares[i].classList.add('beach')
        }
    }
}
createLevel()

let surferCurrentIndex = 256;
squares[surferCurrentIndex].classList.add('surfer')
function control(e){
    if(squares[surferCurrentIndex].classList.contains('barrel')){
        squares[surferCurrentIndex].classList.remove('tubed-surfer')
    }
    squares[surferCurrentIndex].classList.remove('surfer')
    switch(e.key){
        case "ArrowDown":
            if( 
                !squares[surferCurrentIndex + width].classList.contains('ocean') &&
                surferCurrentIndex + width < width * width)
                surferCurrentIndex += width;            
        break;
        case "ArrowUp":
            if(
                !squares[surferCurrentIndex - width].classList.contains('ocean') &&
                surferCurrentIndex - width >= 0)
                 surferCurrentIndex -= width;
                 
                 
            
        break;
        case "ArrowLeft":
            if(
                !squares[surferCurrentIndex - 1].classList.contains('ocean') &&
                surferCurrentIndex % width !== 0) 
                surferCurrentIndex -= 1;
                
                
        break;
        case "ArrowRight":
            if(
                !squares[surferCurrentIndex + 1].classList.contains('ocean') &&
                surferCurrentIndex % width < width - 1)
                surferCurrentIndex += 1;
                
        break;
    }
    squares[surferCurrentIndex].classList.add('surfer')
    if(squares[surferCurrentIndex].classList.contains('barrel')){
        squares[surferCurrentIndex].classList.remove('surfer')
        squares[surferCurrentIndex].classList.add('tubed-surfer')
    }
    if(squares[surferCurrentIndex].classList.contains('white-wash')){
        squares[surferCurrentIndex].classList.remove('surfer')
        squares[surferCurrentIndex].classList.add('white-wash')
    }
    ridingMessage()    
}
document.addEventListener('keydown', control, {
    passive: true
})
let k = environment.indexOf(5)

function whiteWash(){
    setInterval(function(){
        squares[476].classList.add('white-wash')
        squares[505].classList.add('white-wash')
        squares[534].classList.add('white-wash')   
    }, 200)
    setInterval(function(){
        squares[476].classList.remove('white-wash')
        squares[505].classList.remove('white-wash')
        squares[534].classList.remove('white-wash')   
    }, 400)
}
whiteWash()
    
function getTubePoints(){
    setInterval(function(){
        if(squares[surferCurrentIndex].classList.contains('barrel') || squares[surferCurrentIndex].classList.contains('white-wash')){
        score += 1;
        scoreDisplay.textContent = score;
        }
    }, 200)    
}
getTubePoints()

function ridingMessage(){
    if(squares[surferCurrentIndex].classList.contains('barrel') || squares[surferCurrentIndex].classList.contains('white-wash')){
        messageDisplay.textContent = "You're getting tubed!"
        messageDisplay.style.color = 'white'
    } else if(squares[surferCurrentIndex].classList.contains('wave-face')){
        messageDisplay.textContent = 'Enjoy the ride...';
        messageDisplay.style.color = 'black'
}
}