import React, { useState, useEffect } from 'react';
import axios from "axios";

function Universities() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/universities-with-scholarships')
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.error('Error fetching universities:', error);
      });
  }, []);

  const handleCreateClick = () => {
    window.location.href = '/Admin_Uni_create';
  };

  const handleUpdateClick = (universityId) => {
    // Redirect to update page with the university ID
    window.location.href = `/UniUpdate/${universityId}`;
  };

  const handleDelete = (university_id) => {
    axios
      .delete(`http://localhost:8081/delete1/${university_id}`)
      .then(() => {
        setUniversities(universities.filter(university => university.university_id !== university_id));
      })
      .catch((err) => console.log(err));
    window.location.href = '/Admin';
  };
  
  // Filter out universities with empty deadlines
  const filteredUniversities = universities.filter(university => university.deadline);

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-white">Scholarships</h1>
        <button onClick={handleCreateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {filteredUniversities.map(university => (
          <div key={university.university_id} className="bg-gray-800 shadow-lg rounded-lg p-4 text-white">
            <h2 className="text-2xl font-bold mb-2">{university.name}</h2>
            <p><strong>Website</strong> {university.website}</p>
            <p><strong>Email</strong> {university.email}</p>
            <p><strong>SAT</strong> {university.SAT}</p>
            <p><strong>IELTS</strong> {university.IELTS}</p>
            <p><strong>ACT</strong> {university.ACT}</p>
            <p><strong>Location</strong> {university.location}</p>
            <p><strong>CGPA</strong> {university.CGPA}</p>
            <p><strong>Title</strong> {university.title}</p>
            <p><strong>Description</strong> {university.description}</p>
            <p><strong>Amount</strong> {university.amount}</p>
            <p><strong>Deadline</strong> {university.deadline}</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => handleUpdateClick(university.university_id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                Update
              </button>
              <button onClick={() => handleDelete(university.university_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universities;
