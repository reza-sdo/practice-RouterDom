import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashLayout() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div>top</div>
      <div>
        <div id="sidebar">
          <NavLink to="profile">profile</NavLink>
          <NavLink to="payments">payments</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default DashLayout;
