import React from 'react'
// import whyimg from "../../assets/whyy14.png"
import whyimg from "../../assets/eIwhhy.png"
import "./why.css"

const Why = () => {
    return (
        <div className='e__why'>
            <div className='e__why-img'>
                <img src={whyimg} alt="why choose us" />
            </div>
            <div className='e__why-content'>
                <h4><a href='/about'>Find out more about us</a></h4>
                <h1>Why Choose eIndustries</h1>
                <p>Have you ever wanted a tech-enabled company highly invested in quality products that solve real life problems and at the same time contribute to developing and upscaling the Nigerian Economy and Africa at large through technological innovations geared at providing solutions? Then you are at the right place. Our audience are our top-most priority and as such we develop products that meet their needs and at the same time provide them with satisfaction while using our products. </p>
                <h4 className='bottom-h4'><a href='/about'>Find out more about us</a></h4>
            </div>
        </div>
    )
}

export default Why

