import React from "react";

const Settings = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold text-center text-red-600 uppercase relative bottom-10">
            staff profile manager
          </h1>
          <div className="w-full p-6 m-auto bg-white border border-red-600 rounded shadow-lg shadow-red-600/50 lg:max-w-md">
            <form>
              <div className="mt-4">
                <label
                  htmlFor="account"
                  className="block text-sm text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full px-2 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="account"
                  className="block text-sm text-gray-800"
                >
                  Sex
                </label>
                <input
                  type="text"
                  className="block w-full px-2 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="account"
                  className="block text-sm text-gray-800"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="block w-full px-2 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="account"
                  className="block text-sm text-gray-800"
                >
                  Job Role
                </label>
                <input
                  type="text"
                  className="block w-full px-2 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="account"
                  className="block text-sm text-gray-800"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="block w-full px-2 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button className="w-full px-2 py-1 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
