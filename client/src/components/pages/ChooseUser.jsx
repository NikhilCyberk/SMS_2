import AdminCard from "./admin/AdminCard";
import TeacherCard from "./admin/TeacherCard";
import StudentCard from "./admin/StudentCard";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChooseUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <section className="bg-gradient-to-r from-blue-600 to-teal-500  md:py-24  text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container m-2 mx-auto">
        <h1 className="text-[32px] md:text-5xl font-bold leading-[1.1] text-center mb-16">
          Select User
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <div className="gap-6 p-0">
              <AdminCard />

              {/* Teacher Card */}
              <TeacherCard />
            </div>
          </div>

          <StudentCard />
        </div>
      </div>
    </section>
  );
};

export default ChooseUser;
