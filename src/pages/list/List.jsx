import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./list.scss"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from "../../hooks/useFetch"
import { SearchContext } from "../../context/SearchContext";

function List() {

    const location = useLocation();

    const [place, setPlace] = useState(location.state.place);
    const [property, setProperty] = useState(location.state.property);
    const [budget, setBudget] = useState(location.state.budget);

    const { data, loading, error, reFetch } = useFetch(
        `/hostels?area=${place}&type=${property}&max=${budget}`
    );

    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "RESET_SEARCH", payload: { place, property, budget } });
        reFetch();
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="list-container">
                <div className="list-wrapper">

                    <div className="list-search">
                        <h1 className="ls-title">Search</h1>
                        <div className="ls-item">
                            <label className="name">Destination</label>
                            <FormControl>
                                <InputLabel className='label'>Location</InputLabel>
                                <Select value={place} label="place" name="place" onChange={(event) => setPlace(event.target.value)} className="options" >
                                    <MenuItem value={'Bomas'}> Bomas </MenuItem>
                                    <MenuItem value={'Kahawa'}> Kahawa </MenuItem>
                                    <MenuItem value={'Nyeriview'}> Nyeri View</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="ls-item">
                            <label className="name">Property Type</label>
                            <FormControl>
                                <InputLabel className='label'>Property</InputLabel>
                                <Select value={property} label="property" name="property" onChange={(event) => setProperty(event.target.value)} className="options" >
                                    <MenuItem value={'Bedsitter'}> Bedsitter </MenuItem>
                                    <MenuItem value={'Single Room'}> Single Room </MenuItem>
                                    <MenuItem value={'Double Room'}> Double Room </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="ls-item">
                            <label className="name">Budget</label>
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

                        <button onClick={handleSearch} >Search</button>
                    </div>

                    <div className="list-result">
                        {loading ? (
                            "loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default List