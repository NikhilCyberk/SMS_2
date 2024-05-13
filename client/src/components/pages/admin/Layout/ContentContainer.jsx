// import React from "react";

// const ContentContainer = ({ children }) => {
//   return (
//     <div className="root-container h-full w-full fixed top-[70px] border-black border-5  bg-orange-500 md:left-[250px] p-5  ">
//       <div className="h-[80%] w-full md:w-[85%] border-4 border-blue-950 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 ">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default ContentContainer;

import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="root-container h-full w-full fixed top-[4rem] left-0 bg-teal-500 border-blue-400 border-5 md:left-[250px] pl-8 pt-8">
      <div className="h-[80%] w-full md:w-[85%] bg-white rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
