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
    this.shuffleBall = function() {
        let j, x, i;
        for (i = BallBox.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = BallBox[i];
            BallBox[i] = BallBox[j];
            BallBox[j] = x;
        }
    }
    this.pickBall = function(){
        BallPicked = BallBox.slice(9, 19);
    }
    
};

module.exports = game; 