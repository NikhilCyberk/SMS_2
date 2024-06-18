import React from "react";

const Attendance = ({ attendance }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-yellow-500">
        Attendance:
      </h3>
      <ul className="list-disc list-inside">
        {attendance.map((record, index) => (
          <li key={index} className="mb-1">
            {record.date}: {record.status} - {record.subName.subName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
