import React from 'react'
import "./HomeWhy.css"
const HomeWhyCard = (props) => {
  return (
    <div className='homeWhyCard'>
     <div className="homeWhyCardImg"> <img src={props.img} alt={props.alt} /></div>
      <h5>{props.head}</h5>
      <p>{props.para}</p>
    </div>
  )
}

export default HomeWhyCard
