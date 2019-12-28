import React from "react";
import MarketingTeam from "./sideBar/MarketingTeam";
import Storage from "./sideBar/Storage";
import "../css/sidebar.css";
import "../css/responsiveSideBar.css";

function ResponsiveSideBar() {
  return (
    <div className="responsiveSideBar">
      <div className="container-fluid">
        <MarketingTeam />
        <Storage />
      </div>
    </div>
  );
}

export default ResponsiveSideBar;
