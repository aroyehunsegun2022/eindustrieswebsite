import React from 'react'
import "./ourteam.css"
import { Box } from '../../components'
// import teamimg from "../../assets/team.jpg"
import teamimg from "../../assets/team.jpg"
const OurTeam = () => {
    return (
        <div className='e__ourteam section-margin'>
            <Box imgurl={teamimg} name='Segun Aroyehun' title='Senior Manager' />
        </div>
    )
}

export default OurTeam

