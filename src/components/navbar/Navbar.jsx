import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-container">
                <span className="logo">Dekut Homes</span>
                <div className="nav-items">
                    <button className="nav-btn">Register</button>
                    <button className="nav-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar