import React from "react"

const Square = (props) => {
  // this is just for debugging
  const display = props.value ? props.value : props.num
  return (
    <div className="square" onClick={props.onClick}>
      {display}
    </div>
  )
}

export default Square
