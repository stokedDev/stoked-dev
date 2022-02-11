        const slides = document.querySelectorAll('.carousel-item');
        let slidePosition = 0;
        function hideAllSlides(){
        for(const slide of slides){
            slide.classList.remove('carousel-item-visible') && slides.classList.add('carousel-item-hidden');
        }
        }
    
    /* nav classes buttons */
    const whatBtn = document.querySelectorAll(".whatBtn");
    const howBtn = document.querySelectorAll(".howBtn");
    const varBtn = document.querySelectorAll(".varBtn");
    const condBtn = document.querySelectorAll(".condBtn");
    const domBtn = document.querySelectorAll(".domBtn");
    /* nav classes buttons end here*/
    

    whatBtn.forEach(el =>
        el.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 0;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }))
    howBtn.forEach(el => 
        el.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 1;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }))
    varBtn.forEach(el => el.addEventListener('click', function(){
        hideAllSlides();
            slidePosition = 2;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }))
    condBtn.forEach(el => el.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 3;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }))
    domBtn.forEach(el => el.addEventListener('click', function(){
        hideAllSlides();
        slidePosition = 4;
        slides[slidePosition].classList.add('carousel-item-visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }))
    