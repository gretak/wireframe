import Data from '../../assets/data.json';

export const showAccordion = (firstOpened) => {
  addAccordionList();

  const accordion = document.getElementsByClassName('accordion');

  let i;
  for (i = 0; i < accordion.length; i++) {
    if (firstOpened) accordion[0].classList.add('active');

    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
};

const addAccordionList = () => {
  for (let i = 0; i < Data.faqs.length; i++) {
    let faq = `<button class="accordion">${Data.faqs[i].title.toUpperCase()}</button><div class="panel"><p>${Data.faqs[i].body}</p></div>`;
    document.getElementById('faqs').innerHTML += faq;
  }
}


