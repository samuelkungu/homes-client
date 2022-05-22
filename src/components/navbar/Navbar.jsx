import './navbar.scss'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-container">
                <Link to="/" className='link'>
                    <span className="logo">Dekut Homes</span>
                </Link>

                <div className="nav-items">
                    <button className="nav-btn">Register</button>
                    <button className="nav-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar