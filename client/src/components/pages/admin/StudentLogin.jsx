import React, { useEffect, useState } from "react";
import Navigation1 from "../../bar/Navigation1";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StudentLogin = ({ setLoginStatus }) => {
  const [rollNum, setRollNum] = useState("");
  const [password, setPassword] = useState("");
  const [studentName, setstudentName] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/student-login", {
        rollNum,
        studentName,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response, 789546);
          localStorage.setItem("_id", response.data._id);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("sclassName_id", response.data.sclassName._id);
          localStorage.setItem(
            "sclassName",
            response.data.sclassName.sclassName
          );
          localStorage.setItem("rollNum", response.data.rollNum);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("schoolName", response.data.school.schoolName);
          localStorage.setItem("school_id", response.data.school._id);

          setIsLoading(false);
          setLoginStatus((prev) => !prev);
          navigate("/student");
        } else if (response.data.message) {
          alert(response.data.message);
          // Navigate to student dashboard or desired route
        }
      })
      .catch((error) => {
        // setIsLoading(false);
        alert("Login failed. Please try again.", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "Student") {
      navigate("/student");
    }
  }, [navigate]);

  return (
    <>
      <Navigation1 />
      <section className="md:py-52 bg-white dark:bg-indigo-900 text-gray-900 dark:text-white relative z-[1] flex items-center overflow-hidden">
        <div
          className="absolute  top-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat w-[60vw] hidden md:block -z-[1]"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/NikhilCyberk/SMS/main/client/src/assets/student.png)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
            height: "60rem",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-20 -z-[1]" />
        </div>
        <div className="container m-[6rem]  pl-[12rem]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ">
              <p className="text-lg opacity-80">
                Student <b>Login</b>
              </p>
              <form
                onSubmit={handleSubmit}
                className="ezy__comingsoon13-subscription-form mt-6 "
              >
                <div className="flex flex-col w-full">
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-white dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="text"
                    placeholder="Enter Your Roll No."
                    onChange={(e) => setRollNum(e.target.value)}
                    required
                  />
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-white dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setstudentName(e.target.value)}
                    required
                  />
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="password"
                    placeholder="*********"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="py-3 px-5 font-semibold bg-gray-600 border border-blue-900 text-white rounded-xl hover:bg-opacity-90 hover:border-opacity-90 duration-300 w-full"
                  >
                    Login
                  </button>
                </div>
                <Link
                  to="/authorization/forgot-password"
                  className="text-blue-200"
                >
                  Forgot Password
                </Link>
                <p className="mt-8 text-gray-100">
                  Don't Have an Account?<br></br> communicate with the school
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

export default StudentLogin;
