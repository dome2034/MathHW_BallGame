function game() {
//----------------- properties ------------------------------
    let BallBox;
    let BallPicked;

//----------------- construct -------------------------------
    this.setBox = function(Box) {
        BallBox = Box;
    }
    this.getBox = function() {
        return BallBox;
    }
    this.getPickedBall = function() {
        return BallPicked;
    }

//-------------- Method -------------------------------------
    this.shuffleBall = function() { //shuffle ball in box.
        let j, x, i;
        for (i = BallBox.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = BallBox[i];
            BallBox[i] = BallBox[j];
            BallBox[j] = x;
        }
    }
    this.pickBall = function(){ //pick 10 ball.
        BallPicked = BallBox.slice(9, 19);
    }
    this.isWin = function(){ //check win or not.
        let j = 0;
        let Black = 0;
        let win = true;
        for(let i = 0;i< (BallPicked.length+2);i++){ // loop 12 round.
            if(i==10){ //if this is round 10 go to first ball.
                j=0;
            }
            if(BallPicked[j] == 'b'){ //if this is black, increase black.
                Black++;
            }
            else{ //if this is white, reset black.
                Black = 0;
            }
            if(Black == 3){ //if black is 3, exit loop
                win = false;
                break;
            }
            j++;
        }
        return win;
    }
};

module.exports = game; 