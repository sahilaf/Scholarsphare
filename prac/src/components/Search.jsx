import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Clear previous search results
      setSearchResults([]);
  
      const response = await axios.get(`http://localhost:8081/search`, {
        params: {
          searchTerm: searchTerm
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
  

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 ">Search Universities</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter university name"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 text-black"
      />
      <button
        onClick={handleSearch}
        className="bg-[#00DF9A] text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 mr-4"
      >
        Search
      </button>
      <div className="mt-4">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {searchResults.map((result) => (
              <div key={result.university_id} className="border p-4 rounded-md">
                <h2 className="text-xl font-bold">{result.name}</h2>
                <p>{result.location}</p>
                <p>{result.website}</p>
                <p>{result.email}</p>
                <hr className="my-2" />
                <p className="text-gray-500">{result.title}</p>
                <p className="text-gray-500">{result.description}</p>
                <p className="text-gray-500">Amount: {result.amount}</p>
                <p className="text-gray-500">Deadline: {result.deadline}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
