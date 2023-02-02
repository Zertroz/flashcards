const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');

describe ('Round', function () {

  let card1, card2, card3;
  let deck;
  let round;

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

    round.returnCurrentCard()
    round.takeTurn('sea otter')
  });
  
  it('should return the first card in the deck', function () {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should be able to create an instance of turn', function () {
    expect(round.turn).to.be.an.instanceOf(Turn);
  });

  it('should update turn count', function () {
    expect(round.turnCount).to.equal(1);
  });

  it('should change the current card', function () {
    round.takeTurn('gallbladder');
    expect(round.currentCard).to.equal(card2);
  });

  it('should evaluate the guess', function () {
    expect(round.correct).to.equal('correct!');

    round.takeTurn('spleen');

    expect(round.correct).to.equal('incorrect!');
  });

  it('should store incorrect guesses', function () {
    round.takeTurn('spleen');

    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should calculate percentage correct', function () {
    expect(round.calculatePercentageCorrect()).to.equal(100);

    round.takeTurn('spleen');

    expect(round.calculatePercentageCorrect()).to.equal(67);
  });

  it('should log the end of the round to the console', function () {
    expect(round.endRound()).to.equal('end')
  });
});