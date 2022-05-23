import React, { useState } from 'react'
import "./list.css"
import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import { useLocation } from 'react-router';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from "../../hooks/useFetch"

function List() {

    const location = useLocation();

    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const [data, loading, error, reFetch] = useFetch(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    );

    const handleClick = () => {
        reFetch();
    };

    return (
        <div>
            <Topbar />
            <Header type="list" />

            <div className="list-container">
                <div className="list-wrapper">

                    <div className="list-search">
                        <h1 className="ls-title">Search</h1>
                        <div className="ls-item">
                            <label className="name">Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="ls-item">
                            <label className="name">Check-in-date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "MM-dd-yyyy")} to ${format(date[0].endDate, "MM-dd-yyyy")}`}
                            </span>
                            {openDate && (<DateRange
                                onChange={(item) => setDate([item.selection])}
                                ranges={date}
                                minDate={new Date()} />)
                            }
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
                                    <span className="ls-option-text">Adult</span>
                                    <input type="number" min={1} className="ls-option-input" placeholder={options.adult} />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text">Children</span>
                                    <input type="number" min={0} className="ls-option-input" placeholder={options.children} />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text">Room</span>
                                    <input type="number" min={1} className="ls-option-input" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick} >Search</button>
                    </div>

                    <div className="list-result">
                        {loading ? "Loading" :
                            <>
                                {data.map(item => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default List