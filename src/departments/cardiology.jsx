import React from "react";
import cardiologist from "../images/cardiologist.jpg";
function Cardiology(){
    return(
        <div className="Neurology">
      <div className="DepartmentTexts">
        <div className="">
        <span className="title">
          Cardiology Department
        </span>
        </div>
        <div className="">
          <span className="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vero.
          </span>
        </div>
        <div className="featureContainer">
          <div className="featureContainer1">
            <div className="">
              <span>
                <b>Heart Health Experts: </b>
                Trust your heart to our team of dedicated cardiologists who specialize in diagnosing and treating cardiovascular conditions, ensuring the best care for your heart.
              </span>
            </div>
            <div className="">
              <span>
                <b>State-of-the-Art Facilities:</b>
                Our cardiology department is equipped with advanced technology and state-of-the-art facilities, allowing for accurate diagnoses and cutting-edge treatments.
              </span>
            </div>
          </div>
          <div className="featureContainer2">
            <div className="">
              <span>
                <b>Patient-Centered Approach: </b>
                We prioritize your well-being and take a personalized, patient-centered approach to cardiology care. Our compassionate team listens to your concerns, educates you about your condition, and collaborates with you to develop a customized treatment plan.
              </span>
            </div>
            <div className="">
              <span>
                <b>Comprehensive Cardiac Services:  </b>
                From preventive screenings to complex interventions, our cardiology department offers a comprehensive range of services to address all aspects of heart health, tailored to your individual needs.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="DepartmentImage">
          <img src={cardiologist} alt=""/>
      </div>
    </div>
    )
}
export default Cardiology;