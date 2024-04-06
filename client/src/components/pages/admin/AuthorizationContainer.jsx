import React from 'react'

const AuthorizationContainer = ({ children }) => {
  return (
    // <div>{children}</div>

    <div className="h-screen w-screen bg-white-50 flex justify-center items-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">
        {/* <div className=" bg-white p-8 rounded-md shadow-m w-auto h-auto md:w-[30%]"> */}
          {children}
        {/* </div> */}
    </div>
  )
}

export default AuthorizationContainer
