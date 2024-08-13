import React from 'react'

const Box = (props) => {
  console.log("props", props)
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <div style={{
            width: "400px",
            height: "400px",
            backgroundImage: `url(${props.item && props.item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h2>WIN</h2>
    </div>
  )
}

export default Box