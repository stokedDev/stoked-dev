const slides = document.querySelectorAll('.carousel-item');
let slidePosition = 0;
/* sections ( about page, projects page, contact page) starts here */
const [section1, section2, section3] = [
    document.querySelector('.welcome-section'),
    document.querySelector('.projects-section'),
    document.querySelector('.contact-section')];
/* sections ( about page, projects page, contact page) ends here */
function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove('carousel-item-visible') && slide.classList.add('carousel-item-hidden');
    }
    section1.style.display = "none";
}

/* nav div classes buttons */
const aboutBtn = document.querySelector(".aboutBtn");
const projectsBtn = document.querySelectorAll(".projectsBtn");
const contactBtn = document.querySelector(".contactBtn");
/* nav div classes buttons end here*/

/* sI means section intro */
const [ sI1, sI2, sI3 ] = [document.querySelector('h1'), document.querySelector('.projects-title'),
document.querySelector('.connect-title')];

function createURL(page){
    const currentURL = '' + document.URL;
    const [aboutInCurrentURL, projectsInCurrentURL, connectInCurrentURL, comInCurrentURL, numInCurrentURL] = 
    [/about/.test(currentURL),/projects/.test(currentURL),/connect/.test(currentURL),/com/.test(currentURL),/[0-9]/.test(currentURL)];
    function about(){
        if(comInCurrentURL && !aboutInCurrentURL && !projectsInCurrentURL && !connectInCurrentURL){
            history.pushState({page: page}, 'stokedDev', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'stokedDev';
        } else if(comInCurrentURL){
            history.pushState({page: page}, 'About stokedDev', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'About stokedDev';
        } else if(numInCurrentURL && !aboutInCurrentURL && !projectsInCurrentURL && !connectInCurrentURL){
            history.pushState({page: page}, 'stokedDev', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'stokedDev';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'About stokedDev', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'About stokedDev';
        }
    }
    function projects(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'stokedDev Projects', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'stokedDev Projects';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'stokedDev Projects', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'stokedDev Projects';
        }
    }
    function connect(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'Connect with stokedDev', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'Connect with stokedDev';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'Connect with stokedDev', currentURL.replace(/#connect|#about|#projects\b|$/, `#${page}`));
            document.querySelector('title').textContent = 'Connect with stokedDev';
        }
    }
return page === 'about'? about(): page === 'projects'? projects(): page === 'connect'? connect(): null;
}

function handleURL(){
    const currentURL = document.URL;
    const [aboutInCurrentURL, projectsInCurrentURL, connectInCurrentURL] = 
    [/about/.test(currentURL),/projects/.test(currentURL),/connect/.test(currentURL)];
    if(aboutInCurrentURL){
        console.log('aboutInCurrentURL');
        goToSectionWithoutUsingMobileMenu(sI1, 0);
        createURL('about');
    }
    if(projectsInCurrentURL){
        console.log('projectsInCurrentURL');
        goToSectionWithoutUsingMobileMenu(sI2, 1);
        createURL('projects');
    }
    if(connectInCurrentURL){
        console.log('contactInCurrentURL');
        goToSectionWithoutUsingMobileMenu(sI3, 2);
        createURL('connect');
    }
    return aboutInCurrentURL? goToSectionWithoutUsingMobileMenu(sI1, 0): 
    projectsInCurrentURL? goToSectionWithoutUsingMobileMenu(sI2, 1):
    connectInCurrentURL? goToSectionWithoutUsingMobileMenu(sI3, 2): null;
}   

const header = document.querySelector('header');
const headerDiv = document.querySelector('.header');
const [topBun,inBuns,bottomBun] = 
[
    document.querySelector('.top-bun'),
    document.querySelector('.in-buns'),
    document.querySelector('.bottom-bun')
];
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');

function hamburgerBack(){
    topBun.classList.remove('topBunToX');
    inBuns.classList.remove('inBunsToX');
    bottomBun.classList.remove('bottomBunToX');
    mobileMenu.style.backgroundColor = "rgba(0, 0, 0, 0.441)";
    topBun.classList.add('topBunBack');
    inBuns.classList.add('inBunsBack');
    bottomBun.classList.add('bottomBunBack');
    navList.style.marginTop = "";
    navList.style.marginLeft = "";
    setTimeout(() => {
    topBun.classList.remove('topBunBack');
    inBuns.classList.remove('inBunsBack');
    bottomBun.classList.remove('bottomBunBack');
    }, 501)
}

function removeHeaderPopupClasses(){
    header.classList.remove('header-popup');
    headerDiv.classList.remove('header-div-popup'); 
}
function goToSection(sectionIntro, slidePosition){
    switch (sectionIntro){
        case sI1:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            section1.style.display = "flex";
            createURL('about');
        break;
        case sI2:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('projects');
        break;
        case sI3:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('connect');
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    sectionIntro.scrollIntoView();
}
function goToSectionWithoutUsingMobileMenu(sectionIntro, slidePosition){
    switch (sectionIntro){
        case sI1:
            hideAllSlides();
            section1.style.display = "flex";
            createURL('about');
        break;
        case sI2:
            hideAllSlides();
            createURL('projects');
        break;
        case sI3:
            hideAllSlides();
            createURL('connect');
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    sectionIntro.scrollIntoView();
}
function activateBtn(btn, sectionIntro, slidePosition){
    btn.addEventListener("click", () => {
        if(!header.classList.contains('header-popup')){
            goToSectionWithoutUsingMobileMenu(sectionIntro, slidePosition)
        } else {
            goToSection(sectionIntro, slidePosition)
        }
    });
    }
    mobileMenu.addEventListener("click", function(){
        if (!header.classList.contains('header-popup')){
            topBun.classList.remove('topBunBack');
            inBuns.classList.remove('inBunsBack');
            bottomBun.classList.remove('bottomBunBack');
            mobileMenu.style.backgroundColor = "rgba(0,0,0,0)";
            topBun.classList.add('topBunToX');
            inBuns.classList.add('inBunsToX');
            bottomBun.classList.add('bottomBunToX');
            header.classList.add('header-popup');
            headerDiv.classList.add('header-div-popup');
            navList.style.marginTop = "46px";
            navList.style.marginLeft = "0";
        } else {
            header.classList.remove('header-popup');
            headerDiv.classList.remove('header-div-popup');
            hamburgerBack()   
        }
    
    });
 
    function isNotInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom <= 0
        );
    }
    let lapTopScreen = window.matchMedia("(min-width: 1024px)");

    document.addEventListener('scroll', function () {
        if(isNotInViewport(contactBtn) && !lapTopScreen.matches) mobileMenu.style.display = "flex";
        if(!isNotInViewport(contactBtn) &&
         !header.classList.contains('header-popup')) mobileMenu.style.display = "none";
    }, {
        passive: true
    });


    activateBtn(aboutBtn, sI1, 0);
    activateBtn(projectsBtn[0],sI2, 1); /* nav bar go-to-projects button */
    activateBtn(projectsBtn[1],sI2, 1); /* welcome section button with projects destination */
    activateBtn(contactBtn, sI3, 2);
    handleURL();
    document.querySelector('.back-to-top-btn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));