import React from "react";
import ophthalmologist from "../images/ophthalmologist.jpg";
function Ophthalmology(){
    return(<div className="Neurology">
    <div className="DepartmentTexts">
      <div className="">
      <span className="title">
        Ophthalmology Department
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
              <b>Expert Eye Care:  </b>
              Trust your vision to our team of experienced ophthalmologists who specialize in comprehensive eye care. We are dedicated to providing top-notch care for your precious eyesight.
            </span>
          </div>
          <div className="">
            <span>
              <b>Advanced Technology: </b>
              Our ophthalmology department is equipped with cutting-edge technology, allowing for precise diagnoses and effective treatments. Experience the latest advancements in eye care for optimal outcomes.
            </span>
          </div>
        </div>
        <div className="featureContainer2">
          <div className="">
            <span>
              <b>Comprehensive Services:  </b>
              From routine eye exams to advanced surgical procedures, our ophthalmology department offers a wide range of services to address various eye conditions. We provide comprehensive care tailored to your individual needs.
            </span>
          </div>
          <div className="">
            <span>
              <b>Personalized Approach:  </b>
              We understand that each patient is unique. Our ophthalmology team takes a personalized approach, considering your specific needs and preferences. We prioritize your comfort and satisfaction throughout your eye care journey.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="DepartmentImage">
        <img src={ophthalmologist} alt=""/>
    </div>
  </div>)
}

export default Ophthalmology;