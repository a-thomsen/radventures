import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our escapades and receive prime deals by subscribing our newsletter!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your email' className='footer-input' />
            <Button buttonStyle='btn-primary'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How this works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Join our clan</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agencies</Link>
            <Link to='/'>Influencers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
    <section className='social-media'>
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            RADVENTURES
            <i className='fas fa-bolt'></i>
          </Link>
        </div>
        <small className='website-rights'>RADVENTURES © 2021</small>
        <div className='social-icons'>
        <Link 
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'>
              <i className='fab fa-facebook-f'></i>
          </Link>
          <Link 
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='YouTube'>
              <i className='fab fa-youtube'></i>
          </Link>
          <Link 
            className='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'>
              <i className='fab fa-instagram'></i>
          </Link>
          <Link 
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'>
              <i className='fab fa-twitter'></i>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Footer;
