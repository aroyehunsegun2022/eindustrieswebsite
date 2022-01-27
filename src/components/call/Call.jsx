import React from 'react'
// import { Link } from 'react-router-dom'
import "./call.css"

const Call = ({btntext, smalltext, bigtext,txxt }) => {
    return (
        <div className='e__call section__margin'>
            <div className='e__call-content'>
                <p>{smalltext}</p>
                <h3>{bigtext}</h3>
            </div>
            <div className='e__call-btn'>
                {/* <Link className='call-btn' to={txxt}>{btntext}</Link> */}
                <a href={txxt} className='call-btn'>{btntext}</a>
            </div>
        </div>
    )
}

export default Call

