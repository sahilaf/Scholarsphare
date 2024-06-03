import React, { useState, useEffect } from 'react';
import axios from "axios";
import Background1 from "../assets/pexels-pixabay-207684.jpg";
import Background2 from "../assets/pexels-pixabay-256490.jpg";
import Background3 from "../assets/pexels-marta-siedlecka-146156-586570.jpg";
import Background4 from "../assets/pexels-pixabay-207692.jpg";
import Background5 from "../assets/pexels-shoeb-khan-1150843-2973323.jpg";
import Background6 from "../assets/pexels-pixabay-207729.jpg";
import Background7 from "../assets/architecture-independence-palace-ho-chi-minh-city.jpg";
import Background8 from "../assets/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany.jpg";
import Background9 from "../assets/building.jpg";

function StudentUni({ email }) {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/filterscholarships/${email}`)
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.error('Error fetching universities:', error);
      });
  }, []);

  const backgrounds = [Background1, Background2, Background3,Background4,Background5,Background6,Background7,Background8,Background9];

  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  };

  const handleUpdateClick = () => {
    window.location = `/StudentUpdate/${email}`;
  };

 return (
    <div className="container mx-auto px-4 py-8 text-white h-svh">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-white">Scholarships </h1>
        <button onClick={handleUpdateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {universities.map((university, index) => (
          <div key={university.university_id} className="bg-gray-800 shadow-lg rounded-lg p-4 relative overflow-hidden" style={{ backgroundImage: `url(${getRandomBackground()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="relative z-10 text-white pr-0 pb-5">
              <h2 className="text-2xl font-bold mb-2 pb-5">{university.university_name}</h2>
              <p><strong>Website:</strong> <a href={university.website.startsWith('http') ? university.website : `http://${university.website}`} target="_blank" rel="noopener noreferrer">{university.website}</a></p>
              <p><strong>Email:</strong> {university.university_email}</p>
              <p><strong>SAT:</strong> {university.SAT}</p>
              <p><strong>IELTS:</strong> {university.IELTS}</p>
              <p><strong>ACT:</strong> {university.ACT}</p>
              <p><strong>Location:</strong> {university.location}</p>
              <p><strong>CGPA:</strong> {university.CGPA}</p>
              <p><strong>Title:</strong> {university.scholarship_title}</p>
              <p><strong>Description:</strong> {university.scholarship_description}</p>
              <p><strong>Amount:</strong> {university.scholarship_amount}</p>
              <p><strong>Deadline:</strong> {university.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentUni;