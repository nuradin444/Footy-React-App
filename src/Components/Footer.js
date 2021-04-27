import React from 'react';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section
            className="footer-subscription"
            >
            <p className="footer-subscription-heading">
                Join the football journey by signing up to our newsletter
            </p>
            <p className="footer-subscription-text">
                Feel free to unsubscribe at any given time
            </p>
            <div className="input-areas">
                <form>
                <input type="email" name="email" placeholder="Your Email"
                className="footer-input"/>
                <Button buttonStyle='btn--outline'> Subscribe</Button>
                </form>
            </div>
            </section>
           
         
        </div>
    )
}

export default Footer
