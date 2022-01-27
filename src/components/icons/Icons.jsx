import React from 'react'
import "./icons.css"

const Icons = ( {img, title, text }) => {
    return (
        <div className='e__icons'>
            <div className='e__icons-img'>
                <img src={img} alt='icons' />
            </div>
            <div className='e__icons-content'>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Icons
