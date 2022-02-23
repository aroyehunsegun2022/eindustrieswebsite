import React from 'react'
import { Feature } from '../../components'
import "./ourproducts.css"

const OurProducts = () => {
    return (
        <div className='e__whate section__margin' id='ourproducts'>
            <div className='e__whate-feature'>
                <Feature title="Our Products" text="" />
            </div>
            <div className='e__whate-heading'>
                <h1 className='heading-text'>A few of our products</h1>
                <p>explore now</p>
            </div>
            <div className='e__whate-container'>
                <Feature title="e-errand" text="This is our first product, and it was designed to create employment opportunities for individuals. It is an open-source product that offers logistics services to aid timely delivery of products for businesses, to ensure swift and accurate response to errands with a real-time monitoring system." />
                <Feature title="e-auction" text="e-auction is developed to provide live listing and auctioning services for individuals and corporate bodies. You will get to see items available to be auctioned and be able to bid for them. Watch this space" />
                <Feature title="e-pawn" text="A web application that enables users to pawn items and receive instant payment. Individuals can also join a live bidding of items" />
            </div>
        </div>
    )
}

export default OurProducts

