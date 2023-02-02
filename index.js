// This is where your project starts.
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('./src/Game')
const game = new Game()
console.log('Your project is running...');
game.start(prototypeQuestions)
