import React, { useEffect } from 'react'
import { Footer } from "../containers"
import { Navbar, Form, Call } from "../components"
import "./pages.css"
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
    // const [test, setTest] = useState([])
    // const [addinput, setAddInput] = useState('')
    // const [addinputt, setAddInputt] = useState('')
    // const [addinputtt, setAddInputtt] = useState('')

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api', { method: 'GET',
        dataType: 'json' }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    },[])

    // const handleFormChange


    return (
        <div className='e__contact'>
            <div className='nav-container'>
                <Navbar />
            </div>
            {/* <h1> Contact Us Today</h1> */}
            <div className='e__contact-form'>
                <Form/>
            </div>
            
            <div className='e__join-us'>
                <Call txxt="https://docs.google.com/forms/d/e/1FAIpQLSdWfUX21fUcWXPMUmrpTXGot08u3PNnvRiGpzAy-eyQeJbyUQ/viewform?usp=sf_link" smalltext="Want to join our team?" bigtext="We always welcome like-minded individuals to our team" btntext="Join Us" />
            </div>
            {/* <div className='e__foot-links'> 
                <div className='e__foot-links_div'>
                    <h4><i className="fas fa-envelope"></i>Email</h4>
                    <p>abc@bbb.com</p>
                </div>
                <div className='e__foot-links_div'>
                    <h4><i className="fas fa-phone-alt"></i>Phone</h4>
                    <p>+23451675541</p>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default Contact
