import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Applications from "./pages/applications";
import Dashboard from "./pages/dashboard";
import ProfileManager from "./pages/profileManager";
import Settings from "./pages/settings";
import Requisitions from "./pages/requisitions";

const SidebarRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/manager" element={<ProfileManager />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/requisitions" element={<Requisitions />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default SidebarRoute;
