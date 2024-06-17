import React from "react";
import { FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Header = ({
  title,
  searchTerm,
  onSearch,
  onAdd,
  onDeleteAll,
  itemsPerPage,
  onItemsPerPageChange,
  isDeleteAllVisible = true,
}) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold text-teal-300">{title}</h2>
    <div className="flex items-center space-x-4">
      {onSearch && (
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearch}
            placeholder={`Search for a ${title.toLowerCase().slice(0, -5)}`}
            className="px-4 py-2 rounded-lg w-full max-w-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
          />
        </div>
      )}
      {onItemsPerPageChange && (
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">
            Show:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={onItemsPerPageChange}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
          >
            {[5, 10, 20, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      )}
      {onAdd && (
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
          onClick={onAdd}
        >
          Add {title.slice(0, -5)} <FaPlus className="inline ml-1" />
        </button>
      )}
      {isDeleteAllVisible && onDeleteAll && (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
          onClick={onDeleteAll}
        >
          Delete All <AiFillDelete className="inline ml-1" />
        </button>
      )}
    </div>
  </div>
);

export default Header;
