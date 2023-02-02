const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn;
    this.turnCount = 0;
    this.currentCard = this.deck.cards[0];
    this.correct;
    this.incorrectGuesses = []
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    this.turnCount ++;
    this.currentCard = this.deck.cards[this.turnCount - 1];
    this.turn.evaluateGuess();
    this.correct = this.turn.giveFeedback();
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
  };

  calculatePercentageCorrect() {
    let percentage = 100 - Math.round((this.incorrectGuesses.length / this.deck.cards.length) * 100);
    return percentage;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`)
    return 'end'
  }
};

module.exports = Round;