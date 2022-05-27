import React, { useState } from 'react';
import './About.css'

export default function About() {
    const [lang, setLang] = useState('');

    function langClick(e) {
        console.log(e.target.id)
    }

    return (
        <div className='about shared' id='about'>
            <div className='inner'>
                <div className='sub sub-left'>
                    <h1 className='sub-title'>Languages and Frameworks</h1>
                    <div className='select-div'>
                        <div className='select-item'>class</div>
                        <div className='select-item'>class</div>
                        <div className='select-item'>class</div>
                        <div className='select-item'>class</div>
                    </div>
                    <div className='lang-div'>
                        <i id='javascript' className="icon devicon-javascript-plain" onClick={e => langClick(e)} />
                        <i id='python' className="icon devicon-python-plain" onClick={e => langClick(e)} />
                        <i id='react' className="icon devicon-react-plain" onClick={e => langClick(e)} />
                        <i id='node' className="icon devicon-nodejs-plain" onClick={e => langClick(e)} />
                    </div>
                    
                </div>
                <div className='sub'>
                    <h1 className='sub-title'>Soft skills</h1>
                    <p>communication</p>
                    <p>learning</p>
                    <p>adaptable</p>
                    <p>teamwork</p>
                </div>
            </div>
        </div> 
    )
}