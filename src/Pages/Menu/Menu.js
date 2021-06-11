import React from 'react'
import "./Menu.css"
import HeroSection from '../../Components/HeroSection'
import MenuTable from './MenuTable'

function Menu() {
    return (
        <div className="main-container-menu">
            <HeroSection title="Menu" para="lorem ipsum" hasbutton={false} image = "hero-section hero-menu" />
            <MenuTable />
        </div>
    )
}

export default Menu
