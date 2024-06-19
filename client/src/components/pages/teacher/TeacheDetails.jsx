import React, { useState, useEffect } from "react";
import TopBar from "../admin/Layout/TopBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import TeacherDetailCard from "./TeacherDetailCard";



const TeacheDetails = () => {
  const { teacher_id, type } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const teacherResponse = await axios.get(
          `http://localhost:3000/teacher/${teacher_id}`
        );
        
        if (teacherResponse.data) {
          setTeacher(teacherResponse.data);
        } else {
          console.log("Teacher not found");
        }
      } catch (error) {
        console.error("Error fetching teacher data", error);
      }
    };

    fetchTeacherData();
  }, [teacher_id]);

  

  const handleTypeChange = (newType) => {
    // Assume there is a function to update the URL with the new type
    updateURLWithNewType(newType);
  };

  const renderContent = () => {
    if (!teacher) {
      return <div className="text-white">Loading...</div>;
    }
    if (type === "teacher_details") {
      return <TeacherDetailCard teacher={teacher} />;
    } else {
      return null;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4 text-white">
      <TopBar onTypeChange={handleTypeChange} data="teacher" />
      {renderContent()}
    </div>
  );
};

export default TeacheDetails;
