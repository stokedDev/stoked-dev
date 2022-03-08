const submitBtn = document.querySelector(".submit");
const container = document.querySelector(".container");
const message = document.querySelector(".message");
const copyright = document.querySelector(".copy-right");

submitBtn.addEventListener('click', function(){
    event.preventDefault();
    container.style.display = "none";
    message.style.display = "block";
    copyright.style.display = "none";
})