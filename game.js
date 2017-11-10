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
        console.log(BallPicked);
    }
    this.isWin = function(){ //check win or not.
        let j = 0;
        let Black = 0;
        let Win = true;
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
                Win = false;
                break;
            }
            j++;
        }
        return Win;
    }
    this.isFirst5For2_2 = function() { //check condition of 2.2
        let Black = 0;
        let Pass = true;
        let First5 = BallPicked.slice(0, 5);
        console.log(First5);
        for(let i = 0;i<First5.length;i++){
            if(First5[i] == 'b'){ //if this is black, increase black.
                Black++;
            }
            else{ //if this is white, reset black.
                Black = 0;
            }
            if(Black == 3){ //if black is 3, exit loop
                Pass = false;
                break;
            }
        }
        return Pass;
    }
    this.isFirst5For2_3 = function() { //check condition of 2.3
        let White = 0;
        let Pass = false;
        let First5 = BallPicked.slice(0, 5);
        console.log(First5);
        for(let i = 0;i<First5.length;i++){
            if(First5[i] == 'w'){ //if this is white, increase white.
                White++;
            }
            else{ //if this is black, reset white.
                White = 0;
            }
            if(White == 5){ //if white is 5, exit loop
                Pass = true;
                break;
            }
        }
        return Pass;
    }
};

module.exports = game; 