import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="">
      <nav className="bg-[var(--primary-color)] px-[4rem] py-[0.6rem] flex items-center justify-between text-[var(--light-color)]">
        <div>
          <h1 className="text-2xl font-bold">LINKPLUS.</h1>
        </div>
        <div>
          <ul className="flex gap-[1.4rem] font-bold">
            <Link to="/">
              <li className="px-[0.8rem] py-[0.2rem] hover:text-[var(--light-color)] hover:bg-[var(--dark-color)] hover:rounded-[0.4rem] transition-all duration-200 ease-in-out">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="px-[0.8rem] py-[0.2rem] hover:text-[var(--light-color)] hover:bg-[var(--dark-color)] hover:rounded-[0.4rem] transition-all duration-200 ease-in-out">
                About
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};
