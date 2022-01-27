import React from 'react'
import { Feature } from '../../components'
import "./ourproducts.css"

const OurProducts = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='ourproducts'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="Our Products" text="We build internal products that aims at developing modern technological solutions to address real-life problems" />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='heading-text'>Here are some of our products</h1>
                <p>explore now</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="e-errand" text="This is our first product, and it was designed to create employment opportunities for individuals. It is an open-source product that offers logistics services to aid timely delivery of products for businesses, to ensure swift and accurate response to errands with a real-time monitoring system." />
                <Feature title="e-auction" text="e-auction is developed to provide live listing and auctioning services for individuals and corporate bodies. You will get to see items available to be auctioned and be able to bid for them. Watch this space" />
                <Feature title="e-pawn" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm" />
            </div>
        </div>
    )
}

export default OurProducts

