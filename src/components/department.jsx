import React, { useState } from "react";
import Neorology from "../departments/neorology";
import Cardiology from "../departments/cardiology";
import Dental from "../departments/dental";
import Ophthalmology from "../departments/optalmologist";
import Surgical from "../departments/surgical";
function Department(){
    const [selectedDepartment, setSelectedDepartment] = useState('neurology');
    const [fade, setFade] = useState(false);

    const handleDepartmentClick = (department) => {
      setFade(true);
      setTimeout(() => {
        setSelectedDepartment(department);
        setFade(false);
      }, 700);
    };
    const departmentStyle = (department) => {
        return selectedDepartment === department ? { backgroundColor: "#19A7CE"} : {};
      };
    return(
        <div className="department">
            <div className="">
                <span>DEPARTMENTS</span>
                <span>Clinic Departments</span>
                <span>To make easier to serve an appointment and no need to go out to fall in line .</span>
            </div>
            <div className="departments">
                <div className={selectedDepartment === "neurology" ? "active" : ""}
                 onClick={() => handleDepartmentClick('neurology')}
                 style={departmentStyle('neurology')}
                 >
                    Neurology
                </div>
                <div className={selectedDepartment === "surgical" ? "active" : ""}
                 onClick={() => handleDepartmentClick('surgical')}
                 style={departmentStyle('surgical')}
                 >
                    Surgical
                </div>
                <div className={selectedDepartment === "dental" ? "active" : ""}
                 onClick={() => handleDepartmentClick('dental')}
                 style={departmentStyle('dental')}
                 >
                    Dental
                </div>
                <div className={selectedDepartment === "ophthalmology" ? "active" : ""}
                 onClick={() => handleDepartmentClick('ophthalmology')}
                 style={departmentStyle('ophthalmology')}
                 >
                    Ophthalmology
                </div>
                <div className={selectedDepartment === "cardiology" ? "active" : ""}
                 onClick={() => handleDepartmentClick('cardiology')}
                 style={departmentStyle('cardiology')}
                 >
                    Cardiology
                </div>
                
            </div>
            
            <div className="DepartmentRender">
            {selectedDepartment === "neurology" && (
          <div style={{ opacity: fade ? 0 : 1, transition: "opacity 0.7s" }}>
            <Neorology />
          </div>
        )}
        {selectedDepartment === "surgical" && (
          <div style={{ opacity: fade ? 0 : 1, transition: "opacity 0.7s" }}>
            <Surgical />
          </div>
        )}
        {selectedDepartment === "dental" && (
          <div style={{ opacity: fade ? 0 : 1, transition: "opacity 0.7s" }}>
            <Dental />
          </div>
        )}
        {selectedDepartment === "ophthalmology" && (
          <div style={{ opacity: fade ? 0 : 1, transition: "opacity 0.7s" }}>
            <Ophthalmology />
          </div>
        )}
        {selectedDepartment === "cardiology" && (
          <div style={{ opacity: fade ? 0 : 1, transition: "opacity 0.7s" }}>
            <Cardiology />
          </div>
        )}
            </div>
            
        </div>
       
    )
}

export default Department;