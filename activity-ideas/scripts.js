const idea = document.querySelector('.idea');
const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    fetch('http://www.boredapi.com/api/activity/')
.then(response => response.json())
.then(data => {
    idea.textContent = data.activity;
    idea.style.animationName = 'growShrink';   
})
.catch(error => {
    idea.textContent = `${error}, http fetch url not accessible directly by https frontend`;
    idea.style.animationName = 'growShrink'; 
});
});

btn.addEventListener('click', function(){
    btn.style.animationName = 'shadowFade';
});
btn.addEventListener('animationend', function(){
    btn.style.animationName = '';
    idea.style.animationName = '';
});