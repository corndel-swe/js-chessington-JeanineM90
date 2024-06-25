import Square from '../square.js'
import Piece from './piece.js'

export default class Rook {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    return []
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}

/*
See Bishop- it's simplified, but will still need 4 for loops 
Moves only in an invidiual direction 
*/