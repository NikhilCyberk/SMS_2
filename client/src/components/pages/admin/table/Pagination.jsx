import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-6">
    <button
      className={`px-4 py-2 rounded-lg ${
        currentPage === 1
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-teal-500 text-white hover:bg-teal-600"
      }`}
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    {[...Array(totalPages).keys()].map((num) => (
      <button
        key={num + 1}
        className={`px-4 py-2 mx-1 rounded-full ${
          currentPage === num + 1
            ? "bg-teal-600 text-white"
            : "bg-gray-600 text-gray-300 hover:bg-gray-500"
        }`}
        onClick={() => onPageChange(num + 1)}
      >
        {num + 1}
      </button>
    ))}
    <button
      className={`px-4 py-2 rounded-lg ${
        currentPage === totalPages
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-teal-500 text-white hover:bg-teal-600"
      }`}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
