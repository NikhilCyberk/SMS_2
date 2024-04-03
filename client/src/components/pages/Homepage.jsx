import React from "react";
import { Link } from "react-router-dom";
import Students from "../../assets/students.svg";
import ChooseUser from "./ChooseUser";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-r mt-0 from-blue-200 to-lime-200 h-screen w-screen flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="mr-32 w-1/2">
            <img src={Students} alt="Your Image" />
          </div>

          <div className="text-center w-1/2 mr-12">
            <h1 className="text-blue-500 text-4xl font-bold mb-6">
              Welcome to School Management Solution
            </h1>
            <p className="text-gray-600 mb-8">
              Discover amazing things with our awesome service.
            </p>
            <Link to="/chooseuser">
              <div className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-16 w-128 rounded-full bg-blue-600 p-2 font-extrabold hover:bg-lime-400">
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-blue-600"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-lime-400"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-blue-600"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-lime-400"></div>
                <p className="z-10 absolute bottom-2 left-10">See more</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
