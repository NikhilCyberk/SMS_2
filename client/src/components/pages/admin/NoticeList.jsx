import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NoticeList = () => {
  const { id } = useParams();
  console.log(id, 55555);
  const [notices, setNotices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentNotice, setCurrentNotice] = useState({
    title: "",
    details: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/notice-list/${id}`);
        if (res.data.message) {
          setMessage(res.data.message);
        } else {
          setNotices(res.data);
        }
      } catch (err) {
        setMessage("Error fetching notices. Please try again.");
        console.error(err);
      }
    };
    fetchNotices();
  }, [id]);

  const handleAddNotice = () => {
    setCurrentNotice({ title: "", details: "", date: "" });
    setShowModal(true);
  };

  const handleEditNotice = (notice) => {
    setCurrentNotice(notice);
    setShowModal(true);
  };

  const handleDeleteNotice = async (noticeId) => {
    try {
      await axios.delete(`http://localhost:3000/notice/${noticeId}`);
      setNotices(notices.filter((notice) => notice._id !== noticeId));
    } catch (err) {
      setMessage("Error deleting notice. Please try again.");
      console.error(err);
    }
  };

  const handleDeleteAllNotices = async () => {
    try {
      await axios.delete(`http://localhost:3000/notices/${id}`);
      setNotices([]);
      setMessage("All notices deleted successfully.");
    } catch (err) {
      setMessage("Error deleting notices. Please try again.");
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, details, date } = currentNotice;
    if (title && details && date) {
      try {
        const res = await axios.post("http://localhost:3000/notice-create", {
          ...currentNotice,
          adminID: id,
          date: new Date(date),
        });
        setNotices([...notices, res.data]);
        setShowModal(false);
        setMessage("Notice added successfully.");
      } catch (err) {
        setMessage("Error adding notice. Please try again.");
        console.error(err);
      }
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { title, details, date, _id } = currentNotice;
    if (title && details && date) {
      try {
        const res = await axios.put(`http://localhost:3000/notice/${_id}`, {
          title,
          details,
          date: new Date(date),
        });
        setNotices(
          notices.map((notice) => (notice._id === _id ? res.data : notice))
        );
        setShowModal(false);
        setMessage("Notice updated successfully.");
      } catch (err) {
        setMessage("Error updating notice. Please try again.");
        console.error(err);
      }
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Notice List</h2>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleAddNotice}
              >
                Add Notice
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDeleteAllNotices}
              >
                Delete All Notices
              </button>
            </div>
          </div>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          {notices.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Details</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice) => (
                    <tr key={notice._id} className="border-b hover:bg-gray-100">
                      <td className="px-4 py-2">{notice.title}</td>
                      <td className="px-4 py-2">{notice.details}</td>
                      <td className="px-4 py-2">
                        {new Date(notice.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleEditNotice(notice)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDeleteNotice(notice._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No notices found.</p>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">
              {currentNotice._id ? "Edit Notice" : "Add Notice"}
            </h2>
            <form onSubmit={currentNotice._id ? handleUpdate : handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={currentNotice.title}
                  onChange={(e) =>
                    setCurrentNotice({
                      ...currentNotice,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="details" className="block font-bold mb-2">
                  Details
                </label>
                <textarea
                  id="details"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:
                  ring-2 focus:ring-blue-500"
                  value={currentNotice.details}
                  onChange={(e) =>
                    setCurrentNotice({
                      ...currentNotice,
                      details: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block font-bold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={currentNotice.date}
                  onChange={(e) =>
                    setCurrentNotice({
                      ...currentNotice,
                      date: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  {currentNotice._id ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeList;
