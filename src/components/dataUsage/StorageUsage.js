import React from "react";
import imageIcon from "../img/dataUsage/photo-icon.svg";
import documentIcon from "../img/dataUsage/documents.svg";
import mediaIcon from "../img/dataUsage/media.svg";
import otherIcon from "../img/dataUsage/other.svg";
import unknownIcon from "../img/dataUsage/unknown.svg";

function StorageUsage() {
  return (
    <div className="container-fluid mt-2 storageUsage">
      <div className="bigText">
        <span>45.5 GB</span>
        <span className="float-right">50 GB</span>
      </div>
      <div className="smallText mb-3">
        <span>Used</span>
        <span className="float-right">Upgrade</span>
      </div>
      <div className="progress mb-4">
        <div
          className="progress-bar bg-blue"
          role="progressbar"
          style={{ width: "55%" }}
          aria-valuenow="55"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "15%" }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      {/* Data usage by file types  */}
      <div className="dataByFileTypes my-3">
        <div className="row">
          <div className="col-2">
            <div className="imageIcon">
              <img src={imageIcon} alt="ImageIcon" />
            </div>
          </div>
          <div className="col-6">
            <div className="type">
              <div className="fileType">Images</div>
              <div className="numberFiles">1,765 files</div>
            </div>
          </div>
          <div className="col-4">
            <div className="dataUsage mt-2">
              <span className="value">15.3 GB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dataByFileTypes my-3">
        <div className="row">
          <div className="col-2">
            <div className="documentIcon">
              <img src={documentIcon} alt="photoIcon" />
            </div>
          </div>
          <div className="col-6">
            <div className="type">
              <div className="fileType">Documents</div>
              <div className="numberFiles">123 files</div>
            </div>
          </div>
          <div className="col-4">
            <div className="dataUsage mt-2">
              <span className="value">256 MB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dataByFileTypes my-3">
        <div className="row">
          <div className="col-2">
            <div className="mediaIcon">
              <img src={mediaIcon} alt="MediaIcon" />
            </div>
          </div>
          <div className="col-6">
            <div className="type">
              <div className="fileType">Media Files</div>
              <div className="numberFiles">24 files</div>
            </div>
          </div>
          <div className="col-4">
            <div className="dataUsage mt-2">
              <span className="value">3.4 GB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dataByFileTypes my-3">
        <div className="row">
          <div className="col-2">
            <div className="otherIcon">
              <img src={otherIcon} alt="otherIcon" />
            </div>
          </div>
          <div className="col-6">
            <div className="type">
              <div className="fileType">Other Files</div>
              <div className="numberFiles">454 files</div>
            </div>
          </div>
          <div className="col-4">
            <div className="dataUsage mt-2">
              <span className="value">3 GB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dataByFileTypes my-3">
        <div className="row">
          <div className="col-2">
            <div className="unknownIcon">
              <img src={unknownIcon} alt="unknownIcon" />
            </div>
          </div>
          <div className="col-6">
            <div className="type">
              <div className="fileType">Unknown Files</div>
              <div className="numberFiles">57 files</div>
            </div>
          </div>
          <div className="col-4">
            <div className="dataUsage mt-2">
              <span className="value">175 MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageUsage;
