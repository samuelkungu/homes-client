import './reserve.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from '../../hooks/useFetch';

function Reserve({ setOpen, hostelId }) {

    const { data, loading, error, reFetch } = useFetch(`/hostels/room/${hostelId}`);

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
                        <div className='r-item-info'></div>
                        <div className='r-title'>{item.title}</div>
                        <div className='r-desc'>{item.desc}</div>
                        <div className='r-max'>
                            Max people : <b>{item.maxPeople}</b>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reserve;