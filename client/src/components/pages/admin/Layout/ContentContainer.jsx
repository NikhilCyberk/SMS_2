import React from "react";

const ContentContainer = ({ children, showSidebar }) => {
  return (
    // <div
    //   className={`root-container h-screen w-screen fixed top-16 bg-gray-900 transition-all duration-300 ${
    //     showSidebar ? "left-64" : "left-20"
    //   } pl-2 pt-2`}
    // >
    //   <div className="h-[90%] w-full md:w-[85%] border-4 rounded-2xl border-blue-500 bg-gray-200">
    //     {/* <div className="h-[80%] w-full md:w-[85%] bg-white rounded-lg shadow-md"> */}
    //     {children}
    //   </div>
    // </div>
    <div
      className={`root-container h-screen w-screen fixed top-16 bg-gray-900 transition-all duration-300 ${
        showSidebar ? "left-64" : "left-20"
      } pl-2 pt-2 md:pl-4 md:pt-4`}
    >
      <div className="h-[90%] w-full md:w-[85%] border-4 rounded-2xl border-blue-500 bg-gray-200">
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
