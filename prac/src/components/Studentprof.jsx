import React, { useState, useEffect } from 'react';
import axios from "axios";

import back1 from "../assets/360_F_320652717_WlDR9njJux6UdQ92xcsGUvLJVgV3kWt7.jpg";
import back2 from "../assets/images (1).jpeg";
import back3 from "../assets/1702698153619.jpeg";
import back4 from "../assets/BU-student-headshot-questrom-1.jpg";
import back5 from "../assets/1661663776429.jpeg";
import back6 from "../assets/edwards.jpg_SIA_JPG_fit_to_width_INLINE.jpg";
import back7 from "../assets/images.jpeg";
import back8 from "../assets/1520889751356.jpeg";
import back9 from "../assets/Nathan 2.jpg";
import back10 from "../assets/360_F_246833765_fWqwf3kBte31BMKTApNqIuG0qbCbF7zk.jpg";
import back11 from "../assets/Bill_Wagner-4608-PRINT.jpg";

function Studentprof({ email }) {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/filterprofessors/${email}`)
      .then(response => {
        setProfessors(response.data);
      })
      .catch(error => {
        console.error('Error fetching professors:', error);
      });
  }, []);


  const backgrounds = [back1, back2, back3,back4,back5,back6,back7,back8,back9,back10,back11];
// style={{ backgroundImage: `url(${getRandomBackground()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  };


  const handleCreateClick = () => {
    window.location = `/StudentUpdate/${email}`;
  };

  return (
    
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-white">Professors </h1>
        <button onClick={handleCreateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {professors.map(professor => (
          <div key={professor.professor_id} className="bg-gray-800 shadow-lg rounded-lg p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative z-10 text-white pr-0 pb-5">
          <h2 className="text-2xl font-semibold mb-2">{professor.full_name}</h2>
          <p><strong>Department:</strong> {professor.department}</p>
          <p><strong>Email:</strong> {professor.email}</p>
          <p><strong>University:</strong> {professor.university_name}</p>
          <p><strong>University Mail:</strong> {professor.uni_email}</p>
          <p><strong>Location:</strong> {professor.university_location}</p>
          <p><strong>Research Interest:</strong> {professor.R_interest_name}</p>
          <p><strong>Title:</strong> {professor.title}</p>
          <p><strong>Description:</strong> {professor.description}</p>
          <p><strong>Funding Amount:</strong> {professor.funding_amount}</p>
          <p><strong>Deadline:</strong> {professor.deadline}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Studentprof;


