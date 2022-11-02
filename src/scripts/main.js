import { showSlides } from './components/slider.js';
import { showAccordion } from './components/faqs.js';
import { showTopNav } from './components/navigation.js';
import { showCards } from './components/cards.js';


//Initialise topNav
showTopNav();

//Initialise slider
showSlides();

//Load cards with a num parameter for mobile load. This must be number.
showCards(3);

//Load faqs accordion, add true/false parameter, for the first item to be opened/closed
showAccordion(true);


