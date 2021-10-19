
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Login.css"
const LogIn = () => {
    const {
        handleGoogleLogin,
        user,
        handleUserLogin,
    } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        handleUserLogin(email, password);
    };


    return (
        <div className="form-container text-center p-5">
            <h1 className="p-5 fw-bolder">Log In your Account</h1>
            <div>

                <input onChange={hanldeEmail} className="m-3" type="email" name="email" id="" placeholder="Email" />
            </div>
            <div>
                <input onChange={hanldePassword} className="m-1 mb-2" type="password" name="Password" id="" placeholder="Password" /><br />
                <button onClick={handleLogin} type="submit" class="btn btn-outline-dark mb-3">Log in</button>
            </div>
            <div className="pb-5">
                <small className="fw-bold">Log in with Google</small>
                <button onClick={handleGoogleLogin} className="btn btn-outline-dark m-2 ">LoginGoogle</button>
            </div>
            <div>
                <p className="fw-bolder"> Create New Account ///
                    <Link to="/signup"> <button className="btn btn-outline-dark">Sign Up</button></Link>
                </p></div>
        </div>


    )
};

export default LogIn