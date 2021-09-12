import React from 'react';
import '../App.css'
import { Button } from './Button';
import './VideoSection.css';

function VideoSection() {
    return (
        <div className='hero-container'>
    <video src="/videos/pills.mp4" autoPlay loop muted/>
    <h1>Doctors</h1>
    <p>Here to help</p>
    <div className='hero-btns'>
        <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            GET STARTED
        </Button>

        <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
           BOOK AN APPOINTMENT
        </Button>
    </div>
            
        </div>
    )
}

export default VideoSection
