import { Link } from "react-router-dom";
import AdminCard from "./admin/AdminCard";
import TeacherCard from "./Teacher/TeacherCard";

import StudentCard from "./Student/StudentCard";

const ChooseUser = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
        <AdminCard />
        <TeacherCard />
        <StudentCard />
      </div>
    </>

    // <>
    //     <div className="flex flex-row bg-gray-100 h-screen w-screen items-center justify-center">

    //         {/* admin login */}
    //         <div className="relative h-[200px] w-[400px] rounded-md ml-3 grow mt-0 ">
    //             <img
    //                 src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    //                 alt="AirMax Pro"
    //                 className="z-0 h-full w-full rounded-md object-cover"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    //             <div className="absolute bottom-4 left-4 text-left">
    //                 <h1 className="text-lg font-semibold text-white">Admin</h1>
    //                 <p className="mt-2 text-sm text-gray-300">
    //                     Login as an administrator to access the dashboard to manage app data.
    //                 </p>
    //                 <Link to="/login">
    //                     < button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    //                         Admin &rarr;
    //                     </button>
    //                 </Link>
    //             </div>
    //         </div >
    //         {/* student login */}
    //         < div className="relative h-[500px] w-[500px] rounded-md ml-3 mr-3 grow " >
    //             <img
    //                 src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    //                 alt="AirMax Pro"
    //                 className="z-0 h-full w-full rounded-md object-cover"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    //             <div className="absolute bottom-4 left-4 text-left">
    //                 <h1 className="text-lg font-semibold text-white">Student</h1>
    //                 <p className="mt-2 text-sm text-gray-300">
    //                     Login as a student to explore course materials and assignments.
    //                 </p>
    //                 <Link to="/student">

    //                     <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    //                         Student &rarr;
    //                     </button>
    //                 </Link>

    //             </div>
    //         </div >
    //         <div className="relative h-[500px] w-[500px] rounded-md mr-10 grow ">
    //             <img
    //                 src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    //                 alt="AirMax Pro"
    //                 className="z-0 h-full w-full rounded-md object-cover"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    //             <div className="absolute bottom-4 left-4 text-left">
    //                 <h1 className="text-lg font-semibold text-white">Teacher</h1>
    //                 <p className="mt-2 text-sm text-gray-300">
    //                     Login as a teacher to create courses, assignments, and track student progress.
    //                 </p>
    //                 <Link to="/teacher">
    //                     <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    //                         Teacher &rarr;
    //                     </button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div >

    // </>
  );
};

export default ChooseUser;
