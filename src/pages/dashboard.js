import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import Icon from "../assets/icon.png";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Overview" },
    {
      title: "Applications",
      submenu: true,
      submenuItems: [
        { title: "App 1" },
        { title: "App 2" },
        { title: "App 3" },
      ],
    },
    { title: "Directories ", spacing: true },
    {
      title: "Employee Connect",
      submenu: true,
      submenuItems: [
        { title: "App 1" },
        { title: "App 2" },
        { title: "App 3" },
      ],
    },
    { title: "Forms & Register", spacing: true },
    { title: "Analytics" },
    { title: "Files ", src: "Folder" },
    { title: "Setting" },
    { title: "Logout" },
  ];
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white h-screen p-5 pt-8 ${
          open ? "w-80" : "w-20"
        } duration-300 relative rounded-r-3xl shadow-2xl`}
      >
        <BsArrowLeftShort
          className={`bg-red-600 text-white text-3xl rounded-full absolute -right-3 top-9 border border-red-600 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <img
            src={Icon}
            alt="PremiumIcon"
            className={`w-10 h-10 duration-500 ${open && "rotate-[360deg]"}`}
          />
          {/* <AiFillEnvironment className="bg-orange-400 text-4xl rounded cursor-pointer block float-left" /> */}
          <div
            className={`w-60 h-10 font-bold text-2xl text-red-600 origin-left duration-300 ${
              !open && "scale-0"
            }`}
          >
            PremiumTrust Bank
          </div>
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-[#9B9CA0] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-600 hover:text-white hover:font-semibold rounded-md mt-2 ${
                menu.spacing ? "mt-9" : "mt-2"
              }`}
            >
              <span className="text-2xl block float-left">
                <MdDashboard />
              </span>
              <span
                className={`text-base flex-1 font-medium duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Sidebar */}
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default Dashboard;
