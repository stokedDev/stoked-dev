const messageDisplay = document.querySelector('#message');
const cardsDisplay = document.querySelector("#cards");
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
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    renderGame()
}
function renderGame(){
    cardsDisplay.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsDisplay.textContent += `${cards[i]} `
    }
    sumDisplay.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to pick a new card?";
    } else if(sum === 21){
        message = `🎉 Congrats! You got Blackjack.💰 

        Start game again?`;
        hasBlackjack = true;
    } else {
        message = `You're out of the game.

        Start game again?`;
        isAlive = false;
    }
    messageDisplay.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        renderGame()
    }
}