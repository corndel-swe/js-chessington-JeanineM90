import Square from '../square.js'
import Piece from './piece.js'

export default class King {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {

    let location = board.findPiece(this)
    let moves = []

    if (location.row + 1 < +7 && location.col + 1 <= 7) {
      moves.push(new Square(location.row + 1, location + 1))
    }

    // same again for next squares - can we make it more efficient
    // if (location.row + 1 < +7) 
    // if (location.row - 1 >= 0) etc

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}

/*
    3) can move to adjacent squares
    4) cannot make any other moves

Similar to Bishop, but in any direction and only one square at a time 
*/