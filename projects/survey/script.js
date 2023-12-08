const submitBtn = document.querySelector(".submit");
const container = document.querySelector(".container");
const message = document.querySelector(".message");
const copyright = document.querySelector(".copy-right");
const seePortfolio = document.querySelector(".ftr-nav-link");

submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    container.style.display = "none";
    message.style.display = "block";
    copyright.style.display = "none";
    seePortfolio.classList.add("linkToBottom")
})