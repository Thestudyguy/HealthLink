import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Email(){
    const form = useRef();
    const sendEmail = (e) => {
        const fields = Fields();
        e.preventDefault();
    
       try {
        if(fields){
            emailjs.sendForm('service_up4oq2q', 'template_lejfjud', form.current, 'HwxmX_9pPuPBRlFZv')
            .then((result) => {
                alert("Email sent", result);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
        }
        else{
            alert("Fill all fields")
        }
       } catch (error) {
        alert("Something is wrong")
        console.log(error);
       }
      };
      function Fields(){
        const name = form.current.elements.name.value;
        const email = form.current.elements.email.value;
        const message = form.current.elements.message.value;
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
          return false;
        }
      
        return true;
      }
    return(
        <div className="email">
            <form ref={form} action="">
                <div className="text" data-aos="fade-right">
                    <div className="">
                        <span>
                        Let's start a conversation! Send us an email, and we'll make sure your concerns are addressed.                           
                        </span>
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
                <div className="emailContainer"  data-aos="fade-left">
                    <div className="" data-aos='fade-left' data-aos-duration="1200">
                        <input type="text" name="name" id="" placeholder="Name" required/>
                    </div>
                    <div className="" data-aos='fade-left' data-aos-duration="1400">
                        <input type="email" name="email" id="" required placeholder="Email"/>
                    </div>
                    <div className="" data-aos='fade-left' data-aos-duration="1600">
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