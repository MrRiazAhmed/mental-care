import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ms-3">
                                <h2 className="m-2 ms- fw-bold">Mental Care</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="nav-items">
                                <div className="d-flex m-2 text-align-center justify-content-center">
                                    <p><Link className="items" to="/home">Home</Link> </p>
                                    <p><Link className="items" to="/services">Services</Link> </p>
                                    <p><Link className="items" to="/about">About Us</Link> </p>
                                    <p><Link className="items" to="/contact">Contact Us</Link> </p>



                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" text-end me-5">
                                <button className=" m-2 btn btn-dark">SignUp</button>
                                <span>Or</span>
                                <button className=" m-2 btn btn-dark">LogIn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;