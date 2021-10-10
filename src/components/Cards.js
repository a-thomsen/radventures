import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Kick the bucket on these MENTAL destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src='https://i.ibb.co/6v0RfTs/nazare.jpg'
              text='For the daredevils – big wave surfing in Nazaré'
              label='Adrenaline'
              path='/services'
            />
            <CardItem 
              src='https://i.ibb.co/NmcLK6K/sailing.jpg'
              text='Hop aboard our luxurious boat in the Mediterranean'
              label='Luxury'
              path='/services'
            />
            <CardItem 
            src='https://i.ibb.co/BwnXQRS/zipline.jpg'
            text='Get your scare levels through the roof on our zipline'
            label='Adrenaline'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src='https://i.ibb.co/zn4r42p/losangeles.jpg'
              text='Explore the Hank Moody lifestyle up close'
              label='Adventure'
              path='/services'
            />
            <CardItem 
              src='https://i.ibb.co/nmCQ4cG/medellin.jpg'
              text='Join us on the Narcos tour in Medellín'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src='https://i.ibb.co/RD0KfPH/skyline.jpg'
              text='Enjoy a mouthgasm watching over the evening skyline'
              label='Luxury'
              path='/services'
            />
            <CardItem 
              src='https://i.ibb.co/vJr9bgN/amusement.jpg'
              text='Wake your inner child for a night of crazy fun'
              label='Adventure'
              path='/services'
            />
            <CardItem 
              src='https://i.ibb.co/ckgbwbr/mystery.jpg'
              text='Let us surprise you – we got some aces in our stack!'
              label='Luxury'
              path='/services' 
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
