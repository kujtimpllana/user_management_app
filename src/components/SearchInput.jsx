import React from "react";

const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      className="w-[350px] px-[1rem] py-[0.6rem] text-lg outline-none border-4 border-[var(--dark-color)] rounded-[0.4rem] focus:border-[var(--primary-color)]"
    />
  );
};

export default SearchInput;
