import React, {useState, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import neurologist from "../images/Neurologist.jpg";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user5 from "../images/user5.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Testimonies(){
    const imgstyle = {
        width: '200%',
        borderRadius: '50%'
    }
    const [activeSlide, setActiveSlide] = useState(0);
    const slideCount = 4;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slideCount);
      }, 8000);
  
      return () => {
        clearInterval(interval);
      };
    }, [slideCount]);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
        });
      }, []);
    return(
        <div className="testimonies" data-aos="fade-right">
            <div className="testimony-text">
                <span className="title">
                    Testimonies
                </span>
                <span className="caption">
                    Our patient says about us
                </span>
                <span className="subtext">
                    Here is some of our patient and what they say about us
                </span>
            </div>
            <div className="slideContainer">
                <Carousel  selectedItem={activeSlide}
                           onChange={(index) => setActiveSlide(index)}>
                <div className="sliderContent">
                    <div className="image">
                        <img src={user1} alt="" style={imgstyle}/>
                    </div>
                    <div className="content">
                       <div className="">
                         <span>The staffs in this clinic is very accomodating and professional i signed up for their membership because they are good. Every body so friendly and they made me feel relaxed and cared. </span>
                       </div>
                        <span>-Mark</span>
                    </div>
                </div>
                <div className="sliderContent">
                    <div className="image">
                        <img src={user2} alt="" style={imgstyle}/>
                    </div>
                    <div className="content">
                       <div className="">
                         <span>I would like to thank the staffs, especially to the doctor, that they treated me like I am the only patient that they have in there clinic. They have a wonderful clean room and very beautiful view that can made me relaxed and they keep visiting me to check up if I am ok.</span>
                       </div>
                        <span>-Dave</span>
                    </div>
                </div>
                <div className="sliderContent">
                    <div className="image">
                        <img src={user3} alt="" style={imgstyle}/>
                    </div>
                    <div className="content">
                       <div className="">
                         <span>As I enter to the clinic the nurses greets me I feel respected and they guide me. The staffs are quick  to respond and very efficient to do their job no issues encountered during laboratory  and yet very organize. I am very impressed of their kindness and how they care a patient.</span>
                       </div>
                        <span>-John</span>
                    </div>
                </div>
                <div className="sliderContent">
                    <div className="image">
                        <img src={user5}  alt="" style={imgstyle}/>
                    </div>
                    <div className="content">
                       <div className="">
                         <span>I've been to so many clinics and all was good but this clinic was my favorite now. I love the way they treat the patient as their own family. And I would like to thank Doc Ed, I fully recovered now from my injured leg. God bless all the staff and doctors out there.
                        </span>
                       </div>
                        <span>-Roslyn</span>
                    </div>
                </div>
                </Carousel>
            </div>

        </div>
    )
}

export default Testimonies;