const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe ('Deck', function () {

  let card1, card2, card3;
  let deck;

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
  });

  it('should contain an array of cards', function () {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });
  
  it('should be able to count the number of cards', function () {
    deck.countCards()
    
    expect(deck.count).to.equal(3)
  });

});