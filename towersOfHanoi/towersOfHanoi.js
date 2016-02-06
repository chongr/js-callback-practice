var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[], [1,2,3], []];
}

HanoiGame.prototype.promptMove = function(completionCallBack) {
  this.print();

  var that = this;
  reader.question("which stack would you like to move from",
  function(startIndex){
    reader.question("which stack would you like to put it",
    function(endIndex){
      if (that.move(startIndex, endIndex)) {
        if (that.isWon()) {
          console.log("Grtz you win");
          completionCallBack();
        } else {
          that.run(completionCallBack);
        }
      } else {
        console.log("Invalid Move Please renenter");
        that.promptMove(completionCallBack);
      }
    });
  });
};


HanoiGame.prototype.isValidMove = function (startIndex, endIndex) {
  var startStackLength = this.stacks[startIndex].length;
  if (startStackLength === 0) {
    return false;
  }

  var discToMove = this.stacks[startIndex][0];
  if (this.stacks[endIndex].length === 0) {
    return true;
  }
  var endDisc = this.stacks[endIndex][0];
  if (discToMove < endDisc) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function (startIndex, endIndex) {
  if (this.isValidMove(startIndex, endIndex)) {
    var disk = this.stacks[startIndex].shift();
    this.stacks[endIndex].unshift(disk);
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.isWon = function () {
  if (JSON.stringify(this.stacks[1]) === "[1,2,3]"
  || JSON.stringify(this.stacks[2]) === "[1,2,3]" ){
    return true;
  }
  return false;
};

HanoiGame.prototype.run = function (completionCallBack) {
  this.promptMove(completionCallBack);
};



var game = new HanoiGame();
game.run(function() {
  console.log("game over");
});
