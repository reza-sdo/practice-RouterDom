import React from "react";
import AppNav from "../components/AppNav/AppNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppNav />
      <Outlet />
      <footer>this is footer section</footer>
    </div>
  );
};

export default Layout;
