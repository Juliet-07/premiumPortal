import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCashCoin, BsBank2, BsShieldLockFill } from "react-icons/bs";
import { FaCubes, FaSearchDollar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineApproval, MdTimeToLeave } from "react-icons/md";

const Applications = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-20 p-4">
          <form className="flex items-center">
            <label for="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Search Applications"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>
        </div>
        <div className="mx-20">
          <div className="grid grid-cols-4 gap-10 md:gap-0 text-red-600 text-lg font-normal uppercase">
            <a
              href="https://apps.powerapps.com/play/e/default-ea5cc842-6f08-4924-bd60-e99929d9531b/a/4b06fec2-d527-4266-b86c-c7e294402242?tenantId=ea5cc842-6f08-4924-bd60-e99929d9531b&screenname=supervisor&skipAppMet&skipmetadata=true#"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <MdOutlineApproval size={40} />
                appraisal portal
              </div>
            </a>
            <a
              href="https://bvnportal.premiumtrustbank.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <BsShieldLockFill size={40} />
                bvn portal
              </div>
            </a>
            <a
              href="https://cib.premiumtrustbank.com/user/login"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <BsBank2 size={40} />
                cib
              </div>
            </a>
            <a
              href="https://premiumfcubs.premiumtrustbank.com/FCJNeoWeb"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <FaCubes size={40} />
                Flexcube
              </div>
            </a>
            <a
              href="https://apps.powerapps.com/play/e/default-ea5cc842-6f08-4924-bd60-e99929d9531b/a/35593a4c-e6d7-4bda-b389-1968894e731a?source=teamsopenwebsite&screenColor=rgba(255%2C%200%2C%200%2C%201)&hint=62a1fd7f-767c-4e46-adf4-b7c3d84affde#"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <MdTimeToLeave size={40} />
                leave portal
              </div>
            </a>
            <a href="https://172.18.5.50/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <GiMoneyStack size={40} />
                nibss portal
              </div>
            </a>
            <a
              href="http://obiee.premiumtrustbank.com:9502/xmlpserver"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <BsCashCoin size={40} />
                obiee
              </div>
            </a>

            <a
              href="http://pepportal.premiumtrustbank.com:2000/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <IoPeopleSharp size={40} />
                pep
              </div>
            </a>
            <a
              href="http://192.168.201.2/softaml_premiumtrust/login"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <FaSearchDollar size={40} />
                softaml
              </div>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center justify-center text-center w-32 h-32 rounded-xl shadow-xl shadow-red-300 m-4">
                <AiOutlinePlus size={40} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
