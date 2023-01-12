import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginImage from "../assets/login.png";
import Logo from "../assets/logo(1).png";
// import Loader from "../components/Loader";
import CircleLoader from "react-spinners/CircleLoader";
import Bank from "../assets/bank.JPG";
const Signin = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const initialValues = {
    userName: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState(initialValues);
  const { userName, password } = loginDetails;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const [loading, setLoading] = useState(false);
  // function to validate user through ActiveDirectory
  const handleLoginValidation = () => {
    try {
      fetch("http://192.168.207.18:8080/api/ActiveDirectory/AuthenticateUser", {
        method: "POST",
        body: JSON.stringify(loginDetails),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user, "confirm here");
          let userDetail = JSON.stringify(user.data);
          localStorage.setItem("userInfo", userDetail);
          alert(user.message);
          navigate("/dashboard");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <img
        src={Bank}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* dropdown, for profile settings and logout. */}
      {/* <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      /> */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="absolute">
        <div className="w-[500px] h-[100px] flex items-center justify-center mt-4">
          <img src={Logo} alt="premium-logo" />
        </div>
        <div className="w-full h-full relative top-10 left-10 2xl:left-96">
          <div className="flex bg-gray-200 shadow-2xl rounded-2xl">
            <div className="relative">
              <img
                className="w-[600px] h-[600px] object-cover"
                src={LoginImage}
                alt="PremiumImage"
              />
              <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
              <div className="absolute text-white font-bold text-center bottom-80 left-44 uppercase text-3xl">
                premium <font color="text-red-600">connect</font>
              </div>
            </div>
            <div className="w-[600px] h-[600px] p-12">
              <div className="w-[485px] h-[492px] flex flex-col p-10">
                <div className="text-center font-bold text-3xl">Login</div>
                <form onSubmit={handleSubmit(handleLoginValidation)}>
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
                      name="userName"
                      value={userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-10">
                    <label
                      htmlFor="password"
                      className="block text-lg text-gray-800 font-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="mt-4">
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
                </div> */}
                  <div className="mt-20">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-medium tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                      onClick={() => setLoading(!loading)}
                    >
                      Login
                    </button>
                    <div className="flex items-center justify-center mt-2">
                      <CircleLoader loading={loading} color="red" />
                    </div>
                    {/* <Loader /> */}
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
      </div>
    </>
  );
};

export default Signin;
