import React from 'react'
import '../../cards/cardStyle1/cardStyle1.css'

function CardStyle1(props) {
  return (

        <div className='card-main'>
            <img className='image' src= {props.Image} alt="Image" />
            <p className="card-name">{props.CardName}</p>
            <p className='card-description'>{props.Description}</p>
            <div className='btn-container'>
            <button className='card-button'>View Details</button>
            </div>  
        </div>
  )
}

export default CardStyle1;