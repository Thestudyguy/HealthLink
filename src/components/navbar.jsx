import React from "react";
function Navbar(){
   return(
     <div className="navbar">
        <div className="navbarItems">
            <div className="title">
                Health<span id="color">Link</span>
            </div>
            <ul className="items">
                <li>
                    <button>About Us</button>
                </li>
                <li>
                    <button>Contact</button>
                </li>
                <li>
                    <button>Make an Appointment</button>
                </li>
              
            </ul>
        </div>
    </div>
   )
}
export default Navbar;