const messageDisplay = document.querySelector('#message');
const newCardDisplay = document.querySelector(".new-card");
const card1Display = document.querySelector(".card-1");
const card2Display = document.querySelector(".card-2");
const cardsDisplay = document.querySelector(".cards");
const sumDisplay = document.querySelector('#sum');
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackjack = false;
let cards = [];
function getRandomCard(){
    let randomNum = Math.round(Math.random() * (13 - 1) + 1);
    if(randomNum > 10){
        return 10;
    } else if(randomNum === 1){
        return 11;
    } else {
        return randomNum;
    }
}
function startGame(){
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
    messageDisplay.textContent = 'Picking cards...';
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
            renderGame();
       });};
}
function renderGame(){
    sum = cards.reduce((acc, el) => acc + el,0);
    sumDisplay.textContent = `Sum: ${sum}`;
    if(sum < 21){
        message = "Do you want to pick a new card?";
    } else if(sum === 21){
        message = `🎉 Congrats! You got Blackjack.💰<br>
        Start game again?`;
        hasBlackjack = true;
    } else {
        message = `You're out of the game. <br>
        Start game again?`;
        isAlive = false;
    }
    messageDisplay.innerHTML = message;
}

function newCard(){
    messageDisplay.textContent = 'Picking card...';
    let newCardAnimationDone = false;
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        cards.push(card);
        newCardDisplay.textContent = `${cards[cards.length - 1]}`;
        newCardDisplay.classList.add('new-card-animation');
        newCardDisplay.addEventListener('animationend', () => {
            newCardDisplay.textContent = '';
            newCardDisplay.classList.remove('new-card-animation');
            cardsDisplay.textContent = `${cards.join(' ')} `;
            newCardAnimationDone = true; 
            renderGame(); 
        });
    };
}