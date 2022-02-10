import React from "react";
import "./style.css";
import shopandmall from "../../assets/shopandmall.png";

function Project() {
  return (
    <div className="project">
      <div className="project_left">
        <h1 className="project_title">MALL MANAGEMENT</h1>
        <p className="project_para">
          THE SYSTEM ALLOWS USERS TO SEARCH FOR MALLS AND THEIR ASSOCIATED
          SHOPS. ADMIN CAN ADD DELETE AND EDIT MALL OR SHOP.
        </p>
      </div>
      <div className="project_right">
        <img src={shopandmall} alt="Project" />
        <p>CHECK PROJECT</p>
      </div>
    </div>
  );
}

export default Project;
