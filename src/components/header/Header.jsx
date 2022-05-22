import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faCashRegister, faHouse, faShop } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-list">

                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Hostels</span>
                    </div>

                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faShop} />
                        <span>Shops</span>
                    </div>

                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Offices</span>
                    </div>

                </div>

                <h1 className="header-title">
                    Looking for a place to stay? We've got you covered.
                </h1>
                <button className="btn">Sign in / Register</button>

                <div className="search">
                    <div className="search-item">
                        <FontAwesomeIcon icon={faBed} className="header-icon" />
                        <span className="search-text">Location</span>
                        <div className="options">
                            <div className="option-item">
                                <button className="options-btn">Bomas</button>
                                <button className="options-btn">Kahawa</button>
                                <button className="options-btn">Nyeri View</button>
                            </div>
                        </div>
                    </div>

                    <div className="search-item">
                        <FontAwesomeIcon icon={faHouse} className="header-icon" />
                        <span className="search-text">Property Type</span>
                        <div className="options">
                            <div className="option-item">
                                <button className="options-btn">Bedsitter</button>
                                <button className="options-btn">Single Room</button>
                                <button className="options-btn">Double Room</button>
                            </div>
                        </div>

                    </div>

                    <div className="search-item">
                        <FontAwesomeIcon icon={faCashRegister} className="header-icon" />
                        <span className="search-text">Your Budget</span>
                        <div className="options">
                            <div className="option-item">
                                <button className="options-btn">Below 3k</button>
                                <button className="options-btn">Below 5k</button>
                                <button className="options-btn">more than 5k</button>
                            </div>
                        </div>

                    </div>

                    <div className="search-item">
                        <button className="btn">Search</button>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header