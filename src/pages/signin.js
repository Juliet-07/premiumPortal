import React from "react";
import LoginImage from "../assets/login.png";
import Logo from "../assets/logo.png";

const Signin = () => {
  return (
    <div
      className="w-full h-screen bg-cover object-contain"
      style={{ backgroundImage: `url(${LoginImage})` }}
    >
      <div className="w-[446px] h-[50px] mt-0">
        <img src={Logo} alt="premium-logo" />
      </div>
      <div className="w-full border border-white relative top-24"></div>
      <div className="flex items-center justify-center">
        <div className="w-[458px] h-[492px] shadow-xl bg-white relative top-[200px] border rounded-lg">
            <div className="text-center w-[275px] h-[48px]">Welcome</div>
          <form>
            <div className="mt-4">
              <label htmlFor="userName" className="block text-sm text-gray-800">
                Username
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                // name="username"
                // value={userName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                // name="password"
                // value={password}
                // onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm text-gray-800">
                OTP
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                // name="otp"
                // value={otp}
                // onChange={handleChange}
              />
            </div>
            <div className="mt-20">
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
