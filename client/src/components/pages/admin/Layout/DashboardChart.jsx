import React from "react";
import { Bar } from "react-chartjs-2";

const DashboardChart = ({ data }) => {
  const chartData = {
    labels: ["Students", "Teachers", "Classes", "Subjects"],
    datasets: [
      {
        label: "Statistics",
        data: [
          data.totalStudents,
          data.totalTeachers,
          data.totalClasses,
          data.totalSubjects,
        ],
        backgroundColor: ["#3182ce", "#38bdf8", "#fbbf24", "#9333ea"],
        borderColor: ["#2c5282", "#0369a1", "#b45309", "#6b21a8"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        type: "category", // Set the x-axis scale type to category
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DashboardChart;
