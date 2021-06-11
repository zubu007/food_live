import React from 'react'
import ChefSnippet from '../../Components/ChefSnippet'
import HeroSection from '../../Components/HeroSection'
import Chef1 from '../../resources/Chef.jpg'
import '../../Components/ChefSnippet.css'

function Staff() {
    return (
        <div className="main-container-staff">
            <HeroSection title="The Cooks" para="lorem ipsum" hasbutton={false} image = "hero-section hero-staff" />
            <div className="chefs-container">
                <div className="chefs">
                <ChefSnippet image={Chef1} name="Abdul Kuddos" para="highly Qualified Chef"/>
                </div>
                <div className="chefs">
                <ChefSnippet image={Chef1} name="Abdul Kuddos" para="highly Qualified Chef"/>
                </div>
                <div className="chefs">
                <ChefSnippet image={Chef1} name="Abdul Kuddos" para="highly Qualified Chef"/>
                </div>
            </div>
        </div>
    )
}

export default Staff
