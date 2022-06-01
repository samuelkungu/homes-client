import React, { useState } from 'react'
import "./list.scss"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from 'react-router';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from "../../hooks/useFetch"

function List() {

    const location = useLocation();

    const [area, setArea] = useState(location.state.area);
    const [property, setProperty] = useState(location.state.property);
    const [budget, setBudget] = useState(location.state.budget);



    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hostels?areas=${area}&min=${min || 0}&max=${max || 99999}`
    );

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
                            <input type="text" placeholder={area} />
                        </div>
                        <div className="ls-item">
                            <label className="name">Property Type</label>
                            <input type="text" placeholder={property} />
                        </div>
                        <div className="ls-item">
                            <label>Options</label>
                            <div className="ls-options">
                                <div className="ls-option-item">
                                    <span className="ls-option-text">  Min price <small>per night</small> </span>
                                    <input type="number" onChange={e => setMin(e.target.value)} className="ls-option-input" />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text"> Max price <small>per night</small> </span>
                                    <input type="number" onChange={e => setMax(e.target.value)} className="ls-option-input" />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text">Budget</span>
                                    <input type="number" min={1000} className="ls-option-input" placeholder={budget} />
                                </div>

                            </div>
                        </div>
                        <button >Search</button>
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