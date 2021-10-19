import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="mb-5">
            <div className="mt-5 ">
                <h1 className="text-center text-dark fw-bold"> Our Services</h1>
                <hr />
            </div>


            <div className="cart">
            <div className="container">
                <div className="row">
                    {
                        services.map(service => (
                            <div className="col-lg-4">
                                <div className="card m-3 pt-3">
                                    <div className="img-container img-fluid mx-auto ">
                                        <img src={service.img} alt="" />
                                    </div>
                                    <div className=" p-3">
                                        <h1>{service.title}</h1>
                                        <p>{service.info}</p>
                                        <Link to={`/details/${service.id}`}>
                                            <button className="btn btn-outline-dark"  >More InFo</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
            </div>
    );
};

export default Services;