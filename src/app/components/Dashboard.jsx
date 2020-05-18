import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({ groups }) => (
  <div className="card-deck">
    {groups.map((group) => (
      <ConnectedTaskList
        key={group.id}
        id={group.id}
        name={group.name}
        className="card"
        style={{ margin: "20px auto", float: "none" }}
      />
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    groups: state.groups,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
