import React from "react"

const Square = (props) => {
  // this is just for debugging
  const display = props.value ? props.value : props.num
  return (
    <div className={props.class} onClick={props.onClick}>
      {display}
    </div>
  )
}

export default Square
