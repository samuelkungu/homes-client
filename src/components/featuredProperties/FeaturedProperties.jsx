import React from 'react'
import "./featuredProperties.scss"
import useFetch from '../../hooks/useFetch';

function FeaturedProperties() {

    const { data, loading, error } = useFetch("/hostels?featured=true&limit=4");

    return (
        <div className='fp'>

            {loading ? ("Loading") : (
                <>
                    {data.map((item) => (
                        <div className="fp-item" key={item._id} >
                            <img
                                src={item.photos[0]}
                                alt=""
                                className="fp-img"
                            />
                            <span className="fp-name">{item.name}</span>
                            <span className="fp-area">{item.area}</span>
                            <span className="fp-price">Starting from kshs. {item.cheapestPrice}</span>
                            {item.rating && <div className="fp-rating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    ))}

                </>)}

        </div>
    )
}

export default FeaturedProperties