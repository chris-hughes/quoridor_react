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
