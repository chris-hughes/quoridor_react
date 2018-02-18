export const getLegalMoves = (state) => {
  const squares = state.squares.slice();
  const walls = state.walls.slice();
  const cell = state.blackIsNext ?
    squares.indexOf("♟") : squares.indexOf("♙")
  const otherCell = state.blackIsNext ?
      squares.indexOf("♙") : squares.indexOf("♟")

  let legalMoves=[]
  // you're on the left hand side
  if (cell % 34 === 0){
    // top left cell
    if (cell===0){
      if (!walls.includes(1)){
        if (otherCell===2 && !walls.includes(3))
          legalMoves.push(4)
        else if (otherCell!==2)
          legalMoves.push(2)
      }
      if (!walls.includes(17)){
        if (otherCell===34 && !walls.includes(51))
          legalMoves.push(68)
        else if (otherCell!==34)
          legalMoves.push(34)
      }
    }
    // bottom left cell
    else if (cell===272){
      if (!walls.includes(255)){
        if (otherCell===238 && !walls.includes(221))
          legalMoves.push(204)
        else if (otherCell!==238)
          legalMoves.push(238)
      }
      if (!walls.includes(273)){
        if (otherCell===274 && !walls.includes(275))
          legalMoves.push(276)
        else if (otherCell!==274)
          legalMoves.push(274)
      }
    }
    // any other left
    else {
      if (!walls.includes(cell+1)){
        if (otherCell===cell+2 && !walls.includes(cell+3))
          legalMoves.push(cell+4)
        else if (otherCell!==cell+2)
          legalMoves.push(cell+2)
      }
      if (!walls.includes(cell-17)){
        if (otherCell===cell-34 && otherCell>16 && !walls.includes(cell-51))
          legalMoves.push(cell-68)
        else if (otherCell!==cell-34)
          legalMoves.push(cell-34)
      }
      if (!walls.includes(cell+17)){
        if (otherCell===cell+34 && otherCell<272 && !walls.includes(cell+51))
          legalMoves.push(cell+68)
        else if (otherCell!==cell+34)
          legalMoves.push(cell+34)
      }
    }
  }
  // you're on the right hand side
  else if ((cell-16) % 34 === 0){
    // top right cell
    if (cell===16){
      if (!walls.includes(15)){
        if (otherCell===14 && !walls.includes(13))
          legalMoves.push(12)
        else if (otherCell!==14)
          legalMoves.push(14)
      }
      if (!walls.includes(33)){
        if (otherCell===50 && !walls.includes(67))
          legalMoves.push(84)
        else if (otherCell!==50)
          legalMoves.push(50)
      }
    }
    // bottom right cell
    else if (cell===288){
      if (!walls.includes(287)){
        if (otherCell===286 && !walls.includes(285))
          legalMoves.push(284)
        else if (otherCell!==286)
          legalMoves.push(286)
      }
      if (!walls.includes(271)){
        if (otherCell===254 && !walls.includes(237))
          legalMoves.push(220)
        else if (otherCell!==254)
          legalMoves.push(254)
      }
    }
    // any other right
    else {
      if (!walls.includes(cell-1)){
        if (otherCell===cell-2 && !walls.includes(cell-3))
          legalMoves.push(cell-4)
        else if (otherCell!==cell-2)
          legalMoves.push(cell-2)
      }
      if (!walls.includes(cell-17)){
        if (otherCell===cell-34 && otherCell>16 && !walls.includes(cell-51))
          legalMoves.push(cell-68)
        else if (otherCell!==cell-34)
          legalMoves.push(cell-34)
      }
      if (!walls.includes(cell+17)){
        if (otherCell===cell+34 && otherCell<272 && !walls.includes(cell+51))
          legalMoves.push(cell+68)
        else if (otherCell!==cell+34)
          legalMoves.push(cell+34)
      }
    }
  }
  // you're on the top (but not corner as done before)
  else if (cell<16){
    if (!walls.includes(cell+1)){
      if (otherCell===cell+2 && cell!==14 && !walls.includes(cell+3))
        legalMoves.push(cell+4)
      else if (otherCell!==cell+2)
        legalMoves.push(cell+2)
    }
    if (!walls.includes(cell-1)){
      if (otherCell===cell-2 && cell!==2 && !walls.includes(cell-3))
        legalMoves.push(cell-4)
      else if (otherCell!==cell-2)
        legalMoves.push(cell-2)
    }
    if (!walls.includes(cell+17)){
      if (otherCell===cell+34 && !walls.includes(cell+51))
        legalMoves.push(cell+68)
      else if (otherCell!==cell+34)
        legalMoves.push(cell+34)
    }
  }
  // you're on the bottom (but not corner as done before)
  else if (cell>272){
    if (!walls.includes(cell+1)){
      if (otherCell===cell+2 && cell!==286 && !walls.includes(cell+3))
        legalMoves.push(cell+4)
      else if (otherCell!==cell+2)
        legalMoves.push(cell+2)
    }
    if (!walls.includes(cell-1)){
      if (otherCell===cell-2 && cell!==274 && !walls.includes(cell-3))
        legalMoves.push(cell-4)
      else if (otherCell!==cell-2)
        legalMoves.push(cell-2)
    }
    if (!walls.includes(cell-17)){
      if (otherCell===cell-34 && !walls.includes(cell-51))
        legalMoves.push(cell-68)
      else if (otherCell!==cell-34)
        legalMoves.push(cell-34)
    }
  }
  // anywhere else on the board
  else {
    if (!walls.includes(cell+1)){
      if (otherCell===cell+2 &&
          ![48,82,116,150,184,218,252].includes(cell) &&
          !walls.includes(cell+3))
        legalMoves.push(cell+4)
      else if (otherCell!==cell+2)
        legalMoves.push(cell+2)
    }
    if (!walls.includes(cell-1)){
      if (otherCell===cell-2 &&
          ![36,70,104,138,172,206,240].includes(cell) &&
          !walls.includes(cell-3))
        legalMoves.push(cell-4)
      else if (otherCell!==cell-2)
        legalMoves.push(cell-2)
    }
    if (!walls.includes(cell-17)){
      if (otherCell===cell-34 &&
          ![36,38,40,42,44,46,48].includes(cell) &&
          !walls.includes(cell-51))
        legalMoves.push(cell-68)
      else if (otherCell!==cell-34)
        legalMoves.push(cell-34)
    }
    if (!walls.includes(cell+17)){
      if (otherCell===cell+34 &&
          ![240,242,244,246,248,250,252].includes(cell) &&
          !walls.includes(cell+51))
        legalMoves.push(cell+68)
      else if (otherCell!==cell+34)
        legalMoves.push(cell+34)
    }
  }

  return legalMoves;
}

export const calculateWinner = (squares) => {

  if (squares.indexOf("♟") < 7) return "Black"
  else if (squares.indexOf("♙") > 271) return "White"
  else return null
}
