import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-teal-300">{title}</h2>
        <button
          className="text-gray-400 hover:text-gray-200 focus:outline-none"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
