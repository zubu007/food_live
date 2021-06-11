import Rating from '@material-ui/lab/Rating';
import React from 'react'
import '../Pages/Review/Review.css'

function ReviewSnippets(props) {
    let i;

    return (
        <div className="review-snippets">
            <h2>{props.name}</h2>
            <Rating name="read-only" value={props.stars} readOnly />
            <p>{props.para}</p>
            
        </div>
    )
}

export default ReviewSnippets
