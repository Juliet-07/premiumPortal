import React, { useState, useEffect } from "react";
import ProfilePhoto from "../assets/profile.jpg";
import { FcCalendar } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";
import { format, startOfToday } from "date-fns";
// import Calendar from "react-calendar";
import Calendar from "../components/Calendar";
import "react-calendar/dist/Calendar.css";
import Slider from "../components/Slider";

const Dashboard = () => {
  let today = startOfToday();
  const [user, setUser] = useState("");
  const [hour, setHour] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user !== null || user !== undefined) {
      setUser(user);
    }
    timeGreeting();
  }, []);
  const timeGreeting = () => {
    let date = new Date();
    let hour = date.getHours();
    setHour(hour);
  };
  return (
    <>
      <div className="flex items-center justify-between m-4">
        <div className="flex flex-col items-center">
          <div className="text-base font-semibold p-2">
            {hour < 12
              ? "Good Morning "
              : hour < 17
              ? "Good Afternoon "
              : "Good Evening "}
            {user.name}
          </div>

          <div className="flex items-center bg-[#ffffff] w-[415px] h-[150px] rounded-xl shadow-lg">
            <div className="bg-gray-200 w-20 h-20 text-6xl text-white text-center p-2 rounded-full mx-4 my-2">
              <IoPersonSharp />
              {/* <img
                src={ProfilePhoto}
                alt="Profile_Photo"
                className="w-[120px] h-[123px] rounded-full"
              /> */}
            </div>
            <div className="flex-col my-4">
              <p className="font-bold text-2xl">{user.name}</p>
              <p className="flex text-base font-bold">
                <span className="mr-2 font-normal">Role:</span>
                {/* Software Engineer */}
              </p>
              <p className="flex text-base font-bold">
                <span className="mr-2 font-normal">Department:</span>
                {/* I.T */}
              </p>
              <p className="flex text-base font-bold">
                <span className="mr-2 font-normal">Branch:</span>
                {/* Head Office */}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Calendar />
        </div>
        {/* <div className="flex">
          <FcCalendar className="text-3xl mr-2" />
          <div className="text-base">{format(today, "dd, MMM yyyy")}</div>
        </div> */}
      </div>
      <div className="w-full flex items-center justify-between px-10">
        <div className="w-[632px] h-full flex-col shadow-md mr-8 shadow-red-200">
          <div className="h-[52px] bg-red-600 rounded-t-xl text-xl text-white font-medium p-4">
            Favorite Links
          </div>
          <div className="flex flex-col p-4 uppercase">
            <a
              className="p-2"
              href="https://premiumtrustbank.com/"
              target="_blank"
            >
              premium website
            </a>
            <a
              className="p-2"
              href="https://apps.cibng.org/prereg"
              target="_blank"
            >
              cibn registration
            </a>
            <a
              className="p-2"
              href="https://premiumtrustbank.sharepoint.com/sites/EmployeeServicesWellness/Shared%20Documents/Staff%20Handbook%20Final%20-%20Upload.pdf"
              target="_blank"
            >
              staff handbook
            </a>
            <a
              className="p-2"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=Qshc6ghvJEm9YOmZKdlTGw-VSDQEbRdAloFQ4PadWzJUQ0xFVVk3NUlQUUNSUllaUzRKUzJVWEVYMi4u"
              target="_blank"
            >
              change of hmo service providers
            </a>
            <a
              className="p-2"
              href="https://premiumtrustbank.com/"
              target="_blank"
            >
              premium website
            </a>
            <a
              className="p-2"
              href="https://premiumtrustbank.com/"
              target="_blank"
            >
              premium website
            </a>
          </div>
        </div>
        <div className="w-[362px] h-full flex-col shadow-md shadow-red-200">
          <div className="h-[52px] bg-red-600 rounded-t-xl text-xl text-white font-medium p-4">
            Who is celebrating?
          </div>
          <div className="flex flex-col p-4 font-semibold">
            <p className="p-2 uppercase">Niklaus</p>
            <p className="p-2 uppercase">Elijah</p>
            <p className="p-2 uppercase">Phin</p>
            <p className="p-2 uppercase">Rebecca</p>
            <p className="p-2 uppercase">Col</p>
            <p className="p-2 uppercase">Freya</p>
          </div>
        </div>
      </div>
      <div className="w-[1000px] h-[150px] mx-10 my-20">
        <Slider />
      </div>
    </>
  );
};

export default Dashboard;
