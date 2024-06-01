import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../LayOut/Layout";
import Home from "../pages/Home/Home";
import Posts from "../pages/Posts/Posts";
import DashLayout from "../pages/Dashboard/DashLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import Payments from "../pages/Dashboard/Payments/Payments";
import Post from "../pages/Posts/Post";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/app" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="posts" element={<Posts />} />
        <Route path="dashboard" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
