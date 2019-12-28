import React from "react";
import upgradeImage from "../img/upgrade.PNG";
function UpgradeAccount() {
  return (
    <div className="upgradeAccount p-3 my-4">
      <img src={upgradeImage} alt="upgradeAccount" />
      <div className="titleContainer mt-2">
        <span>Upgrade account!</span>
      </div>

      <div className="contentContainer mt-3">
        <span>
          5 integrations, 30 team members , advanced features for teams
        </span>
      </div>
      <div className="buttonContainer">
        <button align="center" className="btn upgradeButton mt-4">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default UpgradeAccount;
