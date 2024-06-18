import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation1 from "../../bar/Navigation1";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", {
        name,
        password,
        email,
        schoolName,
      })
      .then((response) => {
        // console.log(response);
        if (response.status) {
          confirm(response.data.message);
          navigate("/login");
        }
      })
      .catch((error) => {
        confirm(error);
      });
  };

  return (
    <>
      <Navigation1 />
      <section className=" md:py-52 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] flex items-center overflow-hidden">
        <div
          className="absolute top-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat w-[60vw] hidden md:block -z-[1]"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/NikhilCyberk/SMS/main/client/src/assets/admin.png)",
            clipPath: "polygon(30% 0, 100% 0, 100% 10%, 0% 100%)",
            height: "80rem",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-teal-800 bg-opacity-20 -z-[1]" />
        </div>
        <div className="container m-4 pl-[12rem]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ">
              <p className="text-lg opacity-80">
                Admin <b>Sign Up</b>
              </p>
              {/* <SubscribeForm /> */}

              <form
                onSubmit={handleSubmit}
                className="ezy__comingsoon13-subscription-form mt-6 "
              >
                <div className="flex flex-col w-full">
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="text"
                    placeholder="Your Username"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="text"
                    placeholder="Your School Name"
                    onChange={(e) => setSchoolName(e.target.value)}
                    required
                  />
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="password"
                    placeholder="**********"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="py-3 px-5 font-semibold bg-blue-600 border border-blue-600 text-white rounded-xl hover:bg-opacity-90 hover:border-opacity-90 duration-300 w-full"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="mt-2 text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                  </Link>
                </p>
              </form>

              <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9 mt-12 md:mt-0">
                {/* <Countdown /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminSignup;
