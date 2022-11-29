import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <p>settings page</p>
      <Link to="/" className="underline">
        go to dashboard
      </Link>
    </div>
  );
};

export default Settings;
