import React from "react";
import neurologist from "../images/Neurologist.jpg";

function Surgical() {
    return(
        <div className="Neurology">
        <div className="DepartmentTexts">
          <div className="">
          <span className="title">
            Surgical Department
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
                  <b>Skilled Surgeons: </b>
                  Our expert surgical team ensures exceptional care and optimal outcomes.
                </span>
              </div>
              <div className="">
                <span>
                  <b>Advanced Technology: </b>
                  Benefit from cutting-edge surgical techniques and equipment for precision and faster recovery.
                </span>
              </div>
            </div>
            <div className="featureContainer2">
              <div className="">
                <span>
                  <b>Comprehensive Procedures: </b>
                  From oral surgery to dental implants, we offer a range of specialized treatments.
                </span>
              </div>
              <div className="">
                <span>
                  <b>Compassionate Care: </b>
                  Experience a supportive and comforting environment throughout your surgical journey.                </span>
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

export default Surgical;