import React from 'react'
import '../../cards/cardStyle2/cardStyle2.css'

function CardStyle2(props) {
  return (
<>
    <div>
        
        <div>
            <img className='image' src= {props.Image2} alt="Image" />
        </div>
        
        <div>
                <p className="card-name">{props.CardName2}</p>
                <p className='card-description'>{props.Description2}</p>
                <div className='btn-container'>
                    <button className='card-button2'>View Details</button>
                </div>  
        </div>

    </div>
</>
  )
}

export default CardStyle2;