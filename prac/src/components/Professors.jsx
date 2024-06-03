import React, { useState, useEffect } from 'react';
import axios from "axios";

function Professors() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/university-professors')
      .then(response => {
        setProfessors(response.data);
      })
      .catch(error => {
        console.error('Error fetching professors:', error);
      });
  }, []);
  const handleCreateClick = () => {
    window.location.href = '/AdminProfCreate';
  };
  
  const handleUpdateClick = (ProfID) => {
    // Redirect to update page with the university ID
    window.location.href = `/ProfUpdate/${ProfID}`;
  };

  const handleDelete = (university_id) => {
    axios
      .delete(`http://localhost:8081/delete2/${university_id}`)
      .then(() => {
        setUniversities(professors.filter(professors => professors.university_id !== university_id));
      })
      .catch((err) => console.log(err));
      window.location.href = '/Admin';
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-white">Professors</h1>
        <button onClick={handleCreateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {professors.map(professor => (
          <div key={professor.professor_id} className="bg-gray-800 shadow-lg rounded-lg p-4 text-white">
            <h2 className="text-2xl font-semibold mb-2">{professor.full_name}</h2>
            <p><strong>Department:</strong> {professor.department}</p>
            <p><strong>Email:</strong> {professor.email}</p>
            <p><strong>University:</strong> {professor.university_name}</p>
            <p><strong>Location:</strong> {professor.university_location}</p>
            <p><strong>Research Interest:</strong> {professor.R_interest_name}</p>
            <p><strong>Title:</strong> {professor.title}</p>
            <p><strong>Description:</strong> {professor.description}</p>
            <p><strong>Funding Amount:</strong> {professor.funding_amount}</p>
            <p><strong>Deadline:</strong> {professor.deadline}</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => handleUpdateClick(professor.professor_id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded">
                Update
              </button>
              <button onClick={() => handleDelete(professor.university_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professors;
