import React from 'react';
import { Button } from 'react-scroll'
import './Navbar.css';

export default function Navbar(){
    // const [page, setPage] = React.useState('home')

    return (
        <nav>
            <div className='nav-left nav-text'>Daniel Seow</div>
            <div className='nav-right'>
               <Button className="nav-item" type="button" value="Home" to="hero" spy={true} smooth={true} duration={500} />
               <Button className="nav-item" type="button" value="About" to="about" spy={true} smooth={true} duration={500} />
               <Button className="nav-item" type="button" value="Projects" to="hero" spy={true} smooth={true} duration={500} />
               <Button className="nav-item" type="button" value="Contact" to="hero" spy={true} smooth={true} duration={500} />
            </div>
        </nav>
    )
}