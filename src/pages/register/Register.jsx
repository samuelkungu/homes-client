import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './register.scss'

function Register() {
    const [credentials, setCredentials] = useState({
        email: "",
        phone: "",
        password: "",
    });

    const handleInputChange = (event) => {
        event.preventDefault()
        setCredentials();
    };

    const handleSubmit = () => {
        console.log(credentials);
    }

    return (
        <div>
            <Navbar type="auth" />

            <div className='register'>
                <div className="register-container">

                    <div className="form">
                        <div className="heading">Create an account</div>
                        <div className="form-item">
                            <label className="label">Email address</label>
                            <input name="email" type="text" className="input" placeholder="Enter your email"
                                id="email" value={credentials.email} onChange={handleInputChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Phone</label>
                            <input name="phone" type="text" className="input" placeholder="Enter your phone number"
                                id="phone" value={credentials.phone} onChange={handleInputChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Enter your password"
                                id="password" value={credentials.password} onChange={handleInputChange} />
                        </div>

                        <button className="btn" onClick={handleSubmit} >Create Account</button>
                    </div>

                    <div className="sub-note">
                        By creating an account, you agree with our Terms
                        & conditions and Privacy statement
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register