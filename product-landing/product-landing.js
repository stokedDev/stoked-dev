const [aboutBtn, locationsBtn, pricingBtn] = 
[
    document.querySelector('.about-btn'),
    document.querySelector('.locations-btn'),
    document.querySelector('.pricing-btn')
]

const [aboutH, locationsH, pricingH] =
[
    document.querySelector('.about-title'),
    document.querySelector('.locations-title'),
    document.querySelector('.pricing-title')
]

const [aboutS, locationsS, pricingS] = 
[
    document.querySelector('.about-us-section'),
    document.querySelector('.locations-section'),
    document.querySelector('.pricing-section')
]

const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list'); /* default nav */
const header = document.querySelector('header');
const emailForm = document.querySelector('.email-form');
const headerDiv = document.querySelector('.header');
const emailInput = document.querySelector('#email');
const emailSubmit = document.querySelector('#submit');
const emailFormMessage = document.querySelector('.email-form-message');
const closeEmailFormBtn = document.querySelector('.close-email-form');
closeEmailFormBtn.addEventListener('click', function(){
    emailForm.style.display = 'none';
},{
    passive: true
})
emailSubmit.addEventListener("click", function(){
            if(emailInput.value.includes('@')){
            emailInput.style.display = 'none';
            emailSubmit.style.display = 'none';
            emailFormMessage.textContent = 'Thanks for signing up!';
            event.preventDefault();
            }
},{
    passive: true
});

const [topBun,inBuns,bottomBun] = 
[
    document.querySelector('.top-bun'),
    document.querySelector('.in-buns'),
    document.querySelector('.bottom-bun')
]

function removeHeaderPopupClasses(){
    header.classList.remove('header-popup');
    headerDiv.classList.remove('header-div-popup'); 
}
function hamburgerBack(){
    topBun.classList.remove('topBunToX');
    inBuns.classList.remove('inBunsToX');
    bottomBun.classList.remove('bottomBunToX');
    mobileMenu.style.marginLeft = "";
    topBun.classList.add('topBunBack');
    inBuns.classList.add('inBunsBack');
    bottomBun.classList.add('bottomBunBack');
    setTimeout(() => {
    topBun.classList.remove('topBunBack');
    inBuns.classList.remove('inBunsBack');
    bottomBun.classList.remove('bottomBunBack');
    }, 501)
}

function goToSection(sectionHeader, section){
    switch (sectionHeader){
        case aboutH:
            removeHeaderPopupClasses()
            hamburgerBack()
            locationsS.style.display = "none";
            pricingS.style.display = "none";
        break;
        case locationsH:
            removeHeaderPopupClasses()
            hamburgerBack()
            aboutS.style.display = "none";
            pricingS.style.display = "none";
        break;
        case pricingH:
            removeHeaderPopupClasses()
            hamburgerBack()
            aboutS.style.display = "none";
            locationsS.style.display = "none";
    }

    if(section.style.display === "none"){
        section.style.display = "flex";
    }
    sectionHeader.scrollIntoView();
}
function activateBtn(btn, header, section){
btn.addEventListener("click", () => goToSection(header, section),{
    passive: true
});
}

mobileMenu.addEventListener("click", function(){
    if (!header.classList.contains('header-popup')){
        topBun.classList.remove('topBunBack');
        inBuns.classList.remove('inBunsBack');
        bottomBun.classList.remove('bottomBunBack');
        mobileMenu.style.marginLeft = "-18px";
        topBun.classList.add('topBunToX');
        inBuns.classList.add('inBunsToX');
        bottomBun.classList.add('bottomBunToX');
        header.classList.add('header-popup');
        headerDiv.classList.add('header-div-popup');
        
    } else {
        header.classList.remove('header-popup');
        headerDiv.classList.remove('header-div-popup');
        hamburgerBack()    
    }

},
{
    passive: true
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function isNotInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom <= 0
    );
}
let lapTopScreen = window.matchMedia("(min-width: 1024px)");

document.addEventListener('scroll', function () {
    if(isNotInViewport(pricingBtn) && !lapTopScreen.matches) mobileMenu.style.display = "flex";
    if(isInViewport(pricingBtn) &&
     !header.classList.contains('header-popup')) mobileMenu.style.display = "none";
}, {
    passive: true
});


activateBtn(aboutBtn, aboutH, aboutS);
activateBtn(locationsBtn, locationsH, locationsS);
activateBtn(pricingBtn, pricingH, pricingS);