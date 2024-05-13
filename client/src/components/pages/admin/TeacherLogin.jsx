import React from "react";
import { Link } from "react-router-dom";
import Navigation1 from "../../bar/Navigation1";

const TeacherLogin = () => {
  return (
    <div>
      <div>
        <Navigation1 />
      </div>
      <section className=" md:py-52 bg-white dark:bg-indigo-500 text-gray-900 dark:text-white relative z-[1] flex items-center overflow-hidden">
        <div
          className="absolute top-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat w-[60vw] hidden md:block -z-[1]"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/NikhilCyberk/SMS/main/client/src/assets/teacher.png)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-20 -z-[1]" />
        </div>
        <div className="container  m-[6rem] pl-[12rem]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ">
              <p className="text-lg opacity-80">
                Teacher <b>Login</b>
              </p>
              <form
                // onSubmit={handleSubmit}
                className="ezy__comingsoon13-subscription-form mt-6 "
              >
                <div className="flex flex-col w-full">
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-white dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="text"
                    placeholder="Email"
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="py-4 px-5 shadow-lg dark:bg-gray-500 dark:bg-opacity-30 rounded-xl placeholder:text-lg focus:outline-none w-full mb-4"
                    type="password"
                    placeholder="*********"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="py-3 px-5 font-semibold bg-gray-600 border border-blue-600 text-white rounded-xl hover:bg-opacity-90 hover:border-opacity-90 duration-300 w-full"
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
    </div>
  );
};

export default TeacherLogin;
