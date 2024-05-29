import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Posts from "./pages/Posts/Posts";
import AppNav from "./components/AppNav/AppNav";
import Layout from "./LayOut/Layout";
import DashLayout from "./pages/Dashboard/DashLayout";
import Profile from "./pages/Dashboard/Profile/Profile";
import Payments from "./pages/Dashboard/Payments/Payments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<DashLayout />} >
            <Route index element={<Dashboard/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="payments" element={<Payments/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
