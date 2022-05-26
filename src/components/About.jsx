import React from 'react';
import './About.css'

export default function About(){
    return (
        <div className='about shared' id='about'>
            <div className='inner'>
                <div className='sub'>
                    <h1>Some languages I'm familiar with</h1>
                    <i className="icon devicon-javascript-plain"></i>
                    <i className="icon devicon-python-plain"></i>
                    <i className="icon devicon-react-original"></i>
                    <i className="icon devicon-nodejs-plain"></i>
                </div>
                <div className='sub'>
                    soft skills
                </div>
            </div>
        </div> 
    )
}