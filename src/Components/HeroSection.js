import React from 'react'
import './HeroSection.css'
import {Link} from 'react-router-dom'

function HeroSection(props) {
    return (
        <>
            <div className={props.image}>
                <div className="hero-container">
                <h1>{props.title}</h1>
                <p>{props.para}</p>
                {props.hasbutton ? 
                <Link to='/'><button className='button'>Make a reservation</button></Link> : <></>}
                </div>
            </div>
        </>
    )
}

export default HeroSection
