import React, { useState } from 'react'
import "./box.css"
// import img from "../../assets/team.jpg"
// import imagee from "../../assets/team.jpg"

const Box = ({title, details, btn1, btn2, btn3, btn4, imagee }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(true);
      };

    const onLeave = () => {
        setHover(false);
      };

    return (
        <div className='e__box' onMouseEnter={onHover}
        onMouseLeave={onLeave}
        role="button"
        tabIndex="-3" style={{ backgroundImage: 'url(' + imagee + '), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))' }}>
                <div className='e__box-content'  style={{ display: hover ? "block" : "none"}}>
                    <h1>{title}</h1>
                    <p className='note'>{details}</p>
                    <div className='btns'>
                        <p>{btn1}</p>
                        <p>{btn2}</p>
                        <p>{btn3}</p>
                        <p>{btn4}</p>
                    </div>
                </div>
            
        </div>
    )
}

export default Box
