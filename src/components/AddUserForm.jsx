import React from "react";
import { useDispatch } from "react-redux";
import { addUserToStart } from "../store/UsersSlice";

export const AddUserForm = ({ name, setName, email, setEmail }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    if (newUser) dispatch(addUserToStart(newUser));

    // console.log(newUser);

    setName("");
    setEmail("");
  };

  return (
    <div className="w-fit mb-[3rem] bg-[var(--dark-color)] text-[var(--light-color)] px-[2rem] py-[4rem] rounded-[0.4rem]">
      <form onSubmit={handleSubmit}>
        {/* Since it's not mentioned what type of validation to use besides email and name being required, for the sake of time I'm not using RegEx, any library for input validation and even manual validation just using some basic html input validations, but ofc in real-world projects this is not recommended */}
        <div className="w-fit flex flex-col gap-[1rem]">
          <h1 className="text-xl font-bold uppercase">Add a new user</h1>
          <span className="h-[6px] w-[100px] bg-[var(--primary-color)]"></span>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Full Name"
            className=" outline-none border-4 focus:border-[var(--primary-color)] w-[350px] bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem] transition-colors duration-200 ease-in-out"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="outline-none border-4 focus:border-[var(--primary-color)] w-[350px] bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem] transition-colors duration-200 ease-in-out"
          />
          <div className="flex gap-[1rem]">
            <button
              type="submit"
              className="mt-[1rem] text-md font-bold bg-[var(--primary-color)] text-[var(--light-color)] w-fit px-[1rem] py-[0.4rem] rounded-[0.4rem] hover:bg-red-900 transition-colors duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
