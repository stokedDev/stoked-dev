let submitBtn = document.querySelector('#submit');
let total = document.querySelector('#total');
let totalM = document.querySelector('#total-m');
let funMoney = document.querySelector('#fun-money');
let reset = document.querySelector('#reset');
let form = document.querySelector('#form');
// have voice recognition technology for option of ease of use
function calculateBtn(event){
    event.preventDefault();
    let hourlyWage = document.querySelector('#wage-input').value;
    let weeklyWorkDays = document.querySelector('#wwd').value;
    let mle = document.querySelector('#mle-input').value;
    let workHours = document.querySelector('#work-hours').value;
    let yearlyFunnyMoney = ((hourlyWage * workHours * weeklyWorkDays) * (4.34 * 12)) - (mle * 12);
    let monthlyFunnyMoney = yearlyFunnyMoney / 12;
    yearlyFunnyMoney = yearlyFunnyMoney.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    monthlyFunnyMoney = monthlyFunnyMoney.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    total.textContent = yearlyFunnyMoney; /* yearly part of fun money results paragraph */
    totalM.textContent = monthlyFunnyMoney; /* monthly part of fun money results paragraph */
    funMoney.style.display = 'block';
    funMoney.scrollIntoView(behavior = "smooth");
}

form.addEventListener('submit', calculateBtn);