import React from "react";

const Header = ({text}) => {
  return (
    <div className="w-full bg-[#2b2e35] h-20 py-6 px-10 text-white font-bold text-2xl">
      {text}
    </div>
  );
};

export default Header;
