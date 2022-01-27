import React from 'react'
import { Box } from '../../components'
import "./portfolio.css"
import skinsolpic from "../../assets/skinsol2.png"
import eerrandpic from "../../assets/eerrand.jpg"

const Portfolio = () => {
    return (
        <div className='e__portfolio section__padding'>
            <div className='e__portfolio-content'>
                <h2>Applications we have built for our customers</h2>
                <p>We use innovative modern technologies to meet the needs of our customers and ensure that the products created with this technology address their exact needs</p>
            </div>
            <div className='e__portfolio-box'>
                    <Box imagee={skinsolpic} title="Skinsol App" details="An e-commerce web application developed by our team of tech experts for this business to enable its customers search for new and existing products to purchase, make payments online and facilitate the delivery of the products selected" btn1="PHP" btn2="JavaScript" btn3="MySQL" btn4="html/css" />
                    <Box imagee={eerrandpic} title="e-Errand" details="An errand application where users can use the product to optimize their day-to-day activities that have to do with errands, logistics, household chores, and outdoor chores. " btn1="Flask" btn2="JavaScript" btn3="MySQL" btn4="html/css" />
                    <Box imagee={eerrandpic} title="e-Auction" details="An errand application where users can use the product to optimize their day-to-day activities that have to do with errands, logistics, household chores, and outdoor chores. " btn1="Flask" btn2="JavaScript" btn3="MySQL" btn4="html/css" />
            </div>
        </div>
    )
}

export default Portfolio
