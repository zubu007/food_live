import React from 'react'
import './Footer.css'
import Logo from '../resources/Yummy.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="footer">
                <img src={Logo}/>
                <div className="footer-menu-div">
                    <ul className="footer-menu">
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Menu
                        </li>
                        <li>
                            Staff
                        </li>
                        <li>
                            Booking
                        </li>
                        <li>
                            Review
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <p>All rights reserved by Yummy</p>
            </div>
        </>
    )
}

export default Footer
