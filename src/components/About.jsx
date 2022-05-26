import React from 'react';
import './About.css'

export default function About(){
    return (
        <div className='about shared' id='about'>
            <div className='inner'>
                <div className='sub sub-left'>
                    <h1 className='sub-title'>Languages and Frameworks</h1>
                    <div className='lang-div'>
                        <div className='lang'>
                            <i className="icon devicon-javascript-plain"></i>
                            <p className='lang-txt'>7/10</p>
                        </div>
                        <div className='lang'>
                            <i className="icon devicon-python-plain"></i>
                            <p className='lang-txt'>6/10</p>
                        </div>
                        <div className='lang'>
                            <i className="icon devicon-react-plain"></i>
                            <p className='lang-txt'>8/10</p>
                        </div>
                        <div className='lang'>
                            <i className="icon devicon-nodejs-plain"></i>
                            <p className='lang-txt'>6/10</p>
                        </div>
                    </div>
                </div>
                <div className='sub'>
                    <h1 className='sub-title'>Soft skills</h1>
                    <p>communication skills</p>
                    <p>learning skills</p>
                    <p>adaptable</p>
                    <p>teamwork</p>
                </div>
            </div>
        </div> 
    )
}