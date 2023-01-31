const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');

describe('Turn', function () {

  let turn;
  let card;

  beforeEach(function () {
    card = new Card(1, "Delicious Fruit", ['apple', 'pear', 'grape fruit'], 'apple');
    turn = new Turn('apple', card);
  });

  it('should instantiate a guess', function () {
    expect(turn.guess).to.equal('apple');
  });

  it('should instantiate a new card', function () {
    expect(turn.card).to.equal(card);
  });

  it('should return the guess and card', function () {
    expect(turn.returnGuess()).to.equal(turn.guess);
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should evaluate the guess', function () {
    expect(turn.evaluateGuess()).to.equal(true)

    turn = new Turn('pear', card);

    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should give feedback', function () {
    expect(turn.giveFeedback()).to.equal('correct!');

    turn = new Turn('pear', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});