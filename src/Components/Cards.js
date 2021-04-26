import React from 'react';
import './Card.css';
import CardItem from './Carditems'

function Cards() {
  return (
    <div className='cards'>
      <h1>Ways to become a better football player!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/player-1.jpg'
              text='Practise on your own until you feel comfortable with the ball at your feet'
              label='Step 1'
              path='/services'
            />
            <CardItem
              src='images/player-2.jpg'
              text='Push yourself to the limit and challenge your new found skills against others'
              label='Step 2'
              path='/services'
            />
          </ul>
      
          <ul className='cards__items'>
            <CardItem
              src='images/player-3.jpg'
              text='Communicate with other team mates so you can all learn from each other'
              label='Step 3'
              path='/services'
            />
            <CardItem
              src='images/player-4.jpg'
              text='Practise taking shots with a Goalkeeper so you can both improve'
              label='Step 4'
              path='/services'
            />

            <CardItem
              src='images/player-5.jpg'
              text='Remember you achieve more with great team mates around you'
              label='Step 5'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;