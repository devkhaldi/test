import React from "react";

function RecentFile(props) {
  return (
    <div className="recentFiles p-0 m-0">
      <div className="header my-3">
        <span className="title">Recent Files</span>
        <a href="#" className="float-lg-right">
          View all
        </a>
      </div>
      {/* Recent Files table  */}
      <table className="table recentFilesTable table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Members</th>
            <th scope="col">Last modified</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.recentFiles.map(item => {
            return (
              <tr>
                <td>
                  <img src={item.iconUrl} className="fileIcon pr-3" />
                  <span className="name">{item.name}</span>
                </td>
                <td className="member">{item.member}</td>
                <td className="lastModified">{item.lastModified}</td>
                <td>
                  <i className="fas fa-ellipsis-h mr-2"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecentFile;
