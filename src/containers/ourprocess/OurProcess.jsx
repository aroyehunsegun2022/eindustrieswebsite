import React from 'react'
import { Feature } from '../../components'
import "./ourprocess.css"
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const processes = [
    {title: "Research", text: "To ensure that our products meet the needs of our prospective users, we conduct research to determine what best suits them, how to design and develop to meet their needs, and the scalability of the product."},
    {title: "Design", text: "Identifying the needs of our prospective users makes it a lot easier to design suitable and relevant products, and in the process ensure the users have great user experience with the product. "},
    {title: "Development", text: "With the data gathered during the research and the design created with the data, our proficient developers develop these products to meet the needs of our prospective users."},
    {title: "Deploy", text: "Deployment happens after the products have been developed and tested. At this point the developed products are ready to be used in a real-life environment by all end users of the product. "},
]
const OurProcess = () => {
    return (
        <div className='e__ourprocess section__padding'>
            <div className='e__ourprocess-heading'>
                <h1>Our Systematic Approach to Development</h1>
                <p>See our steps</p>
            </div>
            <div className='e__ourprocess-container'>
                {processes.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default OurProcess

