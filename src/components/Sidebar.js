import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return isSidebarOpen ? (
    <div className="nav-links sidebar nav-toggle">
      <Link to="/" className="">
        Home
      </Link>
      <br />
      <Link to="/about" className="">
        About
      </Link>
    </div>
  ) : null;
};
export default Sidebar;
