const messageDisplay = document.querySelector('#message');
const newCardDisplay = document.querySelector(".new-card");
const card1Display = document.querySelector(".card-1");
const card2Display = document.querySelector(".card-2");
const cardsDisplay = document.querySelector(".cards");
const sumDisplay = document.querySelector('#sum');
const playBtn = document.querySelector('.play-btn');
const newCardBtn = document.querySelector('.new-card-btn');
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackjack = false;
let cards = [];
newCardBtn.classList.add('disappear');
function getRandomCard(){
    let randomNum = Math.round(Math.random() * (13 - 1) + 1);
    if(randomNum > 10){
        return 10;
    } else if(randomNum === 1){
        return sum + 11 > 21? 1: 11;
    } else {
        return randomNum;
    }
}
function startGame(){
    newCardBtn.classList.add('disappear');
    messageDisplay.textContent = '';
    isAlive = false;
    let initial2cardsAnimated = false;
    card1Display.textContent = '';
    card2Display.textContent = '';
    newCardDisplay.textContent = '';
    cardsDisplay.textContent = '';
    sum = 0;
    sumDisplay.textContent = 'Sum:';
    cards = [];
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    card1Display.textContent = `${cards[0]}`;
    card1Display.classList.add('new-card-animation');
    messageDisplay.style.fontStyle = 'normal';
    messageDisplay.textContent = 'Getting Cards...';
    playBtn.textContent = 'RESTART';
            if(initial2cardsAnimated === false){
            card1Display.addEventListener('animationend', () => {
            card1Display.classList.remove('new-card-animation');
            card1Display.textContent = "";
            cardsDisplay.textContent = `${cards[0]}`;
            sumDisplay.textContent = `Sum: ${cards[0]}`;
            card2Display.textContent = `${cards[1]}`;
            card2Display.classList.add('new-card-animation');
        });
            card2Display.addEventListener('animationend', () => {
            card2Display.classList.remove('new-card-animation');
            card2Display.textContent = '';
            cardsDisplay.textContent = `${cards.join(' ')}`;
            sum = cards.reduce((acc, el) => acc + el,0);
            sumDisplay.textContent = `Sum: ${sum}`;
            initial2cardsAnimated = true;
            newCardBtn.classList.remove('disappear');
            renderGame();
       });};
}
function renderGame(){
    sum = cards.reduce((acc, el) => acc + el,0);
    sumDisplay.textContent = `Sum: ${sum}`;
    if(sum < 21){
        message = "Do you want a new card?";
    } else if(sum === 21){
        message = `🎉 Congrats! 🎉<br>💰 You got Blackjack! 💰<br>
        Start game again?`;
        hasBlackjack = true;
        newCardBtn.classList.add('disappear');
    } else {
        message = `You're out of the game. <br>
        Start game again?`;
        isAlive = false;
        newCardBtn.classList.add('disappear');
    }
    messageDisplay.style.fontStyle = 'italic';
    messageDisplay.innerHTML = message;
}

function newCard(){
    newCardBtn.classList.add('disappear');
    messageDisplay.style.fontStyle = 'normal';
    messageDisplay.textContent = 'Getting Card...';
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        cards.push(card);
        newCardDisplay.textContent = `${cards[cards.length - 1]}`;
        newCardDisplay.classList.add('new-card-animation');
        newCardDisplay.addEventListener('animationend', () => {
            newCardDisplay.textContent = '';
            newCardDisplay.classList.remove('new-card-animation');
            cardsDisplay.textContent = `${cards.join(' ')} `; 
            newCardBtn.classList.remove('disappear');
            renderGame(); 
        });
    };
}