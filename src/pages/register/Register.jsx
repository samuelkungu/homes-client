import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './register.scss'

function Register() {
    const [inputs, setInputs] = useState({
        email: "",
        phone: "",
        password: "",
    });

    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(inputs);
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
                                id="email" value={inputs.email} onChange={handleInputChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Phone</label>
                            <input name="phone" type="text" className="input" placeholder="Enter your phone number"
                                id="phone" value={inputs.phone} onChange={handleInputChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Enter your password"
                                id="password" value={inputs.password} onChange={handleInputChange} />
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