import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("An error has occurred.");
        }
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setCompany(data.company.name);
        setStreet(data.address.street);
        setSuite(data.address.suite);
        setCity(data.address.city);
        setZipcode(data.address.zipcode);
        setPhone(data.phone);
        setWebsite(data.website);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleUser();
  }, [id]);

  return (
    <main className="px-[4rem]">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="flex flex-col h-auto md:h-[calc(100vh-2.4rem)] justify-center items-center my-[2rem]">
        <div className="w-auto flex-col gap-[0.6rem] bg-[var(--dark-color)] text-[var(--light-color)] px-[6rem] py-[4rem] rounded-[0.4rem]">
          <div>
            <FaUserCircle className="text-6xl" />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-[2rem]">
            <div className="flex flex-col">
              <label htmlFor="name" className="mt-[2rem]">
                Name:
              </label>
              <input
                type="text"
                value={name}
                id="name"
                name="name"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="street" className="mt-[1rem]">
                Email:
              </label>
              <input
                type="text"
                value={email}
                id="email"
                name="email"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="company" className="mt-[1rem]">
                Company:
              </label>
              <input
                type="text"
                value={company}
                id="company"
                name="company"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="street" className="mt-[1rem]">
                Street:
              </label>
              <input
                type="text"
                value={street}
                id="street"
                name="street"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="suite" className="mt-[1rem]">
                Suite:
              </label>
              <input
                type="text"
                value={suite}
                id="suite"
                name="suite"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="mt-[1rem] sm:mt-[2rem]">
                City:
              </label>
              <input
                type="text"
                value={city}
                id="city"
                name="city"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
              <label htmlFor="zipcode" className="mt-[1rem]">
                Zip Code:
              </label>
              <input
                type="text"
                value={zipcode}
                id="zipcode"
                name="zipcode"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />

              <label htmlFor="phone" className="mt-[1rem]">
                Phone:
              </label>
              <input
                type="text"
                value={phone}
                id="phone"
                name="phone"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />

              <label htmlFor="website" className="mt-[1rem]">
                Website:
              </label>
              <input
                type="text"
                value={website}
                id="website"
                name="website"
                className="bg-[var(--light-color)] text-[var(--dark-color)] px-[1rem] py-[0.3rem] rounded-[0.4rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
