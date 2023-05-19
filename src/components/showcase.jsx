import React from "react";
import doctor from "../images/doctor.png";
import ambulance from "../images/ambulance.png";
import hour from "../images/chat.png";
import stethoscope from "../images/stethoscope.png";
function Showcase(){
    return(
        <div className="showCase">
           <div className="">
            <img src={doctor} alt="" />
            <span>Qualified Doctors</span>
            <span>
                Our healthcare facility is staffed by highly skilled and experienced doctors who have undergone rigorous training
                 and possess the necessary qualifications to provide top-quality medical care.
            </span>
           </div>
           <div className="">
           <img src={ambulance} alt="" />
           <span>Emergency Care</span>
           <span>
                We offer round-the-clock emergency care services to ensure immediate medical attention 
                and prompt treatment for critical conditions and unforeseen medical emergencies.
           </span>
           </div>
           <div className="">
           <img src={stethoscope} alt="" />
           <span>General Check Up</span>
           <span>
                Our comprehensive healthcare services include regular general check-ups, allowing individuals to monitor their overall health, 
                detect any potential issues early on, and receive appropriate medical guidance.
           </span>
           </div>
           <div className="">
           <img src={hour} alt="" />
           <span>24 Hours</span>
           <span>
                With our 24/7 availability, you can rely on our healthcare professionals to address your medical concerns and provide necessary assistance
                 at any time, day or night, ensuring continuity of care and peace of mind.
           </span>
           </div>
        </div>
    )
}
export default Showcase;