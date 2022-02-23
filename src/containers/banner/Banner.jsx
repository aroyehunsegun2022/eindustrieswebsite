import React from 'react'
import img from "../../assets/about2.jpg"
import "./banner.css"

const Banner = () => {
    return (
        <div className='e__banner'>
            <div className='e__banner-content'>
                <h1>eIndustries, A LEADING SOFTWARE COMPANY IN NIGERIA</h1>
                <p>We are a team of young and talented individuals that loves technology, we are passionate about what we do and aims to change the world by making life worth living for all through technological innovations. Imagine a world where technology does everything you want it to do at the tap of a button, we intend to get you there. 
                Our products are human centered, and designed to get you to the point where your daily activities can be automated, and you can go about your regular worries with less worries because technology has taken care of it. 
                We are the bridge connecting you to ease and comfort and less worries with technology. 
                We are eIndustries, and we are here to give you satisfaction.</p>
            </div>
            <div className='e__banner-img'>
                <img src={img} alt="about-pic" />
            </div>
        </div>
    )
}

export default Banner
