import React from "react";
import { Link } from "react-router-dom";
import Students from "../../assets/students.svg";

export default function Homepage() {
  return (
    <>
      <div className='bg-gradient-to-r mt-0 from-blue-200 to-lime-200 h-screen w-screen flex flex-col md:flex md:flex-row '>
        <div className='p-6 flex justify-center md:w-[50%]'>
          <img src={Students} alt='Your Image' />
        </div>
        <div className='mx-6 h-auto md:w-[50%] md:flex md:justify-center md:flex-col md:px-20'>
          <h1 className="text-blue-500 text-4xl font-bold mb-4 text-center h-auto">Welcome to School Management Solution</h1>
          <p className="text-gray-600 mb-3 text-center h-auto">
            Discover amazing things with our awesome service.
          </p>
          <div className='flex justify-center items-center mt-10 w-full'>
            <Link to="/chooseuser" className='bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-center items-center h-10 rounded cursor-pointer w-full md:h-15 '>
              Explore more...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
