import './header.scss'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faShop } from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

function Header({ type }) {

    const [place, setPlace] = useState("");
    const [property, setProperty] = useState("");
    const [budget, setBudget] = useState("");


    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { place, property, budget } });
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
                    {!user && <button className="btn">Sign in / Register</button>}
                    <div className="search">
                        <div className="search-item">
                            <FormControl>
                                <InputLabel className='label'>Location</InputLabel>
                                <Select value={place} label="place" name="place" onChange={(event) => setPlace(event.target.value)} className="options" >
                                    <MenuItem value={'Bomas'}> Bomas </MenuItem>
                                    <MenuItem value={'Kahawa'}> Kahawa </MenuItem>
                                    <MenuItem value={'Nyeriview'}> Nyeri View</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="search-item">
                            <FormControl>
                                <InputLabel className='label'>Property</InputLabel>
                                <Select value={property} label="property" name="property" onChange={(event) => setProperty(event.target.value)} className="options" >
                                    <MenuItem value={'Bedsitter'}> Bedsitter </MenuItem>
                                    <MenuItem value={'Single Room'}> Single Room </MenuItem>
                                    <MenuItem value={'Double Room'}> Double Room </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="search-item">
                            <FormControl>
                                <InputLabel className='label'>Budget</InputLabel>
                                <Select value={budget} label="budget" name="budget" onChange={(event) => setBudget(event.target.value)} className="options"  >
                                    <MenuItem value={3000}> Below 3k </MenuItem>
                                    <MenuItem value={5000}> Below 5k </MenuItem>
                                    <MenuItem value={7000}> Below 7k </MenuItem>
                                    <MenuItem value={9000}> Below 9k </MenuItem>
                                    <MenuItem value={10000}> Below 10k </MenuItem>
                                </Select>
                            </FormControl>
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