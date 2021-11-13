import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo"></img>
        </Link>
        <div className="nav-links nav-narrow">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="dropdown nav-toggle">
          <button
            className="btn btn-primary"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
