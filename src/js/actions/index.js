import * as types from "../constants/action_types";

export const makeMove = (cell) => {
  return {
    type: types.MAKE_MOVE,
    cell: cell
  }
}

export const placeWall = (cell) => {
  return {
    type: types.PLACE_WALL,
    cell: cell
  }
}
