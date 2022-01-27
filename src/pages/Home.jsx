import React from 'react'
import { Footer, Why, OurProcess, Whatwedo, Hero, OurProducts } from "../containers"
import { Call, Brand, Navbar } from "../components"
import "./pages.css"

const Home = () => {
    return (
        <div className='e__home'>
            <div className='container'>
                <Navbar />
                <Hero />
            </div>
            <Whatwedo />
            <OurProducts />
            <OurProcess />
            <Why />
            <Call txxt="/contact" smalltext="Request for a quote" bigtext="Contact us today and request a quote for your Application" btntext="Contact Us" />
            <Brand />
            <Footer />
        </div>
    )
}

export default Home
