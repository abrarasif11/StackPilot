import React from "react";
import logo from "../../assets/banner/favicon.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img className="mb-1" src={logo} />
        <p className="text-3xl -ml-0 font-bold text-primary">StackPilot</p>
      </div>
    </Link>
  );
};

export default Logo;
