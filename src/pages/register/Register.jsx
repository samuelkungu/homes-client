import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from '../../components/navbar/Navbar';
import './register.scss'

function Register() {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCredentials({
            ...credentials, [event.target.id]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: "REGISTER_START" })
        try {
            const res = await axios.post("/auth/register", credentials);
            dispatch({ type: "REGISTER_FAILURE", payload: res.data });
            navigate("/")
        } catch (error) {
            dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
        }

    };
    return (
        <div>
            <Navbar type="auth" />

            <div className='register'>
                <div className="register-container">

                    <div className="form">
                        <div className="heading">Create an account</div>
                        <div className="form-item">
                            <label className="label">Username</label>
                            <input type="text" className="input" placeholder="Enter your username"
                                id="username" value={credentials.username} onChange={handleChange} />
                        </div>
                        <div className="form-item">
                            <label className="label">Email address</label>
                            <input type="text" className="input" placeholder="Enter your email"
                                id="email" value={credentials.email} onChange={handleChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Phone</label>
                            <input type="text" className="input" placeholder="Enter your phone number"
                                id="phone" value={credentials.phone} onChange={handleChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Enter your password"
                                id="password" value={credentials.password} onChange={handleChange} />
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