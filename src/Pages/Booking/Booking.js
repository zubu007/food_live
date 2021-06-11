import React from 'react'
import './Booking.css'
import HeroSection from '../../Components/HeroSection'

function Booking() {
    return (
        <div className="main-container-booking">
            <HeroSection title="Book a table" para="lorem ipsum" hasbutton={false} image = "hero-section hero-booking" />
            <div className="form-div">
            <form>
                <label>
                    Name:
                <input type="text" name="name" />
                </label>
                <label>
                    Phone:
                <input type="text" name="name" />
                </label>
                <label>
                    Date:
                <input type="text" name="name" />
                </label>
                <label>
                    Time:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}

export default Booking
