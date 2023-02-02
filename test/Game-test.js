const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const Game = require('../src/Game.js');

describe('Game class', function() {

  let card1, card2, card3;
  let deck;
  let round;
  let game;

  this.beforeEach(function () {
    game = new Game();
  })

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(0);
  })

  it('should create cards', function() {
    game.createCards(prototypeQuestions);

    expect(game.cards).to.deep.equal(prototypeQuestions);
  })

  it('should create a deck', function () {
    game.createDeck(prototypeQuestions);

    expect(game.deck).to.be.instanceOf(Deck);
    expect(game.deck.count).to.equal(30);
  });

  it('should create a new round', function () {
    game.newRound(prototypeQuestions);

    console.log(game.deck)

    expect(game.round).to.be.instanceOf(Round);
    expect(game.currentRound).to.equal(1);
  });

});