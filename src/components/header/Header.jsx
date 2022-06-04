import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faShop } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Select from 'react-select'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Header({ type }) {

    const [search, setSearch] = useState({
        place: "",
        property: "",
        budget: "",
    });
    const handleChange = (event) => {
        setSearch({
            ...search, [event.target.name]: event.target.value
        });
    };
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/hostels", { state: { search } })
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
                            <FormControl>
                                <InputLabel className='label'>Location</InputLabel>
                                <Select value={search.place} label="place" name="place" onChange={handleChange} className="options" >
                                    <MenuItem value={'Bomas'}> Bomas </MenuItem>
                                    <MenuItem value={'Kahawa'}> Kahawa </MenuItem>
                                    <MenuItem value={'Nyeriview'}> Nyeri View</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="search-item">
                            <FormControl>
                                <InputLabel className='label'>Property</InputLabel>
                                <Select value={search.property} label="property" name="property" onChange={handleChange} className="options" >
                                    <MenuItem value={'Bedsitter'}> Bedsitter </MenuItem>
                                    <MenuItem value={'Singleroom'}> Single Room </MenuItem>
                                    <MenuItem value={'Doubleroom'}> Single Room </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="search-item">
                            <FormControl>
                                <InputLabel className='label'>Budget</InputLabel>
                                <Select value={search.budget} label="budget" name="budget" onChange={handleChange} className="options"  >
                                    <MenuItem value={3000}> Below 3k </MenuItem>
                                    <MenuItem value={5000}> Below 5k </MenuItem>
                                    <MenuItem value={7000}> Below 7k </MenuItem>
                                    <MenuItem value={9000}> Below 9k </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="search-item">
                            <button onClick={handleSearch} className="options-btn">Search</button>
                        </div>

                        {/* <div className="search-item">
                            <Select options={place} name="place" value={search.place} onChange={handleSearchChange} className="options" placeholder='Destination' />
                        </div>

                        <div className="search-item">
                            <Select options={property} name="property" value={search.property} onChange={handleSearchChange} className="options" placeholder='Property Type' />
                        </div>

                        <div className="search-item">
                            <Select options={budget} name="budget" value={search.budget} onChange={handleSearchChange} className="options" placeholder='Your budget' />
                        </div>

                        <div className="search-item">
                            <button onClick={handleSearch} className="options-btn">Search</button>
                        </div> */}

                    </div>
                </>}


            </div>

        </div >
    )
}

export default Header