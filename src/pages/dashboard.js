import React from "react";
import SidebarNavigation from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <SidebarNavigation />
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default Dashboard;
