import React from 'react'
import Rating from '@material-ui/lab/Rating';


function Stars(props) {
    return (
        <div>
            <Rating name="read-only" value={props.stars} readOnly />
        </div>
    )
}

export default Stars

