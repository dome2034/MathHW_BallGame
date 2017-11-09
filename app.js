var Game = require('./game');

let BallBox = [];
for(let i =0;i<8;i++){
    BallBox.push('w');
}
for(let i =0;i<12;i++){
    BallBox.push('b');
}

game = new Game();
game.setBox(BallBox);
game.shuffleBall();
game.pickBall();

console.log(game.getPickedBall());

game = null;
delete game;
