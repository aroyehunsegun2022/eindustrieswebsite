import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"
import hero1 from "../../assets/heropic.png"

const Hero = () => {
    return (
        <div>
            <div className='e__header section__padding'>
                <div className='e__header-content'>
                    <h1 className='header-text'>Creating scalable products to solve real life problems</h1>
                    <p>We meet your needs and ensure satisfaction by Creating applications that run on mobile, web and desktop. At eIndustries, we deliver functional and quality products</p>
                    <div className='e__header__btn'>
                        <Link className='header-btn' to="/contact">Get Started</Link>
                    </div>
                </div>
                <div className='e__header-img'>
                        <img src={hero1} alt="tech" />
                </div>
            </div>
        </div>
    )
}

export default Hero

