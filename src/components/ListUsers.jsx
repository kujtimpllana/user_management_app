import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UserCard from "./UserCard";
import SearchInput from "./SearchInput";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("An error has occurred.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="px-[4rem] mb-[6rem]">
      <SearchInput search={search} setSearch={setSearch} />
      {search === "" ? (
        <h2 className="font-bold text-2xl mt-[3rem]">All users:</h2>
      ) : search && filteredUsers.length == 0 ? (
        <h2 className="font-bold text-2xl mt-[3rem]">
          No users found with the keyword: "
          <span className="font-bold italic">{search}</span>"
        </h2>
      ) : (
        <h2 className="font-bold text-2xl mt-[3rem]">
          Users found with the keyword: "
          <span className="font-bold italic">{search}</span>"
        </h2>
      )}

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <div className="mt-[3rem] grid grid-cols-4 gap-[8.4rem]">
          {search === ""
            ? users.map((user) => (
                <UserCard key={user.id}>
                  <FaUserCircle className="text-5xl" />
                  <h2 className="text-xl font-bold text-red-600">
                    {user.name}
                  </h2>
                  <p className="flex items-center gap-[0.6rem]">
                    <MdEmail /> {user.email}
                  </p>
                  <p className="flex items-center gap-[0.6rem]">
                    <FaBuilding /> {user.company.name}
                  </p>
                </UserCard>
              ))
            : filteredUsers.map((user) => (
                <UserCard key={user.id}>
                  <FaUserCircle className="text-5xl" />
                  <h2 className="text-xl font-bold text-red-600">
                    {user.name}
                  </h2>
                  <p className="flex items-center gap-[0.6rem]">
                    <MdEmail /> {user.email}
                  </p>
                  <p className="flex items-center gap-[0.6rem]">
                    <FaBuilding /> {user.company.name}
                  </p>
                </UserCard>
              ))}
        </div>
      </div>
    </main>
  );
};

export default ListUsers;
