import React from 'react'
import { Icons } from "../../components"
import "./integrity.css"
import pic1 from "../../assets/experience.png"
import pic2 from "../../assets/security.png"
import pic3 from "../../assets/clock.png"

const Integrity = () => {
    return (
        <div className='e__integrity'>
            <Icons img={pic1} title="Experienced" text="We are experienced in building products that meet the needs of our clients, offer satisfaction and give value." />
            <Icons img={pic2} title="Security" text="We are keen on protecting data from unauthorized access and ensuring that all data gathered is secured" />
            <Icons img={pic3} title="Early Delivery" text="Our goal is to serve and satisfy our clients. We achieve this with swift delivery of products within stipulated time. " />
        </div>
    )
}

export default Integrity
