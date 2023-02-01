class Deck {
  constructor (cards) {
    this.cards = cards;
    this.count = 0;
  };

  countCards() {
    this.cards.forEach(() => {
      this.count++
    });
  };

}

module.exports = Deck;