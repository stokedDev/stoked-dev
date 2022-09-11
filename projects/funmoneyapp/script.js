let submitBtn = document.querySelector('#submit')
let total = document.querySelector('#total')
let totalM = document.querySelector('#total-m')
let p = document.querySelector('#p')
let reset = document.querySelector('#reset')
let form = document.querySelector('#form')
// have voice recognition technology for option of ease of use
function calculateBtn(event){
    event.preventDefault()
    let hourlyWage = document.querySelector('#wage-input').value
    let weeklyWorkDays = document.querySelector('#wwd').value
    let mle = document.querySelector('#mle-input').value
    let workHours = document.querySelector('#work-hours').value
    let yearlyFunnyMoney = ((hourlyWage * workHours * weeklyWorkDays) * (4.29 * 12)) - (mle * 12)
    let monthlyFunnyMoney = yearlyFunnyMoney / 12
yearlyFunnyMoney = yearlyFunnyMoney.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
monthlyFunnyMoney = monthlyFunnyMoney.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    total.textContent = yearlyFunnyMoney
    totalM.textContent = monthlyFunnyMoney
    p.style.display = 'block'
    
}

form.addEventListener('submit', calculateBtn)