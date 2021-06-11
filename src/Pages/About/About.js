import React from 'react'
import './About.css'
import HeroSection from '../../Components/HeroSection'
import DetailStory from '../../Components/DetailStory'

function About() {
    return (
        <div className="main-container-about">
            <HeroSection title="About Us" para="lorem ipsum" hasbutton={false} image = "hero-section hero-about" />
            <DetailStory />
        </div>
    )
}

export default About
