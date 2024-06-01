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
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  );
}

export default App;
