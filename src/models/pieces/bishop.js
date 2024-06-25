import Square from '../square.js'
import Piece from './piece.js'

export default class Bishop {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this) // taken from pawn 
    let moves = []

    //return [
    //newSquare(location.row + 1, location.col + 1) // would need multiple for -1, up to 8 etc 
    //]

    for (let i = 1; i <= 7; i++) { // can't take more than 7 moves in one go (as in over 7 rows/ columns)
      if (location.row + i <= 7 && location.col + i <= 7) { // makes sure it doesn't go off the board 
        moves.push(new Square(location.row + i, location.col + i))
      }
    }

    // can be used for othe directions:

    for (let i = 1; i <= 7; i++) {
      if (location.row - i >= 0 && location.col + i <= 7) {
        moves.push(new Square(location.row - i, location.col + i))
      }
    }

    for (let i = 1; i <= 7; i++) {
      if (location.row + i <= 7 && location.col - i >= 0) {
        moves.push(new Square(location.row + i, location.col - i))
      }
    }

    for (let i = 1; i <= 7; i++) {
      if (location.row - i >= 0 && location.col - i >= 0) {
        moves.push(new Square(location.row - i, location.col - i))
      }
    }

    return moves

  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}


/*
To do:

    1) can move diagonally
    2) cannot make any other moves

    --

return squares on board that it should be able to move to 
(an array [ , , , ])
e.g (Tims initial example):
const currentSquare = board.findPiece(this)
return [
newSquare(currentSquare.row+1, currentSquare.col+1)
]

use for loops (four)

--

Moving across the board, can decrease row and column co-ordinates by 1 for example 
*/