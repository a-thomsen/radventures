import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://streamable.com/e/1br1b1' autoPlay loop muted />
      <h1>Adventure awaits!</h1>
      <p>We are coming for ya!</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline' 
          buttonSize='btn--large'>
            Get Started
        </Button>
        <Button 
          className='btns' 
          buttonStyle='btn--primary' 
          buttonSize='btn--large'>
            Watch trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;


