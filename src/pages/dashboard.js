import React, { useState, useEffect } from "react";
import ProfilePhoto from "../assets/profile.jpg";
import { FcCalendar } from "react-icons/fc";
import { format, startOfToday } from "date-fns";
import Calendar from "../components/Calendar";
import Slider from "../components/Slider";

const Dashboard = () => {
  let today = startOfToday();
  const [user, setUser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user !== null || user !== undefined) {
      setUser(user);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <div className="mx-10 mt-4 py-10 font-semibold w-[237px] h-[39px] text-3xl">
        Welcome Juliet
      </div> */}
      <div className="w-full flex items-center justify-around m-10">
        <div className="flex bg-[#ffffff] w-[415px] h-[150px] rounded-xl shadow-lg mx-10">
          <div className="mx-4 my-2">
            <img
              src={ProfilePhoto}
              alt="Profile_Photo"
              className="w-[120px] h-[123px] rounded-full"
            />
          </div>

          <div className="flex-col my-4">
            <p className="font-bold text-2xl">{user.name}</p>
            <p className="flex text-base font-bold">
              <span className="mr-2 font-normal">Role:</span>
              Software Engineer
            </p>
            <p className="flex text-base font-bold">
              <span className="mr-2 font-normal">Department:</span>
              I.T
            </p>
            <p className="flex text-base font-bold">
              <span className="mr-2 font-normal">Branch:</span>
              Head Office
            </p>
          </div>
        </div>
        <div className="flex">
          <FcCalendar className="text-3xl mr-2" />
          <div className="text-base">{format(today, "dd, MMM yyyy")}</div>
        </div>
      </div>
      {/* <Calendar /> */}
      <div className="w-full flex items-center justify-around">
        <div className="w-[632px] h-full flex-col shadow-md mr-8 shadow-red-200">
          <div className="h-[52px] bg-red-600 rounded-t-xl text-xl text-white font-medium p-4">
            Favorite Links
          </div>
          <div className="flex flex-col p-4">
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
    </div>
  );
};

export default Dashboard;
