import React, { useState, useEffect } from "react";
import Universities from "../components/Universities"; // Import Dashboard component
import Professors from "../components/Professors";

const Admin = () => {
  const [activeComponent, setActiveComponent] = useState("Universities");
  const [adminInfo, setAdminInfo] = useState([]);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 bg-white/5 rounded-lg w-64 shadow-lg flex flex-col justify-between">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-white mb-4">Admin Panel </h1>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveComponent("Universities")} 
                className="text-lg text-gray-300 hover:text-[#00DF9A]"
              >
               Scholarships 
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent("Professors")}
                className="text-lg text-gray-300 hover:text-[#00DF9A]"
              >
                Funds
              </button>
            </li>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="bg-[#00DF9A] text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 m-4"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto pl-64">
        {adminInfo.map((admin, index) => (
          <div key={index} className="backdrop-blur-xl bg-white/5 rounded-lg shadow-md p-6 mb-8 flex justify-between items-center m-8">
            <div>
              <h2 className="text-xl font-semibold text-[#00DF9A] mb-2">
                Admin Information {index+1}
              </h2>
              <p className="text-lg text-gray-300">
                <span className="font-semibold">Name:</span> {admin.name}
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-semibold">Email:</span> {admin.email}
              </p>
            </div>
          </div>
        ))}
        {activeComponent === "Universities" && <Universities />} {/* Render Dashboard component */}
        {activeComponent === "Professors" && <Professors />}
      </div>
    </div>
  );
};

export default Admin;
