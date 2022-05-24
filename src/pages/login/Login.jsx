import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './login.scss'

function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <Navbar type="auth" />

            <div className='login'>
                <div className="login-container">

                    <div className="form">
                        <div className="heading">Sign In</div>
                        <div className="form-item">
                            <label className="label">Email address</label>
                            <input name="email" type="text" className="input" placeholder="Enter your email"
                                id="email" value={inputs.email} onChange={handleInputChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Enter your password"
                                id="password" value={inputs.password} onChange={handleInputChange} />
                        </div>

                        <button className="btn">Sign in</button>
                    </div>

                    <div className="sub-note">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login