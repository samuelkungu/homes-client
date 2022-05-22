import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faCashRegister, faHouse, faShop } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Header({ type }) {

    const [openArea, setOpenArea] = useState(false);
    const [area, setArea] = useState("Location");
    const [openProperty, setOpenProperty] = useState(false);
    const [property, setProperty] = useState("Property type");
    const [openBudget, setOpenBudget] = useState(false);
    const [budget, setBudget] = useState(3000);


    return (
        <div className='header'>
            <div className={type === "list" ? "header-container list-mode" : "header-container"}>
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

                {type !== "list" && <>
                    < h1 className="header-title">
                        Looking for a place to stay? We've got you covered.
                    </h1>
                    <button className="btn">Sign in / Register</button>

                    <div className="search">
                        <div className="search-item">
                            <FontAwesomeIcon icon={faBed} className="header-icon" />
                            <span className="search-text" onClick={() => setOpenArea(!openArea)}>{area}</span>
                            {openArea && <div className="options">
                                <div className="option-item">
                                    <button className="options-btn" value="Bomas" onClick={(e) => setArea(e.target.value)} >Bomas</button>
                                    <button className="options-btn" value="Kahawa" onClick={(e) => setArea(e.target.value)} >Kahawa</button>
                                    <button className="options-btn" value="Nyeri View" onClick={(e) => setArea(e.target.value)}  >Nyeri View</button>
                                </div>
                            </div>}
                        </div>

                        <div className="search-item">
                            <FontAwesomeIcon icon={faHouse} className="header-icon" />
                            <span className="search-text" onClick={() => setOpenProperty(!openProperty)}>{property}</span>
                            {openProperty && <div className="options">
                                <div className="option-item">
                                    <button className="options-btn" value="Bedsitter" onClick={(e) => setProperty(e.target.value)} >Bedsitter</button>
                                    <button className="options-btn" value="Single Room" onClick={(e) => setProperty(e.target.value)} >Single Room</button>
                                    <button className="options-btn" value="Double Room" onClick={(e) => setProperty(e.target.value)} >Double Room</button>
                                </div>
                            </div>}

                        </div>

                        <div className="search-item">
                            <FontAwesomeIcon icon={faCashRegister} className="header-icon" />
                            <span className="search-text" onClick={() => setOpenBudget(!openBudget)}>Kshs. {budget}</span>
                            {openBudget && <div className="options">
                                <div className="option-item">
                                    <button className="options-btn" value={3000} onClick={(e) => setBudget(e.target.value)} >Below 3k</button>
                                    <button className="options-btn" value={5000} onClick={(e) => setBudget(e.target.value)} >Below 5k</button>
                                    <button className="options-btn" value={5001} onClick={(e) => setBudget(e.target.value)} >more than 5k</button>
                                </div>
                            </div>}

                        </div>

                        <div className="search-item">
                            <button className="btn">Search</button>
                        </div>

                    </div>
                </>}


            </div>

        </div >
    )
}

export default Header