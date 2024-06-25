import Square from '../square.js'
import Piece from './piece.js'

export default class Knight {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {

    let location = board.findPiece(this)
    let moves = []

    if (location.row + 1 < +7 && location.col + 1 <= 7) {
      moves.push(new Square(location.row + 1, location + 1))
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}

/*
L shape, 2 then 1 (2 left 1 up etc)
Use King 
*/