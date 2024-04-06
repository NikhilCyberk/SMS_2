import React from "react";
import SideB from "./SideB";
import { FaPowerOff } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ContentContainer from "../pages/admin/Layout/ContentContainer";


const Topbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (

    <div className="w-screen h-screen ">
      <div className="w-full bg-blue-500 dark:bg-gray-900 h-[70px]  py-3 px-2 flex justify-between fixed top-0 z-40" >
        <div>
          {showSidebar ? (
            <button
              className="w-[10%] text-4xl hover:cursor-pointer  text-white fixed top-4 left-2 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <RxCross1 />
            </button>
          ) : (
            <button className="w-[10%]  text-4xl hover:cursor-pointer text-white fixed top-4 left-2 z-50"
              onClick={() => setShowSidebar(!showSidebar)}>
              <HiOutlineMenu />
            </button>
          )}
        </div>

        <div className="w-auto h-full flex justify-center items-center">
          <div className=" p-3 text-xl text-red-600  hover:cursor-pointer hover:text-red-600 ">
            <Link to={"#"}>
              Logout
            </Link>

          </div>
          <div className="p-2 text-xl text-white font-thin hover:cursor-pointer hover:text-green-800">
            <Link to={"#"}>
              Profile
            </Link>
          </div>
        </div>
      </div>
      <div className={`h-auto w-[50%] bg-orange-400 fixed z-30 top-0 left-0 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-full"
        } md:translate-x-0 md:z-50 md:w-[250px]  md:h-full`}>
        <SideB setShowSidebar={setShowSidebar}/>
      </div>

      {/* <ContentContainer/> */}
    </div>
  );
};

export default Topbar;