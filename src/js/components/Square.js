import React from "react"

const Square = (props) => {
  return (
    <div className="square" onClick={()=>alert('click')}>
      {props.value}
    </div>
  )
}

export default Square
