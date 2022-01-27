import React from 'react'
import { Footer, Portfolio } from "../containers"
import { Navbar } from "../components"

const OurWork = () => {
    return (
        <div>
            <div className='nav-container'>
                <Navbar />
            </div>
            <Portfolio />
            <Footer />
        </div>
    )
}

export default OurWork
