import React from "react";

const UserCard = ({ children }) => {
  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] py-[3.4rem] bg-[var(--dark-color)] rounded-[0.4rem] text-[var(--light-color)]">
      {children}
    </div>
  );
};

export default UserCard;
