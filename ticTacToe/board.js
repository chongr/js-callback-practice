function Board(){
  this.board = [['_','_','_'], ['_','_','_'], ['_','_','_']];
}

Board.prototype.won = function() {
  //check all rows
  for(var i = 0; i < 3; i++) {
    if (this.board[i][0] === this.board[i][1]
      && this.board[i][1] === this.board[i][2]
      && this.board[i][0] !== '_') {
      return true;
    }
  }

};

Board.prototype.empty = function(pos) {
  var row = pos[0];
  var col = pos[1];

  if (this.board[row][col] === '_') {
    return true;
  }

  return false;
};

Board.prototype.placeMark = function(pos, mark) {
  var row = pos[0];
  var col = pos[1];

  this.board[row][col] = mark;
};
