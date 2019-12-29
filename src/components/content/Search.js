import React, { Component, createRef } from "react";
import dropbox from "../img/dropbox.svg";
import googleDrive from "../img/google-drive.svg";
import oneDrive from "../img/onedrive.svg";
import ResponsiveSideBar from "../ResponsiveSideBar";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.googleDriveRef = createRef();
    this.dropBoxRef = createRef();
    this.oneDriveRef = createRef();
  }
  // Card mouse events
  googleDriveMouseEnter = () => {
    this.googleDriveRef.current.className = "googledrive cardHovered storageCard m-2";
    this.dropBoxRef.current.className = "dropbox storageCard m-2";
    this.oneDriveRef.current.className = "onedrive storageCard m-2";
  };

  dropBoxMouseEnter = () => {
    this.googleDriveRef.current.className = "googledrive storageCard m-2";
    this.dropBoxRef.current.className = "dropbox cardHovered storageCard m-2";
    this.oneDriveRef.current.className = "onedrive storageCard m-2";
  };

  oneDriveMouseEnter = () => {
    this.googleDriveRef.current.className = "googledrive storageCard m-2";
    this.dropBoxRef.current.className = "dropbox storageCard m-2";
    this.oneDriveRef.current.className = "onedrive cardHovered storageCard m-2";
  };

  render() {
    return (
      <div>
        <div>
          {/* Search files */}
          <form className="form-container mt-2">
            <i className="uil uil-search search-icon pt-3 pl-3"></i>
            <input type="search" placeholder="Search the files" className="form-control pl-5 m-1 mt-2" />
          </form>
          {/* Toggle side bar files */}
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <ResponsiveSideBar />
            </div>
          </div>
          <div className="containerFluid  my-4">
            <div className="row cardsContainer">
              {/* Google drive */}
              <div className="col-sm-6 col-md-4 p-0">
                <div
                  ref={this.googleDriveRef}
                  onMouseEnter={this.googleDriveMouseEnter}
                  className="googledrive cardHovered storageCard m-2">
                  <div className="header">
                    <div className="moreIcon float-right">
                      <i className="fas fa-ellipsis-h "></i>
                    </div>
                    <div className="icon">
                      <img src={googleDrive} alt="google drive" className="cardIcon" />
                    </div>
                  </div>
                  <div className="nameContainer">
                    <span className="cardName">Google Drive</span>
                  </div>
                  <div className="storage">
                    <span className="storage-used">45.5 GB</span>
                    <span className="storage-total float-right">50 GB</span>
                  </div>
                  <div className="progressBar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Drop box */}
              <div className="col-sm-6 col-md-4 p-0">
                <div
                  ref={this.dropBoxRef}
                  onMouseEnter={this.dropBoxMouseEnter}
                  className="dropbox storageCard m-2">
                  <div className="header">
                    <div className="moreIcon float-right">
                      <i className="fas fa-ellipsis-h mr-2"></i>
                    </div>
                    <div className="icon">
                      <img src={dropbox} alt="" className="cardIcon" />
                    </div>
                  </div>
                  <div className="nameContainer">
                    <span className="cardName">Dropbox</span>
                  </div>
                  <div className="storage">
                    <span className="storage-used">1.2 GB</span>
                    <span className="storage-used float-right">3 GB</span>
                  </div>
                  <div className="progressBar">
                    <div className="progress">
                      <div
                        className="progress-bar bg-blue"
                        role="progressbar"
                        style={{ width: "38%" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* One drive */}
              <div className="col-sm-6 col-md-4">
                <div
                  ref={this.oneDriveRef}
                  onMouseEnter={this.oneDriveMouseEnter}
                  className="onedrive storageCard m-2">
                  <div className="header">
                    <div className="moreIcon float-right">
                      <i className="fas fa-ellipsis-h mr-2"></i>
                    </div>
                    <div className="icon">
                      <img src={oneDrive} alt="" className="cardIcon" />
                    </div>
                  </div>
                  <div className="nameContainer">
                    <span className="cardName">One Drive</span>
                  </div>
                  <div className="storage">
                    <span className="storage-total">2.5 GB</span>
                    <span className="storage-total float-right">3 GB</span>
                  </div>
                  <div className="progressBar">
                    <div className="progress">
                      <div
                        className="progress-bar bg-blue"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
