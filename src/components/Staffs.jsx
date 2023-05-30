import React from "react";
import doctor1 from "../images/doctor1-removebg-preview.png";
import doctor2 from "../images/doctor2-removebg-preview.png";
import doctor3 from "../images/doctor3-removebg-preview.png";
import doctor4 from "../images/doctor4-removebg-preview.png";
function Staffs(){
    const imageStyle ={
        width: '100%',
    }
    return(
        <div className="doctors" data-aos="fade-right">
           <div className="intro">
                <span>meet our Qualified Doctors</span>
           </div>
           <div className="doctorContainer">
                <div className="">
                    <img src={doctor1} alt="" style={imageStyle}/>
                    <span className="name">Dr. Carl Edrie Flores</span>
                    <span className="years">Physician</span>
                    <span className="field">25 years in the field</span>
                    <span className="expertise">Chief Surgeon</span>
                </div>
                <div className="">
                    <img src={doctor2} alt="" style={imageStyle}/>
                    <span className="name">DR. Oliver Sacks</span>
                    <span className="years">10 years of experience</span>
                    <span className="field">Neurologist</span>
                    <span className="expertise">Geriatric neurology.</span>
                </div>
                <div className="">
                    <img src={doctor3} alt="" style={imageStyle}/>
                    <span className="name">DR. Roslyn Castro</span>
                    <span className="years">8 years in service</span>
                    <span className="field">Dentist</span>
                    <span className="expertise"></span>
                </div>
                <div className="">
                    <img src={doctor4} alt="" style={imageStyle}/>
                    <span className="name">DR. Jenny Williams</span>
                    <span className="years">16 years in the field</span>
                    <span className="field">Cardiologist</span>
                    <span className="expertise">Preventive Cardiologist</span>
                </div>
           </div>
        </div>
    )
}

export default Staffs;