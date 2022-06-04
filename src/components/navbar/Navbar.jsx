import './navbar.scss'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from 'react';

function Navbar() {
    const { user } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="nav-container">
                <Link to="/" className='link'>
                    <span className="logo">Dekut Homes</span>
                </Link>

                {user ? user.username : (<>
                    <div className="nav-items">
                        <Link to="/register" className='link'>
                            <button className="nav-btn">Register</button>
                        </Link>
                        <Link to="/login" className='link'>
                            <button className="nav-btn">Login</button>
                        </Link>
                    </div>
                </>)}

            </div>
        </div>
    )
}

export default Navbar