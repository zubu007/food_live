import React from 'react'
import './Review.css'
import HeroSection from '../../Components/HeroSection'
import ReviewSnippets from '../../Components/ReviewSnippets'

function Review() {
    return (
        <div className="main-container-review">
            <HeroSection title="Review" para="Read what others say about us!" hasbutton={false} image = "hero-section hero-review" />
            <div className="review-section">
                <div className="review-container">
                    <ReviewSnippets name="Jubayer" stars={4} para="It was a very good restaurant" />
                    <ReviewSnippets name="Jubayer" stars={5} para="It was a very good restaurant" />
                    <ReviewSnippets name="Jubayer" stars={3} para="It was a very good restaurant" />
                </div>
            </div>
            
        </div>
    )
}

export default Review
