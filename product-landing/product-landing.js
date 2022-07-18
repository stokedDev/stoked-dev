const [aboutBtn, locationsBtn, pricingBtn] = 
[
    document.querySelector('.about'),
    document.querySelector('.locations'),
    document.querySelector('.pricing')
]

const [aboutH, locationsH, pricingH] =
[
    document.querySelector('.about-title'),
    document.querySelector('.locations-title'),
    document.querySelector('.pricing-title')
]

function goToSection(header){
    header.scrollIntoView();
}
function activateBtn(btn, header){
btn.addEventListener("click", () => goToSection(header));
}
activateBtn(aboutBtn, aboutH);
activateBtn(locationsBtn, locationsH);
activateBtn(pricingBtn, pricingH);

