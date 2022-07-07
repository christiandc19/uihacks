import React from 'react'
import '../../cards/cardStyle2/cardStyle2.css'

function CardStyle2(props) {
  return (
<>
    <div className='card-main2'>
        
        <div className='flex-left'>
            <img className='image2' src= {props.Image2} alt="Image" />
        </div>
        
        <div className='flex-right'>
                <p className="card-name">{props.CardName2}</p>
                <p className='card-description'>{props.Description2}</p>
                <div className='btn-container2'>
                <button className='card2-button'>View Details</button>
                </div>
        </div>

    </div>
</>
  ) 
}

export default CardStyle2;