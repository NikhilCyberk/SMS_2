// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUserGraduate,
//   FaUserTie,
//   FaCalendarAlt,
//   FaTachometerAlt,
//   FaChartPie,
//   FaLock,
//   FaUserShield,
//   FaInfoCircle,
// } from "react-icons/fa";
// import classroomImage from "../../assets/students.svg";

// export default function EduTech() {
//   return (
//     <div className="root-container h-full min-h-screen">
//       {/* Banner Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-screen w-screen flex flex-col md:flex md:flex-row">
//         <div className="p-12 flex justify-center md:w-[50%] bg-blue-100">
//           <img
//             src={classroomImage}
//             alt="Classroom"
//             className="rounded-lg shadow-2xl border-4 border-blue-500 hover:border-blue-700 transition duration-300 transform hover:scale-105"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div className="mx-12 h-auto md:w-[50%] md:flex md:justify-center md:flex-col md:px-24">
//           <h1 className="text-white text-5xl font-bold mb-6 text-center h-auto">
//             Elevate Your School with EduTech
//           </h1>
//           <p className="text-gray-200 mb-8 text-center h-auto text-xl">
//             Empowering educational institutions with a comprehensive and
//             user-friendly management system.
//           </p>
//           <div className="flex justify-center items-center mt-12 w-full">
//             <Link
//               to="/chooseuser"
//               className="bg-white hover:bg-gray-200 text-blue-600 font-bold flex justify-center items-center h-12 rounded-full cursor-pointer w-full md:w-3/4 px-8"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white py-24">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {/* Student Management */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaUserGraduate className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Student Management
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Easily manage student records, track attendance, and monitor
//                 academic performance.
//               </p>
//             </div>
//             {/* Teacher Management */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaUserTie className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Teacher Management
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Organize teacher information, schedule classes, and communicate
//                 with the faculty.
//               </p>
//             </div>
//             {/* Event Scheduling */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaCalendarAlt className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Event Scheduling
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Seamlessly schedule and manage school events, meetings, and
//                 activities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Analytics Section */}
//       <div className="bg-gray-100 py-24">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
//             Powerful Analytics
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Comprehensive Dashboard */}
//             <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaTachometerAlt className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Comprehensive Dashboard
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Get a complete overview of your school's performance with our
//                 intuitive dashboard.
//               </p>
//             </div>
//             {/* Advanced Reporting */}
//             <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaChartPie className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Advanced Reporting
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Gain valuable insights with our detailed reports and analytical
//                 tools.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose EduTech Section */}
//       <div className="bg-white py-24">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
//             Why Choose EduTech?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {/* Comprehensive Solution */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaUserShield className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Comprehensive Solution
//               </h3>
//               <p className="text-gray-600 text-center">
//                 EduTech offers end-to-end solutions for schools, including
//                 admissions, academics, communication, and administrative tasks,
//                 streamlining operations and enhancing productivity.
//               </p>
//             </div>
//             {/* User-Friendly Interface */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaUserShield className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 User-Friendly Interface
//               </h3>
//               <p className="text-gray-600 text-center">
//                 EduTech's intuitive interface is designed for educators,
//                 administrators, parents, and students, ensuring ease of use and
//                 efficient management.
//               </p>
//             </div>
//             {/* Reliable and Secure */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center">
//               <FaLock className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Reliable and Secure
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Your school's data is protected with robust security measures
//                 and a reliable infrastructure, ensuring compliance and
//                 dependable performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call-to-Action and Contact Section */}
//       <div className="bg-blue-600 py-12 text-white">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-3xl font-bold">
//               Start Your Journey with EduTech
//             </h2>
//             <p className="text-gray-200 mt-2">
//               Discover how EduTech can transform your school's operations.
//             </p>
//           </div>
//           <div className="flex items-center">
//             <a
//               href="mailto:info@edutech.com"
//               className="mr-6 hover:text-gray-300 flex items-center"
//             >
//               <FaInfoCircle className="mr-2" />
//               info@edutech.com
//             </a>
//             <Link
//               to="/signup"
//               className="bg-white hover:bg-gray-200 text-blue-600 font-bold flex justify-center items-center h-12 rounded-full cursor-pointer px-8"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="bg-gray-900 text-white py-6">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//           <p>&copy; 2023 EduTech. All rights reserved.</p>
//           <div className="mt-4 md:mt-0 flex items-center">
//             <a href="/privacy-policy" className="mr-6 hover:text-gray-300">
//               Privacy Policy
//             </a>
//             <a href="/terms-of-service" className="mr-6 hover:text-gray-300">
//               Terms of Service
//             </a>
//             <a href="/faq" className="mr-6 hover:text-gray-300">
//               FAQ
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUserGraduate,
//   FaUserTie,
//   FaCalendarAlt,
//   FaTachometerAlt,
//   FaChartPie,
//   FaLock,
//   FaUserShield,
//   FaInfoCircle,
//   FaClipboardCheck,
//   FaChalkboardTeacher,
//   FaMoneyBillAlt,
//   FaBoxOpen,
//   FaBell,
//   // FaTranslate,
//   FaMobileAlt,
//   FaLink,
//   FaFileAlt,
//   FaChartLine,
//   FaDatabase,
//   FaNewspaper,
//   FaHeadphones,
//   FaShieldAlt,
//   FaCloud,
//   FaUserClock,
//   // FaUserGraduateAlt,
//   FaUserAstronaut,
//   FaUserCheck,
//   FaUserCog,
// } from "react-icons/fa";
// import classroomImage from "../../assets/students.svg";

// export default function EduTech() {
//   return (
//     <div className="root-container h-full min-h-screen">
//       {/* Banner Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-screen w-screen flex flex-col md:flex md:flex-row">
//         <div className="p-12 flex justify-center md:w-[50%] bg-blue-100">
//           <img
//             src={classroomImage}
//             alt="Classroom"
//             className="rounded-lg shadow-2xl border-4 border-blue-500 hover:border-blue-700 transition duration-300 transform hover:scale-105"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div className="mx-12 h-auto md:w-[50%] md:flex md:justify-center md:flex-col md:px-24">
//           <h1 className="text-white text-5xl font-bold mb-6 text-center h-auto animate-bounce">
//             Elevate Your School with EduTech
//           </h1>
//           <p className="text-gray-200 mb-8 text-center h-auto text-xl animate-pulse">
//             Empowering educational institutions with a comprehensive and
//             user-friendly management system.
//           </p>
//           <div className="flex justify-center items-center mt-12 w-full">
//             <Link
//               to="/chooseuser"
//               className="bg-white hover:bg-gray-200 text-blue-600 font-bold flex justify-center items-center h-12 rounded-full cursor-pointer w-full md:w-3/4 px-8 transition duration-300 transform hover:-translate-y-1"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white py-24">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             {/* Student Management */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaUserGraduate className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Student Management
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Easily manage student records, track attendance, and monitor
//                 academic performance.
//               </p>
//             </div>
//             {/* Teacher Management */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaUserTie className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Teacher Management
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Organize teacher information, schedule classes, and communicate
//                 with the faculty.
//               </p>
//             </div>
//             {/* Event Scheduling */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaCalendarAlt className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Event Scheduling
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Seamlessly schedule and manage school events, meetings, and
//                 activities.
//               </p>
//             </div>
//             {/* Workflow Automation */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaClipboardCheck className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Automated Workflows
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Streamline administrative tasks with intelligent workflows that
//                 optimize efficiency across your school.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Analytics Section */}
//       <div className="bg-gray-100 py-24">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
//             Powerful Analytics
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {/* Comprehensive Dashboard */}
//             <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaTachometerAlt className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Comprehensive Dashboard
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Get a complete overview of your school's performance with our
//                 intuitive dashboard.
//               </p>
//             </div>
//             {/* Advanced Reporting */}
//             <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaChartPie className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Advanced Reporting
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Gain valuable insights with our detailed reports and analytical
//                 tools.
//               </p>
//             </div>
//             {/* Data Visualization */}
//             <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaChartLine className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Data Visualization
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Present complex data in intuitive, visually compelling ways,
//                 making it easier to identify trends, patterns, and opportunities
//                 for improvement.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose EduTech Section */}
//       <div className="bg-white py-24">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
//             Why Choose EduTech?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             {/* Comprehensive Solution */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaUserShield className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Comprehensive Solution
//               </h3>
//               <p className="text-gray-600 text-center">
//                 EduTech offers end-to-end solutions for schools, including
//                 admissions, academics, communication, and administrative tasks,
//                 streamlining operations and enhancing productivity.
//               </p>
//             </div>
//             {/* User-Friendly Interface */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaMobileAlt className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Mobile-Friendly Access
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Provide a responsive, mobile-optimized experience, allowing
//                 users to access the system from any device, at any time.
//               </p>
//             </div>
//             {/* Reliable and Secure */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaLock className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Reliable and Secure
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Your school's data is protected with robust security measures
//                 and a reliable infrastructure, ensuring compliance and
//                 dependable performance.
//               </p>
//             </div>
//             {/* Third-Party Integrations */}
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
//               <FaLink className="text-blue-600 text-4xl mb-4" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Third-Party Integrations
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Seamlessly integrate with other popular education tools and
//                 platforms, creating a comprehensive and connected ecosystem.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call-to-Action and Contact Section */}
//       <div className="bg-blue-600 py-12 text-white">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-3xl font-bold">
//               Start Your Journey with EduTech
//             </h2>
//             <p className="text-gray-200 mt-2">
//               Discover how EduTech can transform your school's operations.
//             </p>
//           </div>
//           <div className="flex items-center">
//             <a
//               href="mailto:info@edutech.com"
//               className="mr-6 hover:text-gray-300 flex items-center"
//             >
//               <FaInfoCircle className="mr-2" />
//               info@edutech.com
//             </a>
//             <Link
//               to="/signup"
//               className="bg-white hover:bg-gray-200 text-blue-600 font-bold flex justify-center items-center h-12 rounded-full cursor-pointer px-8 transition duration-300 transform hover:-translate-y-1"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="bg-gray-900 text-white py-6">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//           <p>&copy; 2023 EduTech. All rights reserved.</p>
//           <div className="mt-4 md:mt-0 flex items-center">
//             <a href="/privacy-policy" className="mr-6 hover:text-gray-300">
//               Privacy Policy
//             </a>
//             <a href="/terms-of-service" className="mr-6 hover:text-gray-300">
//               Terms of Service
//             </a>
//             <a href="/faq" className="mr-6 hover:text-gray-300">
//               FAQ
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaCalendarAlt,
  FaTachometerAlt,
  FaChartPie,
  FaLock,
  FaUserShield,
  FaInfoCircle,
  FaClipboardCheck,
  FaMobileAlt,
  FaLink,
  FaChartLine,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserClock,
  FaUserAstronaut,
  FaDatabase,
  FaNewspaper,
  // FaTranslate,
  FaBell,
  FaCloud,
  FaUserCheck,
  FaMoneyBillAlt,
  FaBoxOpen,
  FaHeadphones,
  FaUserCog,
  FaQuoteLeft,
  FaQuoteRight,
  FaUserCircle,
} from "react-icons/fa";
import classroomImage from "../../assets/students.svg";

export default function EduTech() {
  return (
    <div className="root-container h-full min-h-screen">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-screen w-screen flex flex-col md:flex md:flex-row">
        <div className="p-12 flex justify-center md:w-[50%] bg-blue-100">
          <img
            src={classroomImage}
            alt="Classroom"
            className="rounded-lg shadow-2xl border-4 border-blue-500 hover:border-blue-700 transition duration-300 transform hover:scale-105"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="mx-12 h-auto md:w-[50%] md:flex md:justify-center md:flex-col md:px-24">
          <h1 className="text-white text-5xl font-bold mb-6 text-center h-auto animate-bounce">
            Elevate Your School with EduTech
          </h1>
          <p className="text-gray-200 mb-8 text-center h-auto text-xl animate-pulse">
            Empowering educational institutions with a comprehensive and
            user-friendly management system.
          </p>
          <div className="flex justify-center items-center mt-12 w-full">
            <Link
              to="/chooseuser"
              className="bg-white hover:bg-gray-200 text-blue-600 font-bold flex justify-center items-center h-12 rounded-full cursor-pointer w-full md:w-3/4 px-8 transition duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Student Management */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaUserGraduate className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Student Management
              </h3>
              <p className="text-gray-600 text-center">
                Manage student records, track attendance, and monitor academic
                performance.
              </p>
            </div>
            {/* Teacher Management */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Teacher Management
              </h3>
              <p className="text-gray-600 text-center">
                Organize teacher information, schedule classes, and communicate
                with the faculty.
              </p>
            </div>
            {/* Event Scheduling */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaUserClock className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Event Scheduling
              </h3>
              <p className="text-gray-600 text-center">
                Seamlessly schedule and manage school events, meetings, and
                activities.
              </p>
            </div>
            {/* Workflow Automation */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaUserAstronaut className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Workflow Automation
              </h3>
              <p className="text-gray-600 text-center">
                Streamline administrative tasks with intelligent workflows that
                optimize efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fadeIn">
            Powerful Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Comprehensive Dashboard */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaDatabase className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Comprehensive Dashboard
              </h3>
              <p className="text-gray-600 text-center">
                Get a complete overview of your school's performance with our
                intuitive dashboard.
              </p>
            </div>
            {/* Advanced Reporting */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaNewspaper className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advanced Reporting
              </h3>
              <p className="text-gray-600 text-center">
                Gain valuable insights with our detailed reports and analytical
                tools.
              </p>
            </div>
            {/* Data Visualization */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaChartLine className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data Visualization
              </h3>
              <p className="text-gray-600 text-center">
                Present complex data in intuitive, visually compelling ways.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose EduTech Section */}
      <div className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
            Why Choose EduTech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Comprehensive Solution */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaUserShield className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Comprehensive Solution
              </h3>
              <p className="text-gray-600 text-center">
                EduTech offers end-to-end solutions for schools, including
                admissions, academics, communication, and administrative tasks.
              </p>
            </div>
            {/* Mobile-Friendly Access */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaMobileAlt className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mobile-Friendly Access
              </h3>
              <p className="text-gray-600 text-center">
                Access the system from any device, at any time.
              </p>
            </div>
            {/* Reliable and Secure */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaLock className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reliable and Secure
              </h3>
              <p className="text-gray-600 text-center">
                Your school's data is protected with robust security measures
                and a reliable infrastructure.
              </p>
            </div>
            {/* Third-Party Integrations */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaLink className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Third-Party Integrations
              </h3>
              <p className="text-gray-600 text-center">
                Seamlessly integrate with other popular education tools and
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fadeIn">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaQuoteLeft className="text-blue-600 text-4xl mb-4" />
              <p className="text-gray-600 text-center mb-4">
                "EduTech has transformed our school's operations. The
                comprehensive solutions and user-friendly interface have made
                our lives much easier."
              </p>
              <div className="flex items-center">
                <FaUserCircle className="text-blue-600 text-4xl mr-4" />
                <div>
                  <h4 className="text-gray-900 font-bold">John Doe</h4>
                  <p className="text-gray-600">Principal, XYZ School</p>
                </div>
              </div>
              <FaQuoteRight className="text-blue-600 text-4xl mt-4" />
            </div>
            {/* More Testimonials */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaQuoteLeft className="text-blue-600 text-4xl mb-4" />
              <p className="text-gray-600 text-center mb-4">
                "We've been using EduTech for a year now, and it's been a
                game-changer for our online learning programs. Highly
                recommended!"
              </p>
              <div className="flex items-center">
                <FaUserCircle className="text-blue-600 text-4xl mr-4" />
                <div>
                  <h4 className="text-gray-900 font-bold">Jane Smith</h4>
                  <p className="text-gray-600">
                    Director of Education, ABC Institute
                  </p>
                </div>
              </div>
              <FaQuoteRight className="text-blue-600 text-4xl mt-4" />
            </div>
            {/* Another Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center animate-fadeInUp">
              <FaQuoteLeft className="text-blue-600 text-4xl mb-4" />
              <p className="text-gray-600 text-center mb-4">
                "The support team at EduTech is top-notch. They always respond
                promptly and resolve any issues we encounter."
              </p>
              <div className="flex items-center">
                <FaUserCircle className="text-blue-600 text-4xl mr-4" />
                <div>
                  <h4 className="text-gray-900 font-bold">Mike Johnson</h4>
                  <p className="text-gray-600">
                    IT Administrator, Education Innovators
                  </p>
                </div>
              </div>
              <FaQuoteRight className="text-blue-600 text-4xl mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
            Meet Our Team
          </h2>
          {/* Team Member Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center animate-fadeInUp">
              <img
                src="/images/team-member1.jpg"
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* More Team Members */}
          </div>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
            News & Updates
          </h2>
          {/* News & Updates Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInUp">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                New Feature: Virtual Classroom
              </h3>
              <p className="text-gray-600">
                We are excited to announce the launch of our new virtual
                classroom feature, making online learning more interactive than
                ever.
              </p>
            </div>
            {/* More News & Updates */}
          </div>
        </div>
      </div>

      {/* Implementation Process Section */}
      <div className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
            Our Implementation Process
          </h2>
          {/* Implementation Process Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md animate-fadeInUp">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Step 1: Discovery
              </h3>
              <p className="text-gray-600">
                We start by understanding your unique needs and goals to tailor
                our solutions for your institution.
              </p>
            </div>
            {/* More Implementation Steps */}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeIn">
            Frequently Asked Questions
          </h2>
          {/* FAQ Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInUp">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I sign up for a demo?
              </h3>
              <p className="text-gray-600">
                Signing up for a demo is easy! Simply fill out the form on our
                website, and we'll contact you to schedule a demo at your
                convenience.
              </p>
            </div>
            {/* More FAQs */}
          </div>
        </div>
      </div>

      {/* Call-to-Action and Contact Section */}
      <div className="bg-blue-600 py-12 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">
              Start Your Journey with EduTech
            </h2>
            <p className="text-gray-200 mt-2">
              Discover how EduTech can transform your school's operations.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:info@edutech.com"
              className="mr-6 hover:text-gray-300 flex items-center"
            >
              <FaInfoCircle className="mr-2" />
              info@edutech.com
            </a>
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-200 text-blue-600 font-bold flex justify-center items-center h-12 rounded-full cursor-pointer px-8 transition duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 EduTech. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <a href="/privacy-policy" className="mr-6 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="mr-6 hover:text-gray-300">
              Terms of Service
            </a>
            <a href="/faq" className="mr-6 hover:text-gray-300">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
