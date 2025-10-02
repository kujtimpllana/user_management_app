import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBuilding, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UserCard from "./UserCard";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline, IoMdCloseCircle } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import SortUsers from "./SortUsers";
import { AddUserForm } from "./addUserForm";

const spinnerStyles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  size: 60,
};

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  // console.log(showAddForm);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [sortUsersByName, setSortUsersByName] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

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
      <div className="w-fit py-[0.4rem] px-[1rem] text-[var(--light-color)] bg-[var(--dark-color)] mb-[3rem] gap-[0.3rem] rounded-[0.4rem] hover:bg-[var(--primary-color)] transition-all duration-200 ease-in-out">
        {!showAddForm ? (
          <button
            onClick={() => setShowAddForm(true)}
            className="text-xl font-bold flex items-center gap-[0.4rem]"
          >
            <IoMdAddCircleOutline className="font-bold text-2xl click_cursor" />
            Add
          </button>
        ) : (
          <button
            onClick={() => setShowAddForm(false)}
            className="text-xl font-bold flex items-center gap-[0.4rem]"
          >
            <IoMdCloseCircle className="font-bold text-2xl click_cursor" />
            Close
          </button>
        )}
      </div>
      {showAddForm && (
        <AddUserForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          users={users}
          setUsers={setUsers}
        />
      )}
      <div className="w-[200px] md:w-[800px] flex flex-col md:flex-row gap-[2rem]">
        <SearchInput search={search} setSearch={setSearch} />
        <SortUsers
          sortUsersByName={sortUsersByName}
          setSortUsersByName={setSortUsersByName}
        />
      </div>
      {search === "" ? (
        <h2 className="font-bold text-2xl mt-[3rem]">All users:</h2>
      ) : search && filteredUsers.length == 0 ? (
        <h2 className="font-bold text-2xl mt-[3rem]">
          No users found with the keyword: "<span>{search}</span>"
        </h2>
      ) : (
        <h2 className="font-bold text-2xl mt-[3rem]">
          Users found with the keyword: "<span>{search}</span>"
        </h2>
      )}

      {isLoading && (
        <ClipLoader
          color={spinnerStyles.borderColor}
          loading={isLoading}
          size={spinnerStyles.size}
          className="block mt-[1rem]"
        />
      )}
      {error && (
        <p className="w-fit text-lg bg-[var(--primary-color)] text-[var(--light-color)] px-[1rem] py-[0.4rem] rounded-[0.4rem]">
          Error: {error}
        </p>
      )}
      <div>
        <div className="mt-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] md:gap-[4rem] lg:gap-[2rem] xl:gap-[3.8rem]">
          {!search &&
            !sortUsersByName &&
            users.map((user) => (
              <UserCard key={user.id}>
                <FaUserCircle className="text-5xl" />
                <h2 className="text-2xl font-bold text-red-600">{user.name}</h2>
                <p className="flex items-center gap-[0.6rem]">
                  <MdEmail /> {user.email}
                </p>
                {user?.company?.name && (
                  <p className="flex items-center gap-[0.6rem]">
                    <FaBuilding /> {user.company.name}
                  </p>
                )}
                <div className="flex">
                  <Link to={`/users/${user.id}`}>
                    <button className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-[var(--primary-color)] hover:bg-red-900 transition-all duration-200 ease-in-out">
                      <FaEye className="click_cursor" />
                      View
                    </button>
                  </Link>
                </div>
              </UserCard>
            ))}

          {search !== "" &&
            filteredUsers.map((user) => (
              <UserCard key={user.id}>
                <FaUserCircle className="text-5xl" />
                <h2 className="text-2xl font-bold text-red-600">{user.name}</h2>
                <p className="flex items-center gap-[0.6rem]">
                  <MdEmail /> {user.email}
                </p>
                {user?.company?.name && (
                  <p className="flex items-center gap-[0.6rem]">
                    <FaBuilding /> {user.company.name}
                  </p>
                )}
                <div className="flex">
                  <Link to={`/users/${user.id}`}>
                    <button className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-[var(--primary-color)] hover:bg-red-900 transition-all duration-200 ease-in-out">
                      <FaEye className="click_cursor" />
                      View
                    </button>
                  </Link>
                </div>
              </UserCard>
            ))}

          {sortUsersByName &&
            sortUsers.map((user) => (
              <UserCard key={user.id}>
                <FaUserCircle className="text-5xl" />
                <h2 className="text-2xl font-bold text-red-600">{user.name}</h2>
                <p className="flex items-center gap-[0.6rem]">
                  <MdEmail /> {user.email}
                </p>
                {user?.company?.name && (
                  <p className="flex items-center gap-[0.6rem]">
                    <FaBuilding /> {user.company.name}
                  </p>
                )}
                <div className="flex">
                  <Link to={`/users/${user.id}`}>
                    <button className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-[var(--primary-color)] hover:bg-red-900 transition-all duration-200 ease-in-out">
                      <FaEye className="click_cursor" />
                      View
                    </button>
                  </Link>
                </div>
              </UserCard>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ListUsers;
