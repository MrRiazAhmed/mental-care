import React from 'react';
import img from "./banner.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                   <div className="banner mt-5 pt-5 text-center justify-content-center">
                   <h1 className="fw-bold font ">Welcome <br/> To <span className="text">Mental Care</span></h1>
                   <br />
                   <button className="btn btn-outline-dark">Get a consultation</button>
                   </div>
                </div>
                <div className="col-md-6">
                    <div className="img-logo">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;