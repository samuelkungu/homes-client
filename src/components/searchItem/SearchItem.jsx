import "./searchItem.scss";
import { Link } from "react-router-dom";


const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="si-img" />
            <div className="si-description">
                <h1 className="si-title">{item.name}</h1>
                <span className="si-features"> {item.desc} </span>
                <span className="si-distance">  {item.address} </span>
                <span className="si-subtitle">  {item.address} , {item.distance}  metres </span>
                <span className="si-cancel-subtitle">
                    You can cancel later, so look at this great property today!
                </span>
            </div>
            <div className="si-details">
                <div className="price">
                    <span className="si-price"><small>Kshs. </small>{item.cheapestPrice}</span>
                    <span className="si-tax">Includes taxes and fees</span>
                </div>

                <div className="si-detail-texts">
                    {/* <Link to={`/hostels/${item._id}`}> <button className="si-check-button">See availability</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default SearchItem;