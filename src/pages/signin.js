import React from "react";
import LoginImage from "../assets/login.png";
import Logo from "../assets/logo.png";

const Signin = () => {
  return (
    <>
      <div className="w-[400px] h-[50px]">
        <img src={Logo} alt="premium-logo" />
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center flex-1">
        <div className="flex bg-white shadow-2xl rounded-2xl">
          <div>
            <img
              className="w-[600px] h-[600px] object-cover"
              src={LoginImage}
              alt="PremiumImage"
            />
          </div>

          <div className="w-[600px] h-[600px] p-12">
            <div className="w-[485px] h-[492px] flex flex-col p-10">
              <div className="text-center font-bold text-3xl">Welcome</div>
              <form>
                <div className="mt-4">
                  <label
                    htmlFor="userName"
                    className="block text-lg text-gray-800 font-semibold "
                  >
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
                  <label
                    htmlFor="password"
                    className="block text-lg text-gray-800 font-semibold"
                  >
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
                  <label
                    htmlFor="password"
                    className="block text-lg text-gray-800 font-semibold"
                  >
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
                <div className="mt-12">
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 h-[200px] w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={LoginImage} alt="" />
        </div>
        <div className="bg-white flex flex-col justify-center">
          <form className="max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              SIGN IN
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              SIGNIN
            </button>
          </form>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Signin;
