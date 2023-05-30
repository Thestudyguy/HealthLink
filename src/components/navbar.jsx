import React, {useState, useEffect} from "react";
import {ref, push} from 'firebase/database';
import { db } from "../firebaseConfig";
function Navbar(){
  const dbref = ref(db, "Appointments");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflowY = 'auto'

    }
  },[isOpen])

  const [data, setData] = useState({
    fullname: "",
    email: "",
    department: "",
    date: "",
    time: "",
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setData({ ...data, time: selectedTime });
  };
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setData({ ...data, date: selectedDate });
  };
  
  function submit(e){
    const formattedDate = new Date(data.date).toLocaleDateString('en-US');
  const [hours, minutes] = data.time.split(':');
  const time = new Date();
  time.setHours(hours);
  time.setMinutes(minutes);
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
    e.preventDefault();
    for( let key in data){
      if(data[key].trim() === ""){
        alert("missing fields");
        break;
      }
      else{
        push(dbref, { ...data, date: formattedDate, time: formattedTime })
        .then(()=>{
          alert('push succesful')
          closeModal();
          setData({
            fullname: "",
            email: "",
            department: "",
            date: "",
            time: "",
          })
        }).catch((error)=>{
          console.error(error);
        })
      }
    }
    /* works fine but very long code
     if(data.fullname.trim() === "" || data.email.trim() || data.department.trim() || data.time.trim() || data.date.trim()){
      alert("Missing Fields");
    }
    else{
       push(dbref, { ...data, date: formattedDate, time: formattedTime })
    .then(()=>{
      alert('push succesful')
      closeModal();
      setData({
        fullname: "",
        email: "",
        department: "",
        date: "",
        time: "",
      })
    }).catch((error)=>{
      console.error(error);
    })
  }
    */
   
    }
   
  const handledept = (e) => {
    setData({ ...data, department: e.target.value });
  };
   return(
     <div className="navbar">
        <div className="navbarItems" data-aos='fade-left' data-aos-duration='1400'>
            <div className="title">
                Health<span id="color">Link</span>
            </div>
            <ul className="items">
                <li>
                    <button onClick={openModal}>Make an Appointment</button>
                </li>
              
            </ul>
        </div>
        {isOpen && 
        <div className="appointment fade-in">
        <div className="fade">
        <div className="text">
          <span>Appointment will be approved by the secretary. Email will be sent to you</span>
        </div>
        
        <div className="appointmentContainer">
          <form action="">
            <div className="">
              <input className="creds"
               type="text" 
               autoComplete="off"
               name="fullname"
               id=""
               placeholder="Full Name"
               value={data.fullname}
               onChange={handleChange}
              required/>
              <input className="creds"
               type="email"
                name="email"
                id=""
                placeholder="Email"
               autoComplete="off"
                value={data.email}
               onChange={handleChange}
                required/>
              <select name="appointment-departments"
               id=""
               defaultValue=''
               value={data.department}
               onChange={handledept}
               required>
              <option value='' disabled selected required>
                  Select Department
                </option>
                <option value='Dental'>
                  Dental
                </option>
                <option value='Surgical'>
                  Surgical
                </option>
                <option value='Ophthalmology'>
                  Ophthalmology
                </option>
                <option value='Cardiology'>
                  Cardiology
                </option>
                <option value='Neurology'>
                  Neurology
                </option>
              </select>
            </div>
            <div className="">
              <input type="date"
               className="date"
              name=""
              id=""
              value={data.date}
              onChange={handleDateChange}
              required/>
              <input type="time"
               className="date"
              name=""
              id=""
              value={data.time}
              onChange={handleTimeChange}
               required/>
              <button type="submit" onClick={submit} className="close">Submit</button>
            </div>
          </form>
        </div>
        <div className="btn">
            <button onClick={closeModal}>Close</button>
        </div>
      </div>
      </div>
        }
        
    </div>
   )
}
export default Navbar;