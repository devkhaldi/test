import React, { Component } from "react";
import "../css/dataUsage.css";
import StorageUsage from "./dataUsage/StorageUsage";
import UpgradeAccount from "./dataUsage/UpgradeAccount";
export class DataUsage extends Component {
  render() {
    return (
      <div className="dataUsage col-md-3">
        <StorageUsage />
        <UpgradeAccount />
      </div>
    );
  }
}

export default DataUsage;
