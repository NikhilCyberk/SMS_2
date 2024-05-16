import React, { useState } from "react";
import Topbar from "../../../bar/Topbar";
import { Outlet } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import SideB from "../../../bar/SideB";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
  

      <div className="flex">
      <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <SideB showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <ContentContainer showSidebar={showSidebar}>
          <Outlet />
        </ContentContainer>
      </div>
    </>
  );
};

export default AdminLayout;
