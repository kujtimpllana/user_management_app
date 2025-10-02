import React from "react";

export const AddUserForm = ({
  name,
  setName,
  email,
  setEmail,
  users,
  setUsers,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const localUser = {
      id: Date.now(),
      name,
      email,
    };

    console.log(localUser);

    setUsers((prev) => [localUser, ...prev]);
    setName("");
    setEmail("");

    // console.log(users);
  };
  return (
    <div className="w-fit mb-[3rem] bg-[var(--dark-color)] text-[var(--light-color)] px-[2rem] py-[4rem] rounded-[0.4rem]">
      <form onSubmit={handleSubmit}>
        {/* Since it's not mentioned what type of validation to use besides email and name being required, for the sake of time I'm not using RegEx, any library for input validation and even manual validation just using some basic html input validations, but ofc in real-world projects this is not recommended */}
        <div className="w-fit flex flex-col gap-[1rem]">
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
              className="mt-[1rem] text-md font-bold bg-green-700 text-[var(--light-color)] w-fit px-[1rem] py-[0.4rem] rounded-[0.4rem] hover:bg-green-600 transition-colors duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
