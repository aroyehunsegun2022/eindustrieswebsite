import React from 'react'
import { Footer, Banner, Integrity } from "../containers"
import { Navbar } from "../components"
import "./pages.css"

const About = () => {
    return (
        <div>
            <div className='nav-container'>
                <Navbar />
            </div>
            <Banner />
            <Integrity />
            <Footer />
        </div>
    )
}

export default About
