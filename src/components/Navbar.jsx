import React from "react";

export const Navbar = () => {
  return (
    <header className="">
      <nav className="bg-[var(--primary-color)] px-[4rem] py-[0.6rem] flex items-center justify-between text-[var(--light-color)]">
        <div>
          <h1 className="text-2xl font-bold">LINKPLUS.</h1>
        </div>
        <div>
          <ul className="flex gap-[1.4rem]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
