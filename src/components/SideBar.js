import React from "react";
import MarketingTeam from "./sideBar/MarketingTeam";
import Storage from "./sideBar/Storage";
import "../css/sidebar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="container-fluid">
        <MarketingTeam />
        <Storage />
      </div>
    </div>
  );
}

export default SideBar;
