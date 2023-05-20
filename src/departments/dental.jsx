import React from "react";
import neurologist from "../images/Neurologist.jpg";

function Dental(){
    return(
        <div className="Neurology">
      <div className="DepartmentTexts">
        <div className="">
        <span className="title">
          Dental Department
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
                <b>Smile Makeovers: </b>
                Transform your smile and boost your confidence with our dental department's
                 expertise in cosmetic dentistry. From teeth whitening
                 to veneers, we create stunning smiles that leave a lasting impression.
              </span>
            </div>
            <div className="">
              <span>
                <b>Advanced Technology:</b>
                Experience the future of dentistry with our state-of-the-art
                 equipment and techniques. Our dental department embraces
                  cutting-edge technology, ensuring precise diagnoses, 
                  comfortable treatments, and efficient results for our patients.
              </span>
            </div>
          </div>
          <div className="featureContainer2">
            <div className="">
              <span>
                <b>Caring Professionals: </b>
                Our compassionate dental team understands the importance of personalized care. 
                We take the time to listen, address your concerns, and tailor treatments
                 to your unique needs,
                 ensuring a comfortable and stress-free experience during every visit.
              </span>
            </div>
            <div className="">
              <span>
                <b>Comprehensive Services:  </b>
                We offer a wide range of dental services under one roof, 
                making us your one-stop solution for all your oral health needs. 
                From preventive care and general dentistry to orthodontics and oral surgery, 
                our dental department has you covered for a lifetime of healthy smiles.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="DepartmentImage">
          <img src={neurologist} alt=""/>
      </div>
    </div>
    )
}

export default Dental;