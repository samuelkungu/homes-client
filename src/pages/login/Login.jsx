import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import Navbar from '../../components/navbar/Navbar';

function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
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
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_FAILURE", payload: res.data });
            navigate("/")
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }

    };

    return (
        <div>
            <Navbar />

            <div className='login'>
                <div className="login-container">

                    <div className="form">
                        <div className="heading">Sign In</div>
                        <div className="form-item">
                            <label className="label">Email address</label>
                            <input type="text" className="input" placeholder="Enter your email"
                                id="email" value={credentials.email} onChange={handleChange} />
                        </div>

                        <div className="form-item">
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Enter your password"
                                id="password" value={credentials.password} onChange={handleChange} />
                        </div>

                        <button className="btn" onClick={handleSubmit} disabled={loading} >Sign in</button>
                        {error && <span>{error.message}</span>}
                    </div>

                    <div className="sub-note">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login