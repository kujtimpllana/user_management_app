import React from "react";
import { NavLink, Link } from "react-router-dom";
import linkpluslogo from "../assets/linkplus_full_logo.png";

export const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav className="bg-[var(--primary-color)] px-[4rem] py-[0.6rem] flex items-center justify-between text-[var(--light-color)]">
        <div>
          <Link to="/">
            <img src={linkpluslogo} alt="LINKPLUS Logo" className="w-[120px]" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-[1.4rem] font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-[var(--dark-color)] rounded-[0.4rem]" : ""
              }
            >
              <li className="px-[0.8rem] py-[0.2rem] hover:text-[var(--light-color)] hover:bg-[var(--dark-color)] hover:rounded-[0.4rem] transition-all duration-200 ease-in-out click_cursor">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-[var(--dark-color)] rounded-[0.4rem]" : ""
              }
            >
              <li className="px-[0.8rem] py-[0.2rem] hover:text-[var(--light-color)] hover:bg-[var(--dark-color)] hover:rounded-[0.4rem] transition-all duration-200 ease-in-out click_cursor">
                About
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};
