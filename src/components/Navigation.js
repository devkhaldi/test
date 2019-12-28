import React from "react";
import "../css/navigation.css";
import user3 from "../components/img/users/user3.jpg";
function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <i className="uil uil-telegram"></i>
      </div>

      <div className="navItems">
        <div className="navItem navItemActive">
          <i className="uil uil-layer-group"></i>
        </div>
        <div className="navItem">
          <i className="uil uil-comment"></i>
        </div>
        <div className="navItem">
          <i className="uil uil-chart-bar"></i>
        </div>
        <div className="navItem">
          <i className="uil uil-cog"></i>
        </div>
      </div>
      <div className="roundedImgContainer">
        <img className="roundedImg" src={user3} alt="" />
      </div>
    </div>
  );
}

export default Navigation;
