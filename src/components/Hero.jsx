import React from 'react';

import './Hero.css'

export default function Hero(){
    return (
        <div className='hero shared' id='hero'>
            <img className='hero-pic' src='/me.jpg'/>
            <div className='hero-text'>
                <h1>Hi, I'm Daniel Seow Zhi Hoong.</h1>
                <h2>Software Engineer</h2>
                <p>2nd year student at Asia Pacific University, graduating in 2023.</p>
            </div>
        </div>
    )
}