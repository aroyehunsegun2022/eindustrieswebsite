import React from 'react'
import { Services } from '../../components'
import webimg from "../../assets/webpic.png"
import appimg from "../../assets/mobilepic.png"
import automationimg from "../../assets/processpic.png"
import softwareimg from "../../assets/software.png"
import "./whatwedo.css"

const Whatwedo = (props) => {
    return (
        <div className='e__what '>
            <div className='e__what-title'>
                <h1>What We Do</h1>
            </div>
            <div className='e__what-large'>
                <Services title="Web Development" details="When it comes to web application developments, responsiveness and compatibility/ease of use is a factor. We use cutting-edge technology to design and develop web applications for our clients, we do not leave them to figure it out on their own after deploying, we follow through and provide 24/7 support to ensure they record zero downtime." imgurl={webimg} />
                <Services title="Mobile Development" details="From product ideation to wire-framing to User interface/user experience and then development, we work closely with our clients to achieve an MVP and upon review and acceptance, a perfect IOS/ANDRIOD application that communicates values and has great user experience. " imgurl={appimg} isReversed />
                <Services title="Process Automation" details="We bring ideas conceived into reality for our clients. From the point of conception to designing, programming, documenting, testing and deployment, our team of expert are available to make the work easier. " imgurl={automationimg} />
                <Services title="Software Development" details="With our cutting-edge technology tools and strategy, we help you to execute recurring tasks and processes. We are interested in minimizing costs for your business and increasing efficiency at the same time. " imgurl={softwareimg} isReversed />
            </div>
        </div>
    )
}

export default Whatwedo

