import React from 'react';
import './Card.css';
import CardItem from './Carditems'

function Cards() {
  return (
    <div className='cards'>
      <h1>Doctor Section one</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tablets.jpg'
              text='information about medicine'
              label='medicine'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;