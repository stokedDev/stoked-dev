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


function goToSection(header, section){
    switch (header){
        case aboutH:
            locationsS.style.display = "none";
            pricingS.style.display = "none";
        break;
        case locationsH:
            aboutS.style.display = "none";
            pricingS.style.display = "none";
        break;
        case pricingH:
            aboutS.style.display = "none";
            locationsS.style.display = "none";
    }

    if(section.style.display === "none"){
        section.style.display = "flex";
    }
    header.scrollIntoView();
}
function activateBtn(btn, header, section){
btn.addEventListener("click", () => goToSection(header, section));
}


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

document.addEventListener('scroll', function () {
    if(!isInViewport(pricingBtn)) mobileMenu.style.display = "flex";
    if(isInViewport(pricingBtn)) mobileMenu.style.display = "none";
}, {
    passive: true
});


activateBtn(aboutBtn, aboutH, aboutS);
activateBtn(locationsBtn, locationsH, locationsS);
activateBtn(pricingBtn, pricingH, pricingS);