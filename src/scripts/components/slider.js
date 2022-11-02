let slideIndex = 0;

export const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName('slideshow__item');
    let dots = document.getElementsByClassName('dot__item');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) slideIndex = 1;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
        dots[i].onclick = function (e) {
            slideIndex = e.target.getAttribute('dotNum') - 1;
            showSlides();
            clearTimeout(showSlidesTimer);
        };
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

    const showSlidesTimer = setTimeout(showSlides, 4000);
    showSlidesTimer;
}
