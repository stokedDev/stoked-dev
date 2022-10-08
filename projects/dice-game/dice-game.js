const message = document.getElementById('message');
const player1Scoreboard = document.getElementById('player1Score');
const player2Scoreboard = document.getElementById('player2Score');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');

/* Make random initial player turn */
/* Make user name input with initial default values */
let player1Score = 0;
let player2Score = 0;
let player1Turn = Math.random() < .5;
let turnMsg = player1Turn? 'Player 1 Turn': 'Player 2 Turn';
message.textContent = turnMsg;
/* in conditional result statements after first boolean result of player1Turn, 
change player1Turn boolean in relation to current player */
function showResetBtn(){
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'block';
}

rollBtn.addEventListener('click', function(){
    const dice = Math.floor(Math.random() * 6) + 1;
    if(player1Turn){
        message.textContent = 'Player 2 Turn';
        player1Score += dice;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = dice;
        player1Dice.classList.remove('active');
        player1Turn = false;
        player2Dice.classList.add('active');
    } else if (!player1Turn){
        message.textContent = 'Player 1 Turn';
        player2Score += dice;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = dice;
        player2Dice.classList.remove('active');
        player1Turn = true;
        player1Dice.classList.add('active');
    }
    if(player1Score >= 20){
        message.textContent = 'Player 1 Won 🎉';
        showResetBtn();
        message.style.animationName = 'growShrink';
    } else if(player2Score >= 20){
        message.textContent = 'Player 2 Won 🎉';
        showResetBtn();
        message.style.animationName = 'growShrink';
    }
    // player1Turn = !player1Turn;
    rollBtn.style.animationName = 'growShrink';
},{
    passive: true
})

function reset(){
    player1Turn = Math.random() < .5;
    player1Score = 0;
    player2Score = 0;
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active'); 
    rollBtn.style.display = 'block';
    resetBtn.style.display = 'none'; 
    message.textContent = player1Turn? 'Player 1 Turn': 'Player 2 Turn';
}
resetBtn.addEventListener('click', reset, {
    passive: true
})

rollBtn.addEventListener('animationend', function(){
    rollBtn.style.animationName = '';
    message.style.animationName = '';
},{
    passive: true
});
