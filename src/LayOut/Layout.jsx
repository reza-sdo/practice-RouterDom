import React from "react";
import AppNav from "../components/AppNav/AppNav";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()
  console.log(location);
  return (
    <div>
      <AppNav />
      <Outlet />
      <footer>this is footer section</footer>
    </div>
  );
};

export default Layout;
