import React from 'react'
import './cards.css'
import CardStyle1 from '../../components/cards/cardStyle1/CardStyle1'
import CardStyle2 from '../../components/cards/cardStyle2/CardStyle2'
import CardStyle3 from '../../components/cards/cardStyle3/CardStyle3'

import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'
import Headshot1 from '../../assets/headshot1.jpg'
import Headshot2 from '../../assets/headshot2.jpg'
import Headshot3 from '../../assets/headshot3.jpg'



function Cards() {
  return (

   <>
{/* ------------------------------------------------------------------------------- Card Style 1 ---------------------------------------------------------------------------------- */}

    <hr className='container'/>
    <h5 className='container header'>Card Style 1</h5>
      <div className="main">
         <CardStyle1 
          Image = { Card1 }
          CardName="50+ Best creative website themes & templates"
          Description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
        />

        <CardStyle1 
          Image = { Card2 }
          CardName="50+ Best creative website themes & templates"
          Description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
        />

      <CardStyle1 
        Image = { Card3 }
        CardName="50+ Best creative website themes & templates"
        Description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
        />
      </div>

{/* ------------------------------------------------------------------------------- Card Style 2 ---------------------------------------------------------------------------------- */}

          <hr className='container'/>
          <h5 className='container header'>Card Style 2</h5>

          <div className='container main2'>

         <CardStyle2 
          Image2 = { Card1 }
          CardName2="50+ Best creative website themes & templates"
          Description2="“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”"
        />
          <CardStyle2 
          Image2 = { Card2 }
          CardName2="50+ Best creative website themes & templates"
          Description2="“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”"
        />

          <CardStyle2 
          Image2 = { Card3 }
          CardName2="50+ Best creative website themes & templates"
          Description2="“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”"
        />
        
        </div>
        <div className='container main'>

        <hr className='container'/>
          <h5 className='container header'>Card Style 3</h5>
          <CardStyle3 
          Image3 = { Card1 }
          CardName3="50+ Best creative website themes & templates"
          Description3="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..”"
          Headshot = { Headshot1 }
          Name ="Chris"
          Title = "Web Developer"
        />

<CardStyle3 
          Image3 = { Card2 }
          CardName3="50+ Best creative website themes & templates"
          Description3="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..”"
          Headshot = { Headshot2 }
          Name ="Johnny"
          Title = "Web Developer"
        />

<CardStyle3 
          Image3 = { Card3 }
          CardName3="50+ Best creative website themes & templates"
          Description3="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..”"
          Headshot = { Headshot3 }
          Name ="Kyle"
          Title = "Web Developer"
        />
        </div>
</>
  )
}

export default Cards
