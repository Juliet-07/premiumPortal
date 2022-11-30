import React from "react"
// import "./App.css"
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import SidebarRoute from "./SidebarRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/*" element={<SidebarRoute />} />
    </Routes>
  );
}

export default App;
