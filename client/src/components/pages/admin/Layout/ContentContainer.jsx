import React from 'react'

const ContentContainer = ({children}) => {
    return (
        <div className=" h-full w-full fixed top-[70px] border-black border-5  bg-orange-500 md:left-[250px] p-5  ">
            <div className="h-[80%] w-full md:w-[85%] border-4 border-blue-950 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 ">
                {children}
            </div>
        </div>
    )
}

export default ContentContainer
