import React from 'react'

const Box = (props) => {
  console.log("props", props)
  let result = ""
  if(
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ){
    result = props.result === "win" ? "lose" : "win"
  }else{
    result = props.result
  }
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <div style={{
            width: "400px",
            height: "400px",
            backgroundImage: `url(${props.item && props.item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h2>{result}</h2>
    </div>
  )
}

export default Box