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
        document.querySelector('.section-1-title'), document.querySelector('.section-2-title'),
        document.querySelector('.section-3-title'), document.querySelector('.section-4-title'),
        document.querySelector('.section-5-title')];

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

function createURL(page = 'a-little-about-js'){
    let currentURL = '' + document.URL;
    const [whatInCurrentURL, 
    howInCurrentURL, 
    varInCurrentURL, 
    condInCurrentURL, 
    domInCurrentURL, 
    comInCurrentURL, 
    numInCurrentURL] = 
    [/what/.test(currentURL),
    /how/.test(currentURL),
    /var/.test(currentURL), 
    /cond/.test(currentURL), 
    /dom/.test(currentURL),
    /com/.test(currentURL),
    /[0-9]/.test(currentURL)]; 
    const webpageRegex = /#what-is-javascript|#how-to-learn-js|#variables|#conditionals|#dom-manipulation\b|$/;
    function findCurrentURL(){
        let isSpecificPage = false;
        const isSpecificPage_arr = [whatInCurrentURL, 
        howInCurrentURL, 
        varInCurrentURL, 
        condInCurrentURL, 
        domInCurrentURL];
        for(let i = 0; i < isSpecificPage_arr.length; i++){
            if(isSpecificPage_arr[i]){
                isSpecificPage = true;
            }
        }
        return isSpecificPage? isSpecificPage: false;
    }
    function home(){
        if(comInCurrentURL && !findCurrentURL()){
            history.pushState({page: page}, 'A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'A Little About JS';
        } else if(numInCurrentURL && !findCurrentURL()){
            history.pushState({page: page}, 'A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'A Little About JS';
        }
    }
    function what(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'What Is JavaScript - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'What Is JavaScript - A Little About JS';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'What Is JavaScript - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'What Is JavaScript - A Little About JS';
        }
    }
    function how(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'How To Learn JS - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'How To Learn JS - A Little About JS';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'How To Learn JS - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'How To Learn JS - A Little About JS';
        }
    }
    function vari(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'Variables - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'Variables - A Little About JS';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'Variables - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'Variables - A Little About JS';
        }
    }
    function cond(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'Conditionals - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'Conditionals - A Little About JS';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'Conditionals - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'Conditionals - A Little About JS';
        }
    }
    function dom(){
        if(comInCurrentURL){
            history.pushState({page: page}, 'DOM Manipulation - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'DOM Manipulation - A Little About JS';
        } else if(numInCurrentURL){
            history.pushState({page: page}, 'DOM Manipulation - A Little About JS', currentURL.replace(webpageRegex, `#${page}`));
            document.querySelector('title').textContent = 'DOM Manipulation - A Little About JS';
        }
    }
       page === 'a-little-about-js'? home(): page === 'what-is-javascript'? what(): page === 'how-to-learn-js'? how(): page === 'variables'? vari(): page === 'conditionals'? cond(): page === 'dom-manipulation'? dom(): null;
}

function handleURL(){
    let currentURL = '' + document.URL;
    const [whatInCurrentURL, 
        howInCurrentURL, 
        varInCurrentURL, 
        condInCurrentURL, 
        domInCurrentURL] = 
        [/what/.test(currentURL),
        /how/.test(currentURL),
        /var/.test(currentURL), 
        /cond/.test(currentURL), 
        /dom/.test(currentURL)];
    if(whatInCurrentURL){
        goToSectionWithoutUsingMobileMenu(sH1, 0);
        createURL('what-is-javascript');
    }
    if(howInCurrentURL){
        goToSectionWithoutUsingMobileMenu(sH2, 1);
        createURL('how-to-learn-js');
    }
    if(varInCurrentURL){
        goToSectionWithoutUsingMobileMenu(sH3, 2);
        createURL('variables');
    }
    if(condInCurrentURL){
        goToSectionWithoutUsingMobileMenu(sH4, 3);
        createURL('conditionals');
    }
    if(domInCurrentURL){
        goToSectionWithoutUsingMobileMenu(sH5, 4);
        createURL('dom-manipulation');
    }
}   
function removeHeaderPopupClasses(){
    header.classList.remove('header-popup');
    headerDiv.classList.remove('header-div-popup'); 
}
function hamburgerBack(){
    document.querySelector('.disclaimer').style.display = 'flex'; 
    topBun.classList.remove('topBunToX');
    inBuns.classList.remove('inBunsToX');
    bottomBun.classList.remove('bottomBunToX');
    mobileMenu.style.marginLeft = "";
    topBun.classList.add('topBunBack');
    inBuns.classList.add('inBunsBack');
    bottomBun.classList.add('bottomBunBack');
    mobileMenu.style.background = 'rgba(0, 0, 0, 0.441)';
    setTimeout(() => {
    topBun.classList.remove('topBunBack');
    inBuns.classList.remove('inBunsBack');
    bottomBun.classList.remove('bottomBunBack');
    }, 501);
}
    
function goToSection(sectionHeader, slidePosition){
    switch (sectionHeader){
        case sH1:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('what-is-javascript');
        break;
        case sH2:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('how-to-learn-js');
        break;
        case sH3:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('variables');
        break;
        case sH4:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('conditionals');
        break;
        case sH5:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
            createURL('dom-manipulation');
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    mainDoc.scrollIntoView();
}
function goToSectionWithoutUsingMobileMenu(sectionIntro, slidePosition){
            hideAllSlides();
            slides[slidePosition].classList.add('carousel-item-visible');
            sectionIntro.scrollIntoView();
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
            document.querySelector('.disclaimer').style.display = 'none';
            mobileMenu.style.background = 'rgba(0,0,0,0)';
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
    handleURL();
    activateBtns([whatBtn,howBtn,varBtn,condBtn,domBtn], [sH1,sH2,sH3,sH4,sH5], [0,1,2,3,4]);