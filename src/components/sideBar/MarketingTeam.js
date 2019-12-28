import React from "react";

function MarketingTeam() {
  return (
    <div className="row marketingTeam">
      <div className="col-10">
        <div>
          <span className="marketingTeam-Title">Marketing Team</span>
        </div>
        <div className="numberMembers-container">
          <span className="numberMembers">17 Members</span>
        </div>
      </div>
      <div className="col-2 marketingTeam-icon">
        <i className="uil uil-angle-down"></i>
      </div>
    </div>
  );
}

export default MarketingTeam;
