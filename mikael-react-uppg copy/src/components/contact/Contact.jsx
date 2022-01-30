import React from 'react'
import { useState } from 'react';
import "./contact.scss";
import Image1 from "../assets/birdie.png";


export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="containerC">
        <div class="contact" id="contact">
            <h1 class ="">Contact <span class="blueWord"> Me</span></h1>
             </div>
                 <div className="wrapperContact">
                     <div className="leftContact">
                       <img src={Image1} />
                    </div>
                     <div className="rightContact">
                             <h1>Contact<span class="blueWord">.</span></h1>
                              <form onSubmit={handleSubmit}>
                                  <input type="text" placeholder="Email"/>
                                  <textarea placeholder="Message" rows="4"></textarea>
                                  <button type="submit">Send</button>
                                  {message && <span>Thank you for your message!</span>}
                              </form>
                     </div>
                  </div>
            
        </div>
    )
}
