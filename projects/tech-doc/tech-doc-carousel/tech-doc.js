        const slides = document.querySelectorAll('.carousel-item');
        let slidePosition = 0;
        function hideAllSlides(){
        for(const slide of slides){
            slide.classList.remove('carousel-item-visible') && slides.classList.add('carousel-item-hidden');
        }
        }
    
    /* nav classes buttons */
    const whatBtn = document.querySelector(".whatBtn");
    const howBtn = document.querySelector(".howBtn");
    const varBtn = document.querySelector(".varBtn");
    const condBtn = document.querySelector(".condBtn");
    const domBtn = document.querySelector(".domBtn");
    /* nav classes buttons end here*/

    const [ sH1, sH2, sH3, sH4, sH5 ] = [
        document.querySelector('.section-header-1'), document.querySelector('.section-header-2'),
        document.querySelector('.section-header-3'), document.querySelector('.section-header-4'),
        document.querySelector('.section-header-5')];
    const header = document.querySelector('header');
    const headerDiv = document.querySelector('.header');
    const [topBun,inBuns,bottomBun] = 
[
    document.querySelector('.top-bun'),
    document.querySelector('.in-buns'),
    document.querySelector('.bottom-bun')
]
const mobileMenu = document.querySelector('.mobile-menu');
const mainDoc = document.querySelector('.main-doc');

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
    
function goToSection(sectionHeader, slidePosition){
    switch (sectionHeader){
        case sH1:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
        break;
        case sH2:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
        break;
        case sH3:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
        break;
        case sH4:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
        break;
        case sH5:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    mainDoc.scrollIntoView();
}
function activateBtn(btn, sectionHeader, slidePosition){
    btn.addEventListener("click", () => goToSection(sectionHeader, slidePosition),{
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
    
    },{
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
        if(isNotInViewport(domBtn) && !lapTopScreen.matches) mobileMenu.style.display = "flex";
        if(isInViewport(domBtn) &&
         !header.classList.contains('header-popup')) mobileMenu.style.display = "none";
    }, {
        passive: true
    });

    function activateBtns(btns, sHs, nums){
        for(let b = 0; b < btns.length; b++){
                    activateBtn(btns[b], sHs[b], nums[b]);
        }
    }
    activateBtns([whatBtn,howBtn,varBtn,condBtn,domBtn], [sH1,sH2,sH3,sH4,sH5], [0,1,2,3,4]);