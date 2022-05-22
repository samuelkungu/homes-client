import React from 'react'
import "./footer.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="f-container">
                <h1>ABOUT</h1>
                <span className='f-text'>Dekut Homes Is Your Trusted Real Estate Partner for reserving
                    and booking <br />your next rental Homes, Hostels and Shops.</span>
                <h1>CALL</h1>
                <span className='f-text'>+254-712-345-678</span>
                <h1>HELP</h1>
                <span className='f-text'>info@dekuthomes.com</span>
                <div className="fText">Copyright © 2022 Dekut Homes.</div>
            </div>
            <div className="f-lists">
                <ul className="f-l">
                    <li className="f-l-item">Bedsitters </li>
                    <li className="f-l-item">Single Rooms </li>
                    <li className="f-l-item">Double Rooms </li>
                    <li className="f-l-item">Internal Hostels</li>

                </ul>
                <ul className="f-l">
                    <li className="f-l-item">Customer Service</li>
                    <li className="f-l-item">Partner Help</li>
                    <li className="f-l-item">Careers</li>
                    <li className="f-l-item">Sustainability</li>
                    <li className="f-l-item">Press center</li>
                    <li className="f-l-item">Safety Resource Center</li>
                    <li className="f-l-item">Investor relations</li>
                    <li className="f-l-item">Terms & conditions</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer