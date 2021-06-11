import React from 'react'
import './ChefSnippet.css'

function ChefSnippet(props) {
    return (
        <div className='chef-snippet'>
            <img src={props.image} />
            <h2>{props.name}</h2>
            <p>{props.para}</p>
        </div>
    )
}

export default ChefSnippet
