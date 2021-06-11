import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes, FaPhoneAlt} from 'react-icons/fa'
import Logo from '../resources/Yummy.png'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <div className="navbar">
                
                <div className={click ? "actived" : "navbar-container"}>
                <div className="bar">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <Link to= '/' >
                    <img src={Logo} alt='logo' className='logo' />
                    </Link>
                    <div className="contact-icon" >
                    <Link to='/contact' className='nav-links'><FaPhoneAlt /></Link>
                    </div>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                        Menu
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/staff' className='nav-links' onClick={closeMobileMenu}>
                        Staff
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>
                        Booking
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/review' className='nav-links' onClick={closeMobileMenu}>
                        Review
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>
                </ul>
                </div>
            </div>  
        </>
    )
}

export default Navbar
