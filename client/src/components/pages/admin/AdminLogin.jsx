import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation1 from "../../bar/Navigation1";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when starting the request

    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("user", response.data.user);
        localStorage.setItem("schoolName", response.data.schoolName);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("_id", response.data._id);
        if (response.data.status) {
          navigate("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Set isLoading to false after the request is completed
      });
  };
   
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin");
    }
  }, [navigate]);
  return (
    <>
      <Navigation1 />
      <section className="  md:py-52  dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] flex items-center overflow-hidden">
        <div
          className="absolute  top-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat w-[60vw] hidden md:block -z-[1]"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/NikhilCyberk/SMS/main/client/src/assets/admin.png)",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 10%)",
            height: "80rem",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-teal-800 bg-opacity-20 -z-[1]" />
        </div>
        <div className="container  m-14  pl-[12rem]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ">
              <p className="text-lg opacity-80">
                Admin <b>Login</b>
              </p>
              {/* <SubscribeForm /> */}
              //testing id and password
              <div>
                email: knikhil128@gmail.com
                <br />
                password: 12
              </div>
              <form
                onSubmit={handleSubmit}
                className="ezy__comingsoon13-subscription-form mt-6 "
              >
                <div className="flex flex-col w-full">
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <Link
                  to="/authorization/forgot-password"
                  className="text-blue-500"
                >
                  Forgot Password
                </Link>

                <p className="mt-8 text-gray-600">
                  Don't Have an Account?{" "}
                  <Link to="/signup" className="text-blue-500">
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
