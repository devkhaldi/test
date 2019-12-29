import React from "react";

const recentFiles = [
  "Competitor Analysis Template",
  "How to create a case study",
  "Landing page structure",
  "Meeting Report",
  "Project Documents",
  "Review check list template",
  "How to create a case study",
  "Landing page structure",
  "Meeting Report",
  "Project Documents"
];

function Files() {
  return (
    <div>
      {recentFiles.map(rf => {
        return (
          <div>
            <i className="fas fa-file folder-icon"></i>
            <span className="storageFile-label">{rf.substring(0, 16)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Files;
