import React from 'react'
import { Link } from 'react-router-dom'
import './ShortSnippet.css'

function ShortSnippet(props) {
    return (
        <div className="short-snippets">
            <div className="short-snippet-container">
                <h1> {props.title}</h1>
                <img src={props.image}/>
                <p>{props.para}</p>
                <Link to={props.link}>
                <button>Read More</button>
                </Link>
            </div>
        </div>
    )
}

export default ShortSnippet
