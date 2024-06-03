import React from "react";
import { CiLogout } from "react-icons/ci";
function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full rounded-lg px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded-lg hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3 "><CiLogout className="inline-block w-6 h-6 mr-2 -mt-2 pt-1"/>Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
