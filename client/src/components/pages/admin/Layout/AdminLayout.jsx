import React from "react";
import Topbar from "../../../bar/Topbar";
import { Outlet } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import SideB from "../../../bar/SideB";

const AdminLayout = () => {
  return (
    <>
      <Topbar />
        {/* <SideB /> */}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
};

export default AdminLayout;
