import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#2b2e35] h-20">
        <div className="flex flex-col items-center justify-center p-4 text-base text-white font-bold uppercase">
          <p className="flex items-center">
            All Rights Reserved <AiOutlineCopyrightCircle className="ml-2" />
          </p>
          <p>PremiumTrust Bank {new Date().getFullYear()}</p>
        </div>{" "}
      </div>
    </>
  );
};

export default Footer;
