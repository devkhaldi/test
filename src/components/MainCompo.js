import React, { Component } from "react";
import Navigation from "./Navigation";
import Content from "./Content";
import DataUsage from "./DataUsage";
import SideBar from "./SideBar";

export class MainCompo extends Component {
  render() {
    return (
      <div className="mainCompo">
        <Navigation />
        <div className="mainCompoContainer">
          <SideBar />
          <Content />
          <DataUsage />
        </div>
      </div>
    );
  }
}

export default MainCompo;
