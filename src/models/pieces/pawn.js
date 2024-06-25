import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this) // finds where we're starting from 

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
      // white pawns can move "up" by one
      moves.push(new Square(location.row + 1, location.col))
    } else {
      // black pawns can move "down" by one
      moves.push(new Square(location.row - 1, location.col))
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}

/*
getAvailableMoves method: function has been partially implemented so they can take one step forward. (it returns an array of `Square`.)

--

  ✔ can move one square up
  7) can move one or two squares up on their first move: need to put a limit on how far they can move; the first move has the option of two squares 
 
If the pawn is on the first row, we know it can move two 

*/