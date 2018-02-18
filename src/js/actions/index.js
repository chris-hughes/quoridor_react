import * as types from "../constants/action_types";

export const makeMove = (cell) => {
  return {
    type: types.MAKE_MOVE,
    cell: cell
  }
}

export const placeWall = (cell, orientation) => {
  return {
    type: types.PLACE_WALL,
    cell: cell,
    orientation: orientation
  }
}

export const devMode = () => {
  return {
    type: types.DEV_MODE
  }
}

export const newGame = () => {
  return {
    type: types.NEW_GAME
  }
}

export const wallHoverOn = (cell, orientation) => {
  return {
    type: types.WALL_HOVER_ON,
    cell: cell,
    orientation: orientation
  }
}

export const wallHoverOut = (cell, orientation) => {
  return {
    type: types.WALL_HOVER_OUT,
    cell: cell,
    orientation: orientation
  }
}
