import React from 'react'

const Box = (props) => {
  console.log("props", props)
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img} alt='https://media.istockphoto.com/id/1131230925/vector/check-marks-red-cross-icon-simple-vector.jpg?s=612x612&w=0&k=20&c=8oNof6faYkfOn1O6CAOHwpSmAhq3IK9hY_D3icbaQps='/>
        <h2>WIN</h2>
    </div>
  )
}

export default Box