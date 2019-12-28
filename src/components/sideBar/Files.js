import React from "react";

const recentFiles = [
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

function Files() {
  return (
    <div>
      {recentFiles.map(rf => {
        return (
          <div>
            <i className="fas fa-file folder-icon"></i>
            <span className="storageFile-label">{rf.name.substring(0, 6)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Files;
