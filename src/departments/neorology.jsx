import React from "react";
import neurologist from "../images/Neurologist.jpg";
function Neorology() {
  return (
    <div className="Neurology">
      <div className="DepartmentTexts">
        <div className="">
        <span className="title">
          Neurological Department
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
                <b>Expert neurologists: </b>
                Our clinic is home to a team 
                of highly skilled and experienced neurologists who 
                excel in diagnosing and treating a variety of neurological
                 conditions.
              </span>
            </div>
            <div className="">
              <span>
                <b>Cutting-edge technology:</b>
               We utilize state-of-the-art 
              diagnostic equipment to ensure accurate and precise
               evaluations, enabling us to provide the best possible
                care for our patients.
              </span>
            </div>
          </div>
          <div className="featureContainer2">
            <div className="">
              <span>
                <b>Comprehensive approach: </b>
              Our neurology department takes a holistic 
              approach to patient care, considering all aspects of neurological 
              health to develop personalized treatment plans tailored to each 
              individual.
              </span>
            </div>
            <div className="">
              <span>
                <b>Positive outcomes: </b>
              Our track record speaks for itself, 
              with numerous success stories of patients who have regained 
              control of their lives through our specialized neurology 
              treatments. Join us on your journey to better neurological health.
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
export default Neorology;