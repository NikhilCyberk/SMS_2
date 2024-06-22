import React, { useState } from "react";
import Topbar from "../../../bar/Topbar";
import { Outlet } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import SideB from "../../../bar/SideB";

const AdminLayout = ({ role }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <div className="flex bg-gray-900">
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
