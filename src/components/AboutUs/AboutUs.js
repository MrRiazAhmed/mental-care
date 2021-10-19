import React from 'react';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="about">
            <h1 className="text-center fw-bold pt-3 text-dark">About Mental Care</h1>
            <hr />
            <p className="text-center">Mental Care is the leading community-based non-profit dedicated to <br /> addressing the needs odf those living with mental illnes and to promoting the overall mental health of all</p>

            <h1 className="text-center fw-bold text-dark">Our Mission</h1>
            <hr />
            <p className="text-center pb-5">Mental Health America (MHA)'s work is driven by its commitment to promote <br /> mental health as a critical part of overall wellness, including prevention services for all; <br /> early identification and intervention for those at risk; <br /> integrated care, services, and supports for those who need them; with recovery as the goal.</p>
        </div>
    );
};

export default AboutUs;