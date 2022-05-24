import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./propertyList.scss"

function PropertyList(i) {

    const { data, loading, error } = useFetch("/hostels/countbytype");

    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    ];

    return (
        <div className="p-list">
            {loading ? ("Loading") : (
                <>

                    {data && images.map((img, i) => (

                        <div className="p-list-item" key={i} >
                            <img
                                src={img}
                                alt=""
                                className="p-list-img"
                            />
                            <div className="p-list-title">
                                <h1>{data[i]?.type}s</h1>
                                <h2>{data[i]?.count} {data[i]?.type}s</h2>
                            </div>
                        </div>
                    ))}

                </>)}
        </div>
    )
}

export default PropertyList