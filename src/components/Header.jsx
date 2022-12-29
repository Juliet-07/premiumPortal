import React from "react";

const Header = ({text}) => {
  return (
    <div className="w-full bg-red-600 h-[60px] py-4 px-10 text-white font-bold text-2xl">
      {text}
    </div>
  );
};

export default Header;
