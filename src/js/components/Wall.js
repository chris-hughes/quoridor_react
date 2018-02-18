import React from "react"

const Wall = (props) => {
  return (
    <div className={props.class} onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      {props.num}
    </div>
  )
}

export default Wall
