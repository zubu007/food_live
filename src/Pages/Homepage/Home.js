import React from 'react'
import HeroSection from '../../Components/HeroSection'
import ShortSnippet from '../../Components/ShortSnippet'
import AboutImage from '../../resources/About.jpg'
import MenuImage from '../../resources/Menu.jpg'
import StaffImage from '../../resources/Chef.jpg'

function Home() {
    return (
        <div className="main-container-home">
            <HeroSection title="Yummy" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit." hasbutton={true} image = "hero-section hero-home"/>
            <ShortSnippet title="About" link="./about" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sodales sapien, tristique bibendum turpis. Cras efficitur ipsum et lobortis sodales. Mauris tincidunt urna metus, vitae porttitor enim tempor ac. " image = {AboutImage}/>
            <ShortSnippet title="Menu" link="./menu" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sodales sapien, tristique bibendum turpis. Cras efficitur ipsum et lobortis sodales. Mauris tincidunt urna metus, vitae porttitor enim tempor ac. " image = {MenuImage}/>
            <ShortSnippet title="Staff" link="./staff" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sodales sapien, tristique bibendum turpis. Cras efficitur ipsum et lobortis sodales. Mauris tincidunt urna metus, vitae porttitor enim tempor ac. " image = {StaffImage}/>
            
        </div>
    )
}

export default Home
