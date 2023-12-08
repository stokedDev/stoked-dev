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
function hideOtherSections(section){
    section.style.display = 'flex';
    const sectionArr = [aboutS, locationsS, pricingS];
    for(let i = 0; i < sectionArr.length; i++){
        if(sectionArr[i] !== section){
            sectionArr[i].style.display = 'none';
        }
    }
}
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('header');
const emailForm = document.querySelector('.email-form');
const headerDiv = document.querySelector('.header');
let isMobileMenuOpen = false;
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
    passive: false
});

const [topBun,inBuns,bottomBun] = 
[
    document.querySelector('.top-bun'),
    document.querySelector('.in-buns'),
    document.querySelector('.bottom-bun')
]
    let currentURL = '' + document.URL;

    const [aboutInCurrentURL, 
    locationsInCurrentURL, 
    pricingInCurrentURL] = 
    [/about/.test(currentURL),
    /locations/.test(currentURL),
    /pricing/.test(currentURL)]; 

    const webpageRegex = /#about|#locations|#pricing\b|$/;


    function home(){
            document.querySelector('title').textContent = 'Surf Pools USA';
    }
    function about(){
            history.pushState({page: 'about'}, 'About Us - Surf Pools USA', currentURL.replace(webpageRegex, '#about'));
            document.querySelector('title').textContent = 'About Us - Surf Pools USA';
    }
    function locations(){
            history.pushState({page: 'locations'}, 'Locations - Surf Pools USA', currentURL.replace(webpageRegex, '#locations'));
            document.querySelector('title').textContent = 'Locations - Surf Pools USA';
    }
    function pricing(){
            history.pushState({page: 'pricing'}, 'Pricing - Surf Pools USA', currentURL.replace(webpageRegex, '#pricing'));
            document.querySelector('title').textContent = 'Pricing - Surf Pools USA';
    }
    handleURL();
function handleURL(){
        if(!aboutInCurrentURL && !locationsInCurrentURL && !pricingInCurrentURL){
            home();
        }  
    if(aboutInCurrentURL){
        goToSection(aboutH, aboutS, 'about');
    }
    if(locationsInCurrentURL){
        goToSection(locationsH, locationsS, 'locations');
    }
    if(pricingInCurrentURL){
        goToSection(pricingH, pricingS, 'pricing');
    }
}   

function removeHeaderPopUpClasses(){
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
    isMobileMenuOpen = false;
    setTimeout(() => {
    topBun.classList.remove('topBunBack');
    inBuns.classList.remove('inBunsBack');
    bottomBun.classList.remove('bottomBunBack');
    }, 501)
}

function goToSection(sectionHeader, section, page){
    function closePopUpMobileMenu(){
        removeHeaderPopUpClasses();
        hamburgerBack();
    }
    if(isMobileMenuOpen){
        closePopUpMobileMenu();
    }

            hideOtherSections(section);
            if(page === 'about'){
                about();
            } else if(page === 'locations'){
                locations();
            } else if(page === 'pricing'){
                pricing();
            }
            sectionHeader.scrollIntoView();
}

function activateBtn(btn, header, section, page,){
btn.addEventListener("click", () => goToSection(header, section, page),{
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
        isMobileMenuOpen = true;
    } else {
        header.classList.remove('header-popup');
        headerDiv.classList.remove('header-div-popup');
        hamburgerBack();
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

activateBtn(aboutBtn, aboutH, aboutS, 'about');
activateBtn(locationsBtn, locationsH, locationsS, 'locations');
activateBtn(pricingBtn, pricingH, pricingS, 'pricing');
document.querySelector('.back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));