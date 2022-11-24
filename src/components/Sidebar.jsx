import React, { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import {
  MdDashboard,
  MdOutlineSettingsApplications,
  MdOutlineConnectWithoutContact,
  MdOutlineLogout,
} from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { FaCashRegister } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import Icon from "../assets/icon.png";

const SidebarNavigation = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Overview" },
    {
      title: "Applications",
      icon: <MdOutlineSettingsApplications />,
      submenu: true,
      submenuItems: [
        {
          title: "FCUBS",
          path: "https://premiumfcubs.premiumtrustbank.com/FCJNeoWeb",
        },
        {
          title: "OBIEE",
          path: "http://obiee.premiumtrustbank.com:9502/xmlpserver",
        },
        {
          title: "NIBSS Document Verification Portal",
          path: "https://172.18.5.50/",
        },
        {
          title: "PEP",
          path: "https://apps.powerapps.com/play/e1210308-4253-40fe-bf2e-e7e287a1f406?tenantId=ea5cc842-6f08-4924-bd60-e99929d9531b",
        },
        {
          title: "SOFTAML",
          path: "http://192.168.201.2/softaml_premiumtrust/login",
        },
        {
          title: "BVN Validation Portal",
          path: "https://bvnportal.premiumtrustbank.com/",
        },
        {
          title: "Cooperate Internet Banking",
          path: "https://cib.premiumtrustbank.com/user/login",
        },
      ],
    },
    {
      title: "Directories ",
      icon: <GoFileDirectory />,
      path: "/login",
      submenu: true,
      submenuItems: [
        { title: "Business Report" },
        { title: "Manuals" },
        { title: "App 3" },
      ],
    },
    {
      title: "Employee Connect",
      icon: <MdOutlineConnectWithoutContact />,
      submenu: true,
      submenuItems: [
        { title: "Profile" },
        { title: "Leave Request" },
        { title: "App 3" },
      ],
    },
    {
      title: "Forms & Register",
      icon: <FaCashRegister />,
      path: "/login",
      spacing: true,
    },
    { title: "Setting", path: "/login", icon: <FiSettings /> },
    { title: "Logout", icon: <MdOutlineLogout />, spacing: true },
  ];
  const SidebarLinks = ({ menu }) => {
    return (
      <Link to={menu.path}>
        <li
          className={`text-[#9B9CA0] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-600 hover:text-white hover:font-semibold rounded-md mt-2 ${
            menu.spacing ? "mt-9" : "mt-2"
          }`}
        >
          <span className="text-2xl block float-left">
            {menu.icon ? menu.icon : <MdDashboard />}
          </span>
          <span
            className={`text-base flex-1 font-medium duration-200 ${
              !open && "hidden"
            }`}
          >
            {menu.title}
          </span>
          {menu.submenu && open && (
            <BsChevronDown
              className={`${submenuOpen && "rotate-180"}`}
              onClick={() => {
                setSubmenuOpen(!submenuOpen);
              }}
            />
          )}
        </li>
        {menu.submenu && submenuOpen && open && (
          <ul>
            {menu.submenuItems.map((submenuItem, index) => (
              <li
                key={index}
                className="text-[#9B9CA0] flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-red-600 hover:text-white hover:font-semibold rounded-md mt-2"
              >
                {submenuItem.title}
              </li>
            ))}
          </ul>
        )}
      </Link>
    );
  };
  return (
    <>
      <div
        className={`bg-white h-full p-5 pt-8 ${
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
            <SidebarLinks key={index} menu={menu} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarNavigation;