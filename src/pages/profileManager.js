import React from "react";
import Icon from "../assets/icon.png"

const ProfileManager = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[400px] md:w-[500px] flex items-center justify-center bg-white shadow-xl border rounded-[10px] mt-10 mb-8">
        <div className="w-[358px] m-4">
          <div className="flex flex-col items-center justify-center">
            <img src={Icon} alt="icon" className="w-10 h-10" />
            <div className="font-bold text-2xl my-2 text-center">
              Staff Profile Manager
            </div>
          </div>
          <form>
            <div className="m-4">
              <div>
                <label className="mb-2 text-sm font-normal text-[#2d3748]">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                //   name="fullname"
                //   value={fullname}
                //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="m-4">
              <div>
                <label className="mb-2 text-sm font-normal text-[#2d3748]">
                  Department
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                //   name="Department"
                //   value={username}
                //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="m-4">
              <div>
                <label className="mb-2 text-sm font-normal text-[#2d3748]">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                //   name="email"
                //   value={email}
                //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="m-4">
              <div>
                <label className="mb-2 text-sm font-normal text-[#2d3748]">
                  Supervisor
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                //   name="email"
                //   value={email}
                //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="m-4 relative">
              <div>
                <label className="mb-2 text-sm font-normal text-[#2d3748]">
                  Password
                </label>
                <input
                //   type={seePassword === false ? "password" : "text"}
                type="password"
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                //   name="password"
                //   value={password}
                //   onChange={handleChange}
                />
              </div>
              {/* <div className="text-2xl absolute top-[36px] right-5">
                {seePassword === false ? (
                  <AiFillEye onClick={handleToggle} />
                ) : (
                  <AiFillEyeInvisible onClick={handleToggle} />
                )}
              </div> */}
            </div>
            <div className="m-4 relative">
              <div>
                <label className="mb-2 text-sm font-normal text-[#2d3748]">
                  Confirm Password
                </label>
                <input
                //   type={seeConfirmPassword === false ? "password" : "text"}
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                //   name="confirmPassword"
                //   value={confirmPassword}
                //   onChange={handleChange}
                />
              </div>
              {/* <div className="text-2xl absolute top-[36px] right-5">
                {seeConfirmPassword === false ? (
                  <AiFillEye onClick={confirmToggle} />
                ) : (
                  <AiFillEyeInvisible onClick={confirmToggle} />
                )}
              </div> */}
            </div>
            <button
              type="submit"
              className="m-4 text-center p-3 text-white text-sm font-bold bg-red-600 w-full h-[48px] border rounded-[5px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileManager;
