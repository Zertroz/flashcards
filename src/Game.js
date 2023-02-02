const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
    this.cards = [];
    this.deck;
    this.round;
  };

  createCards(questions) {
    questions.forEach((card => {
      this.cards.push(new Card (card.id, card.question, card.answers, card.correctAnswer));
    }));
  };

  createDeck(questions) {
    this.createCards(questions);
    this.deck = new Deck (this.cards);
  };

  newRound(questions) {
    this.createDeck(questions);
    this.round = new Round (this.deck);
    this.currentRound ++
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  };

  printQuestion(round) {
      util.main(round);
  };

  start(questions) {
    this.newRound(questions);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  };

};

module.exports = Game;