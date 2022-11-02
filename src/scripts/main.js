import { showSlides } from './components/slider.js';
import { showAccordion } from './components/faqs.js';
import { showTopNav } from './components/navigation.js';
import { showCards } from './components/cards.js';


//Initialise topNav
showTopNav();

//Initialise sliders
showSlides();

//Load cards with a num parameter for a mobile load. This must be a number.
showCards(3);

//Load faqs accordion, add true/false parameter, for the first item to be opened/closed
showAccordion(true);

//Reload cards on window resize
window.onresize = function(){
    const boxes = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.button');

    boxes.forEach(box => {
        box.remove();
    });

    buttons.forEach(button => {
        button.remove();
    });

    showCards(3); 
}


