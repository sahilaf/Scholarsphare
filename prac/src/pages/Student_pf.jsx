import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StudentUni from "../components/StudentUni";
import Studentprof from "../components/Studentprof";
import Search from "../components/Search";
import Ai from "../components/Ai";


const Student_pf = () => {
  const { email } = useParams();
  const [activeComponent, setActiveComponent] = useState("Universities");
  const [studentinfo, setStudentInfo] = useState(null); // Change to null to handle initial loading state

  useEffect(() => {
    axios.get(`http://localhost:8081/getstudent/${email}`)
      .then(response => {
        setStudentInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching student info:', error);
      });
  }, [email]); // Include email in the dependency array

  const handleLogout = () => {
    // Redirect to logout page or perform logout logic
    window.location.href = "/";
  };

  return (
   
    <div className="min-h-screen flex-auto bg-black text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 bg-white/5 rounded-lg w-64 shadow-lg flex flex-col justify-between">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-white mb-4">Student Info</h1>
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
            <li>
              <button
                onClick={() => setActiveComponent("Search")}
                className="text-lg text-gray-300 hover:text-[#00DF9A]"
              >
                Search
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent("Ai")}
                className="text-lg text-gray-300 hover:text-[#00DF9A]"
              >
                Aichatbot
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
     
      <div className="flex flex-col flex-1 overflow-y-auto ml-72 mr-8 bg-white/5 p-8 rounded-xl">
        {studentinfo && (
          <>
            <h1 className="text-3xl font-bold mb-4">Student Information</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-lg">
                <p>
                  <strong>Name:</strong> {studentinfo.full_name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(studentinfo.date_of_birth).toLocaleDateString()}
                </p>
                <p>
                  <strong>Location:</strong> {studentinfo.location}
                </p>
                <p>
                  <strong>Research Interest:</strong>{" "}
                  {studentinfo.R_interest_name}
                </p>
              </div>
              <div className="text-lg">
                <p>
                  <strong>CGPA:</strong> {studentinfo.CGPA}
                </p>
                <p>
                  <strong>IELTS:</strong> {studentinfo.Ielts_score}
                </p>
                <p>
                  <strong>SAT:</strong> {studentinfo.SAT_score}
                </p>
                <p>
                  <strong>ACT:</strong> {studentinfo.ACT_score}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto ml-64 mr-8 p-8 rounded-xl">
        {/* Render corresponding component based on activeComponent */}
        {activeComponent === "Universities" && <StudentUni email={email} />}
        {activeComponent === "Professors" && <Studentprof email={email} />}
        {activeComponent === "Search" && <Search email={email} />}
        {activeComponent === "Ai" && <Ai email={email}/>}
      </div>
    </div>
  );
};

export default Student_pf;
