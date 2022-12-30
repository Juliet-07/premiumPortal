import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Applications from "./pages/applications";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";

const SidebarRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications/>}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default SidebarRoute;
