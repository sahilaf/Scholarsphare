import React, { useState } from "react";
import axios from "axios";

function Admin_Uni_create() {
  const [name, setUni_name] = useState("");
  const [website, setUni_site] = useState("");
  const [email, setemail] = useState("");
  const [SAT, setSAT] = useState("");
  const [IELTS, setIELTS] = useState("");
  const [ACT, setACT] = useState("");
  const [location, setLocation] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Check if the university already exists
        const existingUniversityResponse = await axios.get(`http://localhost:8081/get-university?name=${encodeURIComponent(name)}`);
        
        let universityId;
        if (existingUniversityResponse.data) {
            // If university exists, extract university_id
            universityId = existingUniversityResponse.data.university_id;
        } else {
            // If university does not exist, create new university entry
            const universityResponse = await axios.post('http://localhost:8081/create-university', {
                name,
                website,
                email
            });
            universityId = universityResponse.data.insertId;
        }

        // Send data to create scholarship endpoint
        const scholarshipResponse = await axios.post('http://localhost:8081/create-scholarship', {
            university_id: universityId,
            title,
            description,
            amount,
            deadline,
            SAT,
            IELTS,
            ACT,
            location,
            CGPA
        });
        console.log(scholarshipResponse.data);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
    window.location.href = "/Admin";
};




  return (
    <div className="min-h-screen flex justify-center items-center relative h-full w-full bg-black ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="w-full bg-white/5 p-8 rounded-lg shadow-md relative z-10 flex flex-col md:flex-row mx-96 my-20">
        <div className="md:flex-grow md:ml-8 md:mr-8 lg:mr-16">
        <div className="content-center flex justify-center text-gray-400 font-bold text-2xl py-10">
          Insert Data
          </div>
          <form onSubmit={handleSubmit}>
            {/* University Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-400 font-bold mb-2"
              >
                University Name
              </label>
              <input
                type="text"
                id="name"
                className="text-white backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A]"
                placeholder="Enter University name"
                value={name}
                onChange={(e) => setUni_name(e.target.value)}
                required
              />
            </div>

            {/* University Website */}
            <div className="mb-6">
              <label
                htmlFor="website"
                className="block text-gray-400 font-bold mb-2"
              >
                Website link
              </label>
              <input
                type="text"
                id="website"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter University website link"
                value={website}
                onChange={(e) => setUni_site(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-400 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter university email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>

            {/* SAT */}
            <div className="mb-6">
              <label
                htmlFor="SAT"
                className="block text-gray-400 font-bold mb-2"
              >
                SAT
              </label>
              <input
                type="text"
                id="SAT"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter SAT score"
                value={SAT}
                onChange={(e) => setSAT(e.target.value)}
                required
              />
            </div>

            {/* IELTS */}
            <div className="mb-6">
              <label
                htmlFor="IELTS"
                className="block text-gray-400 font-bold mb-2"
              >
                IELTS
              </label>
              <input
                type="text"
                id="IELTS"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter IELTS score"
                value={IELTS}
                onChange={(e) => setIELTS(e.target.value)}
                required
              />
            </div>

            {/* ACT */}
            <div className="mb-6">
              <label
                htmlFor="ACT"
                className="block text-gray-400 font-bold mb-2"
              >
                ACT
              </label>
              <input
                type="text"
                id="ACT"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter ACT score"
                value={ACT}
                onChange={(e) => setACT(e.target.value)}
                required
              />
            </div>

            {/* Location */}
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-gray-400 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter university location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* CGPA */}
            <div className="mb-6">
              <label
                htmlFor="CGPA"
                className="block text-gray-400 font-bold mb-2"
              >
                CGPA
              </label>
              <input
                type="text"
                id="CGPA"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter CGPA"
                value={CGPA}
                onChange={(e) => setCGPA(e.target.value)}
                required
              />
            </div>

            {/* Title */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-gray-400 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-400 font-bold mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block text-gray-400 font-bold mb-2"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            {/* Deadline */}
            <div className="mb-6">
              <label
                htmlFor="deadline"
                className="block text-gray-400 font-bold mb-2"
              >
                Deadline
              </label>
              <input
                type="text"
                id="deadline"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
            </div>
            <div className="content-center flex justify-center">
            <button
              type="submit"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-[#3b9c7d] "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00df9a_0%,#004D73_50%,#00df9a_100%)] " />
              <span className="inline-flex h-full mx-auto w-full cursor-pointer items-center justify-center rounded-full bg-black px-40 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                Insert
              </span>
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin_Uni_create;
