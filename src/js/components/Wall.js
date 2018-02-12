import React from "react"

const Wall = (props) => {
  return (
    <div className={props.class} onClick={props.onClick}>
      {props.num}
    </div>
  )
}

export default Wall
