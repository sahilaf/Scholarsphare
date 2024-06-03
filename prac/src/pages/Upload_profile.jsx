import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Upload_profile() {
  const { email } = useParams();
  const [major_interest, setmajor_interest] = useState("");
  const [extracurricular_activities, setextracurricular_activities] =useState("");
  const [financial_need, setfinancial_need] = useState("");
  const [location, setlocation] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [SAT_score, setSAT] = useState("");
  const [IELTS_score, setIELTS] = useState("");
  const [ACT_score, setACT] = useState("");
  const [R_interest_name, setR_interest_name] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/update/${email}`, {
        major_interest,
        extracurricular_activities,
        date_of_birth,
        financial_need,
        location,
        CGPA,
        SAT_score,
        ACT_score,
        IELTS_score,
        R_interest_name,
      })
      .then((res) => {
        console.log(res);
        window.location = `/Student_pf/${email}`;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative h-full w-full bg-black ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="w-full bg-white/5 p-8 rounded-lg shadow-md relative z-10 flex flex-col md:flex-row mx-96 my-20">
        <div className="md:flex-grow md:ml-8 md:mr-8 lg:mr-16">
          <div className="content-center flex justify-center text-gray-400 font-bold text-2xl py-10">
            Upload
          </div>
          <form onSubmit={handleSubmit}>
            {/* Major Interest */}
            <div className="mb-4">
              <label
                htmlFor="major_interest"
                className="block text-gray-400 font-bold mb-2"
              >
                Major Interest
              </label>
              <input
                type="text"
                id="major_interest"
                className="text-white backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A]"
                placeholder="Enter Major interest"
                value={major_interest}
                onChange={(e) => setmajor_interest(e.target.value)}
                required
              />
            </div>

            {/* Extracurricular Activities */}
            <div className="mb-6">
              <label
                htmlFor="extracurricular_activities"
                className="block text-gray-400 font-bold mb-2"
              >
                Extracurricular activities
              </label>
              <input
                type="text"
                id="extracurricular_activities"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter Extracurricular activities"
                value={extracurricular_activities}
                onChange={(e) => setextracurricular_activities(e.target.value)}
                required
              />
            </div>

            {/* Financial Need */}
            <div className="mb-6">
              <label
                htmlFor="financial_need"
                className="block text-gray-400 font-bold mb-2"
              >
                Financial Need
              </label>
              <input
                type="text"
                id="financial_need"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter Financial Need"
                value={financial_need}
                onChange={(e) => setfinancial_need(e.target.value)}
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
                onChange={(e) => setlocation(e.target.value)}
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

            {/* SAT Score */}
            <div className="mb-6">
              <label
                htmlFor="SAT_score"
                className="block text-gray-400 font-bold mb-2"
              >
                SAT Score
              </label>
              <input
                type="text"
                id="SAT_score"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter SAT Score"
                value={SAT_score}
                onChange={(e) => setSAT(e.target.value)}
                required
              />
            </div>

            {/* IELTS Score */}
            <div className="mb-6">
              <label
                htmlFor="IELTS_score"
                className="block text-gray-400 font-bold mb-2"
              >
                IELTS Score
              </label>
              <input
                type="text"
                id="IELTS_score"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter IELTS Score"
                value={IELTS_score}
                onChange={(e) => setIELTS(e.target.value)}
                required
              />
            </div>

            {/* ACT Score */}
            <div className="mb-6">
              <label
                htmlFor="ACT_score"
                className="block text-gray-400 font-bold mb-2"
              >
                ACT Score
              </label>
              <input
                type="text"
                id="ACT_score"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter ACT Score"
                value={ACT_score}
                onChange={(e) => setACT(e.target.value)}
                required
              />
            </div>

            {/* Research Interest Name */}
            <div className="mb-6">
              <label
                htmlFor="R_interest_name"
                className="block text-gray-400 font-bold mb-2"
              >
                Research Interest Name
              </label>
              <input
                type="text"
                id="R_interest_name"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter Research Interest Name"
                value={R_interest_name}
                onChange={(e) => setR_interest_name(e.target.value)}
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-6">
              <label
                htmlFor="date_of_birth"
                className="block text-gray-400 font-bold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="text"
                id="date_of_birth"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter Date of Birth"
                value={date_of_birth}
                onChange={(e) => setdate_of_birth(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="content-center flex justify-center">
              <button
                type="submit"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-[#3b9c7d] "
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00df9a_0%,#004D73_50%,#00df9a_100%)] " />
                <span className="inline-flex h-full mx-auto w-full cursor-pointer items-center justify-center rounded-full bg-black px-40 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                  Update
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload_profile;
