import React, { useState, useEffect, useRef } from "react";
import {
  FaUserCircle,
  FaBuilding,
  FaEye,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UserCard from "./UserCard";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline, IoMdCloseCircle } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import SortUsers from "./SortUsers";
import { AddUserForm } from "./addUserForm";

import { useSelector, useDispatch } from "react-redux";
import { setAllUsers, updateUser, deleteUser } from "../store/UsersSlice";

const spinnerStyles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  size: 60,
};

const ListUsers = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.list);

  // const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  // console.log(showAddForm);

  const [id, setId] = useState(null);

  //for the sake of time I'm only using name & email for displaying an user at the top/start of the list
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [sortUsersByName, setSortUsersByName] = useState(false);

  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortUsers = [...allUsers].sort((a, b) => a.name.localeCompare(b.name));

  /*Updating using Redux*/

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
        // setUsers(data);
        //save api response data to redux state
        dispatch(setAllUsers(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [dispatch]);

  const populateUseStates = ({ id, name, email }) => {
    setId(id);
    setName(name);
    setEmail(email);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, name, email }));
    setId(null);
    setUpdateName("");
    setUpdateEmail("");
  };

  const ref = useRef(null);

  const handleScrollToEditForm = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  /*Delete using Redux*/

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  // console.log(allUsers);

  return (
    <main ref={ref} className="px-[4rem] mb-[6rem]">
      <div className="w-fit py-[0.4rem] px-[1rem] text-[var(--light-color)] bg-[var(--dark-color)] mb-[3rem] gap-[0.3rem] rounded-[0.4rem] hover:bg-[var(--primary-color)] transition-all duration-200 ease-in-out">
        {!showAddForm ? (
          <button
            onClick={() => setShowAddForm(true)}
            className="text-xl font-bold flex items-center gap-[0.4rem]"
          >
            <IoMdAddCircleOutline className="font-bold text-2xl click_cursor" />
            Add User
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
        />
      )}

      {id && (
        <div className="w-fit mb-[3rem] bg-[var(--dark-color)] text-[var(--light-color)] px-[2rem] py-[4rem] rounded-[0.4rem]">
          <form onSubmit={handleUpdate}>
            <div className="w-fit flex flex-col gap-[1rem]">
              <h1 className="text-xl font-bold uppercase">Update user</h1>
              <span className="h-[6px] w-[100px] bg-[var(--primary-color)]"></span>
              <label htmlFor="id">ID:</label>
              <input
                type="number"
                name="id"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                placeholder="ID"
                className=" outline-none border-4 focus:border-[var(--primary-color)] w-[350px] bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem] transition-colors duration-200 ease-in-out"
              />
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="outline-none border-4 focus:border-[var(--primary-color)] w-[350px] bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem] transition-colors duration-200 ease-in-out"
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
                  className="mt-[1rem] text-md font-bold bg-green-600 text-[var(--light-color)] w-fit px-[1rem] py-[0.4rem] rounded-[0.4rem] hover:bg-green-500 transition-colors duration-200 ease-in-out"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setId(null)}
                  className="mt-[1rem] text-md font-bold bg-[var(--primary-color)] text-[var(--light-color)] w-fit px-[1rem] py-[0.4rem] rounded-[0.4rem] hover:bg-red-900 transition-colors duration-200 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
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
            allUsers.map((user) => (
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
                <div className="flex gap-[1rem]">
                  <Link to={`/users/${user.id}`}>
                    <button className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-green-700 hover:bg-green-600 transition-all duration-200 ease-in-out">
                      <FaEye className="click_cursor" />
                    </button>
                  </Link>
                  <button
                    className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--dark-color)] px-[1.2rem] py-[0.4rem] bg-orange-500 hover:bg-orange-400 transition-all duration-200 ease-in-out"
                    type="button"
                    onClick={() => populateUseStates(user)}
                  >
                    <FaEdit
                      onClick={() => handleScrollToEditForm()}
                      className="text-[var(--light-color)] click_cursor"
                    />
                  </button>
                  <button
                    className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-[var(--primary-color)] hover:bg-red-900 transition-all duration-200 ease-in-out"
                    onClick={() => handleDelete(user.id)}
                    type="button"
                  >
                    <FaTrash className="click_cursor" />
                  </button>
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
                <div className="flex gap-[1rem]">
                  <Link to={`/users/${user.id}`}>
                    <button className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-green-700 hover:bg-green-600 transition-all duration-200 ease-in-out">
                      <FaEye className="click_cursor" />
                    </button>
                  </Link>
                  <button
                    className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--dark-color)] px-[1.2rem] py-[0.4rem] bg-orange-500 hover:bg-orange-400 transition-all duration-200 ease-in-out"
                    type="button"
                    onClick={() => populateUseStates(user)}
                  >
                    <FaEdit
                      onClick={() => handleScrollToEditForm()}
                      className="text-[var(--light-color)] click_cursor"
                    />
                  </button>
                  <button
                    className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-[var(--primary-color)] hover:bg-red-900 transition-all duration-200 ease-in-out"
                    onClick={() => handleDelete(user.id)}
                    type="button"
                  >
                    <FaTrash className="click_cursor" />
                  </button>
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
                <div className="flex gap-[1rem]">
                  <Link to={`/users/${user.id}`}>
                    <button className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-green-700 hover:bg-green-600 transition-all duration-200 ease-in-out">
                      <FaEye className="click_cursor" />
                    </button>
                  </Link>

                  <button
                    className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--dark-color)] px-[1.2rem] py-[0.4rem] bg-orange-500 hover:bg-orange-400 transition-all duration-200 ease-in-out"
                    type="button"
                    onClick={() => populateUseStates(user)}
                  >
                    <FaEdit
                      onClick={() => handleScrollToEditForm()}
                      className="text-[var(--light-color)] click_cursor"
                    />
                  </button>

                  <button
                    className="flex items-center gap-[0.6rem] rounded-[0.4rem] text-[var(--light-color)] px-[1.2rem] py-[0.4rem] bg-[var(--primary-color)] hover:bg-red-900 transition-all duration-200 ease-in-out"
                    onClick={() => handleDelete(user.id)}
                    type="button"
                  >
                    <FaTrash className="click_cursor" />
                  </button>
                </div>
              </UserCard>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ListUsers;
