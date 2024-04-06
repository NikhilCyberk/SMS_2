import AdminCard from "./admin/AdminCard";
import TeacherCard from "./admin/TeacherCard";

import StudentCard from "./admin/StudentCard";

const ChooseUser = () => {
  return (
    <>
      <div className="flex flex-col h-auto w-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 md:flex md:flex-row md:h-screen md:justify-center md:items-center">
        <AdminCard />
        <TeacherCard />
        <StudentCard />
      </div>
    </>

  );
};

export default ChooseUser;
