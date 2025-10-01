import React from "react";
import { Link } from "react-router-dom";
import { TbMoodSad } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <main className="h-[80vh] flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center gap-[0.4rem]">
        <TbMoodSad className="text-center text-6xl" />
        <h1 className="font-bold text-5xl">Error - 404</h1>
        <p className="text-lg">Page not found</p>
        <div className="">
          <Link
            to="/"
            className="flex gap-[0.2rem] items-center text-lg bg-[#111111] text-[var(--light-color)] mt-4 px-[1.4rem] py-[0.4rem] rounded-[0.4rem] hover:bg-[var(--primary-color)] transition-all duration-200 ease-in-out"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
