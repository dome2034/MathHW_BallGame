var Game = require('./game');

let BallBox = [];
for(let i =0;i<8;i++){
    BallBox.push('w');
}
for(let i =0;i<12;i++){
    BallBox.push('b');
}
let RoundToPlay = 100000; //all n
let NFor2_2 = 0, NFor2_3 = 0;
let win = 0, win2_2 = 0, win2_3 = 0;

for(let i = 0; i< RoundToPlay;i++){ // loop play game
    game = new Game();
    game.setBox(BallBox);
    game.shuffleBall();
    game.pickBall();
    game.getPickedBall();
    if(game.isWin()){ // count win for 2.1
        win++;
    }
    if(game.isFirst5For2_2()){
        NFor2_2++;
        if(game.isWin()){ // count win for 2.2
            win2_2++;
        }
    }
    if(game.isFirst5For2_3()){
        NFor2_3++;
        if(game.isWin()){ // count win for 2.3
            win2_3++;
        }
    }

    game = null;
    delete game;
}

console.log("------ Result -------");
console.log("2.1 Probability is " + (win/RoundToPlay)); //probability result 2.1
console.log("2.2 Probability is " + (win2_2/NFor2_2)); //probability result 2.2
console.log("2.3 Probability is " + (win2_3/NFor2_3)); //probability result 2.3