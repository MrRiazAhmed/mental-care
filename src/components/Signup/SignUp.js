import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useFirebase from "../../Hook/useFirebase";

const SignUp = () => {

    const { handleUserRegister, user, handleGoogleLogin } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };

    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };


    const handleRegister = (e) => {
        e.preventDefault();

        handleUserRegister(email, password);

    };


    return (
        <div className="form-container text-center p-5">
            <h1 className="p-5 fw-bolder">Create your Account</h1>
            <div>

                <input onChange={hanldeEmail} className="m-3" type="email" name="email" id="" placeholder="Email" />
            </div>
            <div>
                <input onChange={hanldePassword} className="m-1 mb-2" type="password" name="Password" id="" placeholder="Password" /><br />
                <button onClick={handleRegister} type="submit" class="btn btn-outline-dark mb-3">Sign Up</button>
            </div>
            <div className="pb-5">
                <small className="fw-bold">Log in with Google</small>
                <button onClick={handleGoogleLogin} className="btn btn-outline-dark m-2 ">LoginGoogle</button>
            </div>
            <div><p className="fw-bolder"> Already Have an Account ///<Link to="/login"><button className="btn btn-outline-dark">Log In</button> </Link></p></div>
        </div>

    );
};

export default SignUp;