import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import { useSelector } from "react-redux";
import { setAllUsers } from "../store/UsersSlice";

const UserDetails = () => {
  const { id } = useParams();
  const singleUser = useSelector((state) =>
    state.users.list.find((user) => user.id == Number(id))
  );

  if (!singleUser) return;

  return (
    <main className="px-[4rem]">
      <div className="flex flex-col h-auto md:h-[calc(100vh-2.4rem)] justify-center items-center my-[2rem]">
        <div className="w-auto flex-col gap-[0.6rem] bg-[var(--dark-color)] text-[var(--light-color)] px-[6rem] py-[4rem] rounded-[0.4rem]">
          <div className="flex items-center gap-[2rem]">
            <FaUserCircle className="text-6xl" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold uppercase">User Details</h1>
              <span className="h-[6px] w-[80px] bg-[var(--primary-color)] my-[0.2rem]"></span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-[2rem]">
            <div className="flex flex-col">
              <label htmlFor="name" className="mt-[2rem]">
                Name:
              </label>
              <input
                type="text"
                value={singleUser.name}
                id="name"
                name="name"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="email" className="mt-[1rem]">
                Email:
              </label>
              <input
                type="text"
                value={singleUser.email}
                id="email"
                name="email"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="company" className="mt-[1rem]">
                Company:
              </label>
              <input
                type="text"
                value={singleUser.company.name}
                id="company"
                name="company"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="street" className="mt-[1rem]">
                Street:
              </label>
              <input
                type="text"
                value={singleUser.address.street}
                id="street"
                name="street"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="suite" className="mt-[1rem]">
                Suite:
              </label>
              <input
                type="text"
                value={singleUser.address.suite}
                id="suite"
                name="suite"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="mt-[1rem] sm:mt-[2rem]">
                City:
              </label>
              <input
                type="text"
                value={singleUser.address.city}
                id="city"
                name="city"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="zipcode" className="mt-[1rem]">
                Zip Code:
              </label>
              <input
                type="text"
                value={singleUser.address.zipcode}
                id="zipcode"
                name="zipcode"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />

              <label htmlFor="phone" className="mt-[1rem]">
                Phone:
              </label>
              <input
                type="text"
                value={singleUser.phone}
                id="phone"
                name="phone"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />

              <label htmlFor="website" className="mt-[1rem]">
                Website:
              </label>
              <input
                type="text"
                value={singleUser.website}
                id="website"
                name="website"
                className="!cursor-not-allowed !caret-transparent !outline-0 bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
