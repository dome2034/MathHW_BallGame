var Game = require('./game');

let BallBox = [];
for(let i =0;i<8;i++){
    BallBox.push('w');
}
for(let i =0;i<12;i++){
    BallBox.push('b');
}
let RoundToPlay = 10000;
let win = 0;

for(let i = 0; i< RoundToPlay;i++){ // loop play game
    game = new Game();
    game.setBox(BallBox);
    game.shuffleBall();
    game.pickBall();
    game.getPickedBall();
    if(game.isWin()){
        win++;
    }
    console.log(win);
    game = null;
    delete game;
}

console.log("------ Result -------");
console.log("2.1 Probability is " + (win/RoundToPlay)); //probability result.
