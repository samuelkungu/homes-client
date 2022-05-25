import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faShop } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

function Header({ type }) {

    const place = [
        { value: 'bomas', label: 'Bomas' },
        { value: 'kahawa', label: 'Kahawa' },
        { value: 'nyeriview', label: 'Nyeri View' }
    ];

    const property = [
        { value: 'bedsitter', label: 'Bedsitter' },
        { value: 'singleroom', label: 'Single Room' },
        { value: 'doubleroom', label: 'Double Room' }
    ];

    const budget = [
        { value: '3000', label: 'Below 3k' },
        { value: '5000', label: 'Below 5k' },
        { value: '5001', label: 'more than 5k' }
    ];

    const [area, setArea] = useState(null)
    const [room, setRoom] = useState(null)
    const [amount, setAmount] = useState(null)


    // const [selected, setSelected] = useState({
    //     place: null,
    //     property: null,
    //     budget: null,
    // })

    const handleChange = (area, room, amount) => {
        setArea(area);
        setRoom(room)
        setAmount(amount)
        console.log({ area, room, amount });
    };

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/hostels", { state: { place, property, budget } })
    };

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
                            <Select options={place} onChange={handleChange} className="options" placeholder='Destination' />
                        </div>

                        <div className="search-item">
                            <Select options={property} onChange={handleChange} className="options" placeholder='Property Type' />
                        </div>

                        <div className="search-item">
                            <Select options={budget} onChange={handleChange} className="options" placeholder='Your budget' />
                        </div>

                        <div className="search-item">
                            <button onClick={handleSearch} className="options-btn">Search</button>
                        </div>

                    </div>
                </>}


            </div>

        </div >
    )
}

export default Header