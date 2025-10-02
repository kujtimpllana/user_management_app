import React from "react";

const Hero = () => {
  return (
    <div className="h-[40vh] flex flex-col justify-center items-center gap-[1rem]">
      <h1 className="text-4xl font-bold">User Management APP</h1>
      <span className="h-[6px] w-[250px] bg-[var(--primary-color)] rounded-[0.4rem]"></span>
      <p className="w-[320px] md:w-[450px] lg:w-[600px] text-lg text-center">
        Our application provides a centralized platform for managing users
        efficiently and securely. Thanks to its simple and intuitive design, the
        application allows users to navigate with ease.
      </p>
    </div>
  );
};

export default Hero;
