import React from 'react'
import '../../cards/cardStyle3/cardStyle3.css'

function CardStyle3(props) {
  return (

        <div className='card-main'>
            <img className='image' src= {props.Image3} alt="Image" />
            <p className="card-name">{props.CardName3}</p>
            <p className='card-description'>{props.Description3}</p>
            <hr className='cardStyle3-hr container'/>
            
            <div className='card-footer'>
                <div className='headshot-container'>
                    <img className='headshot1' src= {props.Headshot} alt="Image" />
                </div>

                <div className='card-footer-name'>
                    <p className='name'>{props.Name}</p>
                    <p className='title'>{props.Title}</p>
                </div>

            </div>
        </div>
  )
}

export default CardStyle3;