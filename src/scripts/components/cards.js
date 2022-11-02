import Data from '../../assets/data.json';

export const showCards = (cardLoad) => {
  if (typeof cardLoad === 'number') {
    let cardStart = 0;
    let cardsTotal = cardLoad;

    if (document.documentElement.clientWidth > 768) {
      loadCards(cardStart, Data.cards.length);
    } else {
      loadCards(cardStart, cardLoad);

      let loadButtonHtml = `<div class="button"><button id="loadmore">Load more...</button></div>`;
      document.getElementById('cards').insertAdjacentHTML('afterend', loadButtonHtml);

      document.getElementById('loadmore').addEventListener('click', function () {

        cardStart += cardLoad;
        cardsTotal += cardLoad;

        if (cardsTotal >= Data.cards.length) {
          cardsTotal = Data.cards.length;
          this.innerHTML = 'No more results';
          this.classList.add('disabled');
          loadCards(cardStart, cardsTotal);
          return;
        }

        loadCards(cardStart, cardsTotal);
      });
    }
  } else {
    console.log('Please provide a number for an initial card load on mobile.');
  }
};

const loadCards = (n, length) => {
  for (let i = n; i < length; i++) {
    let cards = `<div class="card fade"><img src="${Data.cards[i].image
      }"><p class="card__title">${Data.cards[i].name.toUpperCase()}</p></div>`;
    document.getElementById('cards').insertAdjacentHTML('beforeend', cards);
  }
};
