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
    
    whatBtn.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 0;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    howBtn.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 1;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    varBtn.addEventListener('click', function(){
        hideAllSlides();
            slidePosition = 2;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    condBtn.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 3;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    domBtn.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 4;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    