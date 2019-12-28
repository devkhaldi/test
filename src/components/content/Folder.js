import React from "react";
import user1 from "../img/users/user1.jpg";
import user2 from "../img/users/user2.jpg";
import user3 from "../img/users/user3.jpg";

function Folder() {
  return (
    <div className="folders">
      <div className="foldersHeader my-3">
        <span className="foldersTitle">Folders</span>
        <a href="#" className="float-lg-right">
          View all
        </a>
      </div>
      {/* Folders  */}
      <div className="container-fluid">
        <div className="row">
          {/* Analytics */}
          <div className="col-4 p-0">
            <div className="folderContainer mr-3">
              <div className="folderHeader">
                <div className="folderUsers float-right">
                  <img src={user3} alt="userImage" className="userImage-1" />
                  <img src={user2} alt="userImage" className="userImage-2" />
                </div>
                <div className="folderIconContainer">
                  <i className="fas fa-folder folder-icon"></i>
                </div>
              </div>
              <div className="folderName">
                <span>Analytics</span>
              </div>
              <div className="numberFiles">
                <span>15 Files</span>
              </div>
            </div>
          </div>

          {/* Assets */}
          <div className="col-4 p-0">
            <div className="folderContainer">
              <div className="folderHeader">
                <div className="folderUsers float-right">
                  <img src={user3} alt="userImage" className="userImage-1" />
                </div>
                <div className="folderIconContainer">
                  <i className="fas fa-folder folder-icon"></i>
                </div>
                <div className="folderUsers"></div>
              </div>
              <div className="folderName">
                <span>Assets</span>
              </div>
              <div className="numberFiles">
                <span>345 Files</span>
              </div>
            </div>
          </div>
          {/* Marketing */}
          <div className="col-4 p-0">
            <div className="folderContainer ml-3">
              <div className="folderHeader">
                <div className="folderUsers float-right">
                  <img src={user1} alt="userImage" className="userImage-1" />
                  <img src={user2} alt="userImage" className="userImage-2" />
                </div>
                <div className="folderIconContainer">
                  <i className="fas fa-folder folder-icon"></i>
                </div>
                <div className="folderUsers"></div>
              </div>
              <div className="folderName">
                <span>Marketing</span>
              </div>
              <div className="numberFiles">
                <span>143 Files</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
