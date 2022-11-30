import React from "react";
import ProfilePhoto from "../assets/profile.jpg";
import { FcCalendar } from "react-icons/fc";
import { format, startOfToday } from "date-fns";
import Calendar from "../components/Calendar";
import Slider from "../components/Slider";

const Dashboard = () => {
  let today = startOfToday();
  return (
    <div className="w-[calc(100%-120px)] h-full">
      <div className="mx-10 mt-4 py-10 font-semibold w-[237px] h-[39px] text-3xl">
        Welcome Juliet
      </div>
      <div className="flex items-center justify-between mx-10 my-10">
        <div className="flex bg-[#ffffff] w-[415px] h-[150px] rounded-xl shadow-lg">
          <div className="mx-4 my-2">
            <img
              src={ProfilePhoto}
              alt="Profile_Photo"
              className="w-[120px] h-[123px] rounded-full"
            />
          </div>

          <div className="flex-col my-4">
            <p className="font-bold text-2xl">Juliet Joseph</p>
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
      <div className="flex items-center justify-between mx-10">
        <div className="w-[632px] h-full flex-col shadow-md mr-8">
          <div className="h-[52px] bg-[#2B2E35] rounded-t-xl text-xl text-white font-medium p-4">
            Favorite Links
          </div>
          <p>kdfjv fdlivnflvilfkdv</p>
          <p>kdfjv fdlivnflvilfkdv</p>
          <p>kdfjv fdlivnflvilfkdv</p>
          <p>kdfjv fdlivnflvilfkdv</p>
        </div>
        <div className="w-[362px] h-full flex-col shadow-md">
          <div className="h-[52px] bg-[#2B2E35] rounded-t-xl text-xl text-white font-medium p-4">
            Who is celebrating?
          </div>
          <p>kdfjv fdlivnflvilfkdv</p>
          <p>kdfjv fdlivnflvilfkdv</p>
          <p>kdfjv fdlivnflvilfkdv</p>
          <p>kdfjv fdlivnflvilfkdv</p>
        </div>
      </div>
      <div className="w-[1000px] h-[150px] mx-10 my-20">
        <Slider />
      </div>
    </div>
  );
};

export default Dashboard;
