import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Details = () => {


    const { id } = useParams();

    const [allServices, setAllServices] = useState([])
    const [singleService, setSignleService] = useState({})

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setAllServices(data))

    }, []);

    useEffect(() => {
        const matchedService = allServices.find(service => service.id == id)
        setSignleService(matchedService)
    }, [allServices])


    return (
        <div className="container">
            <div className=" text-center">
                <img className="detail-img  " src={singleService?.img} alt="" />
            </div>
            <div className="text-center mt-5 signle-des">
                <h1 className="text-primary">{singleService?.title}</h1>
                <h4 className="text-center  mt-5"> {singleService?.des}</h4>
                <Link to='/home'>
                    <button className="btn btn-outline-dark mb-3 mt-5">Go Back to home</button></Link>
            </div>
        </div>
    );
};

export default Details;