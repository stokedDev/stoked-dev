const submitBtn = document.querySelector("#submit");
const container = document.querySelector(".container")
const message = document.querySelector(".message")


submitBtn.addEventListener('click', function(){
    container.style.display = none;
    message.style.display = block;
})