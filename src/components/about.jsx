import React, {useEffect} from "react";
import about1 from "../images/about1 (1).jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
function About(){

    const imagestyle ={
        width: '50%'
    }
    useEffect(() => {
        AOS.init({
          duration: 1300,
          easing: 'ease-in-out',
        });
      }, []);
    return(
        <div className="about">
            <div className="aboutContent">
                <div className="aboutUs"  data-aos="fade-left">
                    <span></span>
                    <span>
                    Welcome to HealthLink, your convenient online appointment reservation platform for our clinic. Our mission is to provide accessible and efficient healthcare services through an innovative online platform, empowering individuals to take control of their health with ea
                    </span>
                    <span>
                    At HealthLink, we value your time and well-being. Our user-friendly interface allows you to easily browse available time slots, select a preferred healthcare professional, and secure your appointment at your convenience.
                    </span>
                    <span>
                    We are dedicated to delivering exceptional care through our team of highly skilled and compassionate medical practitioners. Whether you require routine check-ups, specialized treatments, or preventive healthcare services, we are here to cater to your needs. Patient-centered care is at the heart of what we do, as we aim to establish long-lasting relationships built on trust and mutual respect.
                    </span>
                </div>
                <div className="image"  data-aos="fade-left" data-aos-duration='2500'>
                    <img src={about1} alt="" />
                </div>
            </div>
            <div className="aboutContent">
                <div className="vision"  data-aos="fade-right" data-aos-duration='2500'>
                    <span>
                    Vision:
                    </span>
                    <span>
                    To bridge the gap between healthcare providers and patients, revolutionizing the way healthcare services are accessed and delivered. We strive to be the premier online appointment reservation platform, providing a seamless and efficient healthcare experience.
                    </span>
                </div>
                <div className="image" data-aos="fade-right" data-aos-duration='2500'>
                    <img src={about2} alt="" />
                </div>
            </div>
            <div className="aboutContent">
                <div className="mission" data-aos="fade-left" data-aos-duration='2500'>
                    <span>
                    Mission:
                    </span>
                    <span>
                    To empower individuals in managing their health by providing a user-friendly platform that enables easy appointment booking, reliable access to healthcare professionals, and a wealth of resources for informed decision-making.
                    Your privacy and confidentiality are of utmost importance to us. We employ advanced security measures to safeguard your personal information and medical records, ensuring they are protected at all times.
                    </span>
                </div>
                <div className="image" data-aos="fade-left" data-aos-duration='2500'>
                <img src={about3} alt="" />
                </div>
            </div>
            <div className="aboutContent">
                <div className="aboutUs" data-aos="fade-right" data-aos-duration='2500'>
                    <span></span>
                    <span style={{textAlign: 'center'}}>
                    Thank you for choosing HealthLink as your trusted partner in healthcare. We are excited to serve you and support you in your journey towards a healthier and happier life.
                    </span>
                </div>
                <div className="image">
                </div>
            </div>
        </div>
    )
}

export default About;