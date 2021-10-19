
import "./Navbar.css";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import useFirebase from "../../Hook/useFirebase";


const Navbar = () => {

    const { handleLogout, user } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                            <div className=" text-end m-3 me-5">
                                {user.email ? (
                                    <button onClick={handleLogout} className="btn btn-outline-danger">
                                        LogOut
                                    </button>
                                ) : (
                                    <Link to="/login">
                                        <button className="btn btn-outline-dark">Log in</button>
                                    </Link>
                                )}
                                <p  className="mb-5 fw-bold text-secondary">{user.displayName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;