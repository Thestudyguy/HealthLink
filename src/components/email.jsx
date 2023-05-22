import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Email(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_up4oq2q', 'template_lejfjud', form.current, 'HwxmX_9pPuPBRlFZv')
          .then((result) => {
              alert("Email sent", result);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="email">
            <form ref={form} action="">
                <div className="text">
                    <div className="">
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam.                        </span>
                    </div>
                    <div className="">
                        <span>
                            Typically responds within 1 business day
                        </span>
                    </div>
                    <div className="">
                        <span>
                            HealthLink@gmail.com
                        </span>
                    </div>
                </div>
                <div className="emailContainer">
                    <div className="">
                        <input type="text" name="name" id="" placeholder="Name" required/>
                    </div>
                    <div className="">
                        <input type="email" name="email" id="" required placeholder="Email"/>
                    </div>
                    <div className="">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                    </div>
                    <div className="">
                        <button onClick={sendEmail}>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Email;