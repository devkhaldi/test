import React, { Component } from "react";
import Search from "./content/Search";
import Folder from "./content/Folder";
import RecentFile from "./content/RecentFile";
import "../css/content.css";
import ResponsiveSideBar from "./ResponsiveSideBar";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.sideBarRef = React.createRef();
    this.state = {
      recentFiles: [],
      opened: false
    };
  }

  getRecentFiles = () => {
    return [
      {
        iconUrl: "/icons/pdf.svg",
        name: "Competitor Analysis Template",
        member: "Only you",
        lastModified: "Sep 3,2019"
      },
      {
        iconUrl: "/icons/doc.svg",
        name: "How to create a case study",
        member: "3 members",
        lastModified: "Jun 12,2019"
      },
      {
        iconUrl: "/icons/doc.svg",
        name: "Landing page structure",
        member: "10 members",
        lastModified: "Jun 17,2019"
      },
      {
        iconUrl: "/icons/pdf.svg",
        name: "Meeting Report",
        member: "5 members",
        lastModified: "Aug 28,2019"
      },
      {
        iconUrl: "/icons/zip.svg",
        name: "Project Documents",
        member: "Only you",
        lastModified: "Aug 17,2019"
      },
      {
        iconUrl: "/icons/pdf.svg",
        name: "Review check list template",
        member: "7 members",
        lastModified: "Sep 8,2019"
      }
    ];
  };
  componentDidMount = () => {
    this.setState({
      recentFiles: this.getRecentFiles()
    });
  };

  openSideBar = () => {
    if (this.state.opened) {
      this.setState({
        opened: false
      });
    } else {
      this.setState({
        opened: true
      });
    }
  };
  render() {
    return (
      <div className="col-md-7 content">
        <i
          class="fas fa-bars"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"></i>

        <Search />

        <Folder />
        <RecentFile recentFiles={this.state.recentFiles} />
      </div>
    );
  }
}

export default Content;
