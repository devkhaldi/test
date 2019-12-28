import React, { Component } from "react";
import Files from "./Files";

export class Storage extends Component {
  constructor(props) {
    super(props);
    this.analyticsFiles = React.createRef();
    this.assetsFiles = React.createRef();
    this.marketingFiles = React.createRef();
    this.templatesFiles = React.createRef();
    this.projectsFiles = React.createRef();
    this.projectorCourcesFiles = React.createRef();


    // icons refs
    this.analyticsIcon = React.createRef();
    this.assetsIcon = React.createRef();
    this.marketingIcon = React.createRef();
    this.templatesIcon = React.createRef();
    this.projectsIcon = React.createRef();
    this.projectorCourcesIcon = React.createRef();

    this.state = {
      analyticsFilesAppend: false,
      assetsFilesAppend: false,
      marketingFilesAppend: false,
      templatesFilesAppend: false,
      projectsFilesAppend: false,
      projectorCourcesAppend:false
    };
  }
  showAnalyticsFiles = () => {
    console.log(this.analyticsFiles);
    if (this.state.analyticsFilesAppend) {
      this.analyticsIcon.current.className = "fas fa-caret-right arrow-icon"
      this.setState({
        analyticsFilesAppend: false
      });
    }
    else {
      this.analyticsIcon.current.className = "fas fa-caret-down arrow-icon"
      this.setState({
        analyticsFilesAppend: true
      });
    }
   
  };
  showAssetsFiles = () => {
    if (this.state.assetsFilesAppend) {
      this.assetsIcon.current.className = "fas fa-caret-right arrow-icon"
      this.setState({
        assetsFilesAppend: false
      });
    }
    else {
      this.assetsIcon.current.className = "fas fa-caret-down arrow-icon"
      this.setState({
        assetsFilesAppend: true
      });
    }
   
  };
  showMarketingFiles = () => {
    if (this.state.marketingFilesAppend) {
      this.marketingIcon.current.className = "fas fa-caret-right arrow-icon"
      this.setState({
        marketingFilesAppend: false
      });
    }
    else {
      this.marketingIcon.current.className = "fas fa-caret-down arrow-icon"
      this.setState({
        marketingFilesAppend: true
      });
    }
    
  };
  showTemplatesFiles = () => {
    if (this.state.templatesFilesAppend) {
      this.templatesIcon.current.className = "fas fa-caret-right arrow-icon"
      this.setState({
        templatesFilesAppend: false
      });
    }
    else {
      this.templatesIcon.current.className = "fas fa-caret-down arrow-icon"
      this.setState({
        templatesFilesAppend: true
      });
    }
    
  };
  showprojectsFiles = () => {
    this.projectsIcon.current.className = "fas fa-caret-right arrow-icon"
    if (this.state.projectsFilesAppend) {
      this.setState({
        projectsFilesAppend: false
      });
    }
    else {
      this.projectsIcon.current.className = "fas fa-caret-down arrow-icon"
      this.setState({
        projectsFilesAppend: true
      });
    }
  }
    showProjectorCourcesFiles = () => {
      this.projectorCourcesIcon.current.className = "fas fa-caret-right arrow-icon"
      if (this.state.projectorCourcesAppend) {
        this.setState({
          projectorCourcesAppend: false
        });
      }
      else {
        this.projectorCourcesIcon.current.className = "fas fa-caret-down arrow-icon"
        this.setState({
          projectorCourcesAppend: true
        });
      }
   
  };
  render() {
    return (
      <div className="container-fluid storageContainer">
        <div className="storageTitle">
          <span className="storageText">Storage</span>
        </div>
        <div className="storageSubTitle">
          <span className="storageText">My Files</span>
        </div>
        <div className="storageFiles">
          {/* Analytics */}
          <div onClick={this.showAnalyticsFiles} className="storageFileContainer my-2">
            <div>
              <i ref={this.analyticsIcon} className="fas fa-caret-right arrow-icon"></i>
              <i className="fas fa-folder folder-icon"></i>
              <span className="storageFile-label">Analytics</span>
            </div>
            <div ref={this.analyticsFiles} className="files pl-2">
              {this.state.analyticsFilesAppend && <Files />}
            </div>
          </div>

          {/* Assets */}
          <div onClick={this.showAssetsFiles} className="storageFileContainer my-2">
            <div>
              <i ref={this.assetsIcon} className="fas fa-caret-right arrow-icon"></i>
              <i className="fas fa-folder folder-icon"></i>
              <span className="storageFile-label">Assets</span>
            </div>
            <div ref={this.assetsFiles} className="files pl-2">
              {this.state.assetsFilesAppend && <Files />}
            </div>
          </div>
          {/* Marketing */}
          <div onClick={this.showMarketingFiles} className="storageFileContainer my-2">
            <div>
              <i ref={this.marketingIcon} className="fas fa-caret-right arrow-icon"></i>
              <i className="fas fa-folder folder-icon"></i>
              <span className="storageFile-label">Marketing</span>
            </div>
            <div ref={this.marketingFiles} className="files pl-2">
              {this.state.marketingFilesAppend && <Files />}
            </div>
          </div>
          {/* Templates */}
          <div onClick={this.showTemplatesFiles} className="storageFileContainer my-2">
            <div>
              <i ref={this.templatesIcon} className="fas fa-caret-right arrow-icon"></i>
              <i className="fas fa-folder folder-icon"></i>
              <span className="storageFile-label">Templates</span>
            </div>
            <div ref={this.templatesFiles} className="files pl-2">
              {this.state.templatesFilesAppend && <Files />}
            </div>
          </div>
          {/* Projects */}
          <div onClick={this.showprojectsFiles} className="storageFileContainer my-2">
            <div>
              <i ref={this.projectsIcon} className="fas fa-caret-right arrow-icon"></i>
              <i className="fas fa-folder folder-icon"></i>
              <span className="storageFile-label">Projects</span>
            </div>
            <div ref={this.projectsFiles} className="files pl-2">
              {this.state.projectsFilesAppend && <Files />}
            </div>
          </div>

          {/* Projector Cources */}
          <div onClick={this.showProjectorCourcesFiles} className="storageFileContainer my-2">
            <div>
              <i ref={this.projectorCourcesIcon} className="fas fa-caret-right arrow-icon"></i>
              <i  className="fas fa-folder folder-icon"></i>
              <span className="storageFile-label">Projector Cources</span>
            </div>
            <div ref={this.projectsFiles} className="files pl-2">
              {this.state.projectorCourcesAppend && <Files />}
            </div>
          </div>
        </div>
        <div className="storageSharedWithMe my-2">
          <span className="storageText">Shared with me</span>
        </div>
        <div className="storageRecent my-2">
          <span className="storageText">Recent</span>
        </div>
        <div className="storageStarred my-2">
          <span className="storageText">Starred</span>
        </div>
        <div className="storageTrash my-2">
          <span className="storageText">Trash</span>
        </div>
        <div className="storageByFileType p-0">
          <div className="folder p-2">
            <i className="far storageByFileTypeIcon fa-folder mr-3"></i>
            <span>Folder</span>
          </div>
          <div className="textDoc p-2">
            <i className="far storageByFileTypeIcon fa-file-alt mr-3"></i>
            <span className="mr-3">Text Doc</span>
            <i className="fas fa-chevron-right mr-2"></i>
          </div>
          <div className="presentation p-2">
            <i className="far storageByFileTypeIcon fa-file-powerpoint mr-3"></i>
            <span className="mr-3">Presentation</span>
            <i className="fas fa-chevron-right mr-2"></i>
          </div>
          <div className="sheets p-2">
            <i className="fas storageByFileTypeIcon fa-table mr-3"></i>
            <span className="mr-3">Sheet</span>
            <i className="fas fa-chevron-right mr-2"></i>
          </div>
          <div className="more p-2">
            <i className="fas storageByFileTypeIcon fa-ellipsis-h mr-3"></i>
            <span className="mr-3">More</span>
            <i className="fas fa-chevron-right mr-2"></i>
          </div>
        </div>
        <div className="storageCreateNew my-3">
          <button className="form-control">
            <div className="container-fluid">
              <div className="row m-0">
                <span className="col-9 mt-1">Create New</span>
                <i className="fas fa-plus col-3 pt-2"></i>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Storage;
