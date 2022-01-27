import React, { useState } from 'react'
import "./form.css"

const Form = () => {
    
    const [addfname, setAddFname] = useState('')
    const [addemail, setAddEmail] = useState('')
    const [addmsg, setAddMsg] = useState('')
    const [successRes, setSuccessRes] = useState('')

    const handleFnameChange = (event) => {
        setAddFname(event.target.value)
        console.log(addfname)
    }

    const handleEmailChange = (event) => {
        setAddEmail(event.target.value)
        console.log(addemail)
    }

    const handleMsgChange = (event) => {
        setAddMsg(event.target.value)
        console.log(addmsg)
    }

    const handleSubmit = (event)=> {
        
        event.preventDefault()
        // const formdeets = {addfname, addemail, addmsg}
        fetch("http://127.0.0.1:5000/api/send/", {
            method:'POST',
            mode: 'cors',
            headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'}, 
            body: JSON.stringify({addfname, addemail, addmsg})
         }).then(response => response.json())
            .then(message => console.log(message))
            setAddFname('')
            setAddEmail('')
            setAddMsg('')
            setSuccessRes('success')
    }


    return (
       
        
        <div className='e__form'>
           <div className='e__form-top-container'>
               <div className='e__form-backdrop'></div>
               <div className='e__form-header'>
                   <h2>Leave Us a Message</h2>
                   <p>Talk to us about your project</p>
               </div>
           </div>
           <div className='e__form-house'>
               <div className='e__form-box'>
               <div className='resp'>{successRes && <h4>Your Message has been received!</h4>}</div>
                    <form onSubmit={handleSubmit}>
                    
                        <input type="text" placeholder="Fullname" value={addfname} onChange={handleFnameChange} />
                        <input type="email" placeholder="Email Address" value={addemail} onChange={handleEmailChange}/>
                        <textarea placeholder='Message' value={addmsg} onChange={handleMsgChange}></textarea>
                        <button className='submit-btn'>Send Message</button>                       
                    </form>
               </div>
           </div>
        </div>
      
    )
}

export default Form
