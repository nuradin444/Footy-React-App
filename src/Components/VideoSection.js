import React from 'react';
import '../App.css'
import { Button } from './Button';
import './VideoSection.css';

function VideoSection() {
    return (
        <div className='hero-container'>
    <video src="/videos/footy.mp4" autoPlay loop muted/>
    <h1>BRINGING FOOTBALL TO LIFE</h1>
    <p>Live it, feel it, enjoy it</p>
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
            WATCH TRAILER <i className='far fa-play-circle'/>
        </Button>
    </div>
            
        </div>
    )
}

export default VideoSection
