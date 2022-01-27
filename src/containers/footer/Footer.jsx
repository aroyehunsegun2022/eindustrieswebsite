import React from 'react'
// import { Link } from 'react-router-dom'
import "./footer.css"
import elogo from "../../assets/efooter.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {

    const currentYear =new Date().getFullYear()

    return (
        <div className='e__footer'>
            <div className='e__footer__heading'>
                {/* <h1>View some of our projects and lorem lorem lorem lorem</h1> */}
            </div>
            <div className='e__footer-btn'>
                <p><a href='/our/work'>view our portfolio</a></p>
            </div>
            <div className='e__footer-links'>
                <div className='e__footer-links_logo'>
                    <img src={elogo} alt='logo'/>
                    <p>eIndustries mission is to make the world a
                        technology powered community. We intend
                        to transform the way the world works by
                        delivering products and services that connect
                        the physical and digital worlds</p>
                </div>
                <div className='e__footer-links_div'>
                    <h4>Links</h4>
                    <p><a href='jhsdg'><MailOutlineIcon sx={{ fontSize: 12, marginRight: 1 }} />email</a></p>
                    <p><a href='jhsdg'><LinkedInIcon sx={{ fontSize: 12, marginRight: 1 }} />linkedin</a></p>
                    <p><a href='jhsdg'><InstagramIcon sx={{ fontSize: 12, marginRight: 1 }} />Instagram</a></p>
                    
                </div>
                <div className='e__footer-links_div'>
                    <h4>Company</h4>
                    <p><a href='/about'>About us</a></p>
                    <p><a href='policy'>Privacy Policy</a></p>
                    {/* <p><a href='jhsdg'>safdsgfsh</a></p> */}
                </div>
                <div className='e__footer-links_div loc'>
                    <h4>Get in touch</h4>
                    <p><LocationOnIcon sx={{ fontSize: 12, marginRight: 1 }} />USA Address <br/>  6970 n ridge blvd, chicago, illinois 60645 USA</p>
                    <p><PhoneIcon sx={{ fontSize: 12, marginRight: 1 }} />+1 (404) 451-6049</p>
                    <p><LocationOnIcon sx={{ fontSize: 12, marginRight: 1 }} />Nigerian Address <br/>  34 Agbebi Street, Surulere, Lagos Nigeria.</p>
                    <p><PhoneIcon sx={{ fontSize: 12, marginRight: 1 }} />+234(0)8136811613</p>
                    
                </div>
            </div>
            <div className='e__footer-copyright'>
            <hr />
                <p>copyright © {currentYear}, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer

