import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Posts from "./pages/Posts/Posts";
import AppNav from "./components/AppNav/AppNav";
import Layout from "./LayOut/Layout";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
