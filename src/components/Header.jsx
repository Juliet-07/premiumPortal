import React, { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";

const Header = ({ text }) => {
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
      <div className="w-full bg-red-600 h-20 flex items-center justify-between px-10 shadow-xl">
        <div className="text-white font-semibold text-xl">{text}</div>
        <div className="flex items-center justify-center text-white font-bold text-2xl">
          <div className="text-base font-semibold p-2">
            {hour < 12
              ? "Good Morning "
              : hour < 17
              ? "Good Afternoon "
              : "Good Evening "}
            {user.name}
          </div>
          <div className="w-14 h-14 bg-gray-100 m-4 rounded-full flex items-center justify-center">
            <IoPersonSharp size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
