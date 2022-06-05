import './reserve.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

function Reserve({ setOpen, hostelId }) {

    const [selectedRooms, setSelectedRooms] = useState([]);

    const { data, loading, error, reFetch } = useFetch(`/hostels/room/${hostelId}`);

    const handleSelect = (event) => {
        const checked = event.target.checked;
        const value = event.target.value
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value
                ));
    };

    console.log(selectedRooms);

    const handleClick = () => {

    }

    return (
        <div className='reserve'>
            <div className='r-container'>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="r-close"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms: </span>
                {data.map(item => (
                    <div className='r-item'>
                        <div className='r-item-info'>
                            <div className='r-title'>{item.title}</div>
                            <div className='r-desc'>{item.desc}</div>
                            <div className='r-max'>
                                Max people : <b>{item.maxPeople}</b>
                            </div>
                            <div className='r-price'>{item.price}</div>
                        </div>
                        <div className='r-select-rooms'>
                            {item.roomNumbers.map((roomNumber) => (
                                <div className='room'>
                                    <label>{roomNumber.Number}</label>
                                    <input type="checkbox" value={roomNumber._id} onChange={handleSelect} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="r-btn">Reserve now</button>
            </div>
        </div>
    )
}

export default Reserve;