import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfUpdate() {
    const { ProfId } = useParams();
    const [name, setUniName] = useState("");
    const [uniWebsite, setUniWebsite] = useState("");
    const [uniEmail, setUniEmail] = useState("");
    const [profFullName, setProfFullName] = useState("");
    const [profDepartment, setProfDepartment] = useState("");
    const [profEmail, setProfEmail] = useState("");
    const [profResearchInterest, setProfResearchInterest] = useState("");
    const [profTitle, setProfTitle] = useState("");
    const [profDescription, setProfDescription] = useState("");
    const [profFundingAmount, setProfFundingAmount] = useState("");
    const [profDeadline, setProfDeadline] = useState("");
    const [universityId, setUniversityId] = useState("");

    useEffect(() => {
        // Fetch professor data
        axios.get(`http://localhost:8081/getuniversityid/${ProfId}`)
            .then(response => {
                const professorData = response.data;
                setUniversityId(professorData.university_id);
            })
            .catch(error => {
                console.error('Error fetching professor data:', error);
            });
    }, [ProfId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an HTTP PUT request to update the university data
            await axios.put(`http://localhost:8081/updateuniversity/${universityId}`, {
                name,
                website: uniWebsite,
                email: uniEmail,
            });

            // Make an HTTP PUT request to update the professor data
            await axios.put(`http://localhost:8081/updateprof/${ProfId}`, {
                full_name: profFullName,
                department: profDepartment,
                university_id: universityId,
                email: profEmail,
                R_interest_name: profResearchInterest,
                title: profTitle,
                description: profDescription,
                funding_amount: profFundingAmount,
                deadline: profDeadline
            });

            // Redirect or show success message
            console.log('Data updated successfully');
        } catch (error) {
            // Handle errors
            console.error('Error updating data:', error);
        }
        window.location.href = "/admin";
    };



  return (
    <div className="min-h-screen flex justify-center items-center relative h-full w-full bg-black ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="w-full bg-white/5 p-8 rounded-lg shadow-md relative z-10 flex flex-col md:flex-row mx-96 my-20">
        <div className="md:flex-grow md:ml-8 md:mr-8 lg:mr-16">
          <div className="content-center flex justify-center text-gray-400 font-bold text-2xl py-10">
            Update Data
          </div>
          <form onSubmit={handleSubmit}>
            {/* University Fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 font-bold mb-2">
                University Name
              </label>
              <input
                type="text"
                id="name"
                className="text-white backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A]"
                placeholder="Enter University name"
                value={name}
                onChange={(e) => setUniName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="uniWebsite" className="block text-gray-400 font-bold mb-2">
                Website link
              </label>
              <input
                type="text"
                id="uniWebsite"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter University website link"
                value={uniWebsite}
                onChange={(e) => setUniWebsite(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="uniEmail" className="block text-gray-400 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="uniEmail"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter university email"
                value={uniEmail}
                onChange={(e) => setUniEmail(e.target.value)}
                required
              />
            </div>

            {/* Professor Fields */}
            <div className="mb-4">
              <label htmlFor="profFullName" className="block text-gray-400 font-bold mb-2">
                Professor Full Name
              </label>
              <input
                type="text"
                id="profFullName"
                className="text-white backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A]"
                placeholder="Enter Professor's full name"
                value={profFullName}
                onChange={(e) => setProfFullName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profDepartment" className="block text-gray-400 font-bold mb-2">
                Department
              </label>
              <input
                type="text"
                id="profDepartment"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter Professor's department"
                value={profDepartment}
                onChange={(e) => setProfDepartment(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profEmail" className="block text-gray-400 font-bold mb-2">
                Professor Email
              </label>
              <input
                type="email"
                id="profEmail"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter professor email"
                value={profEmail}
                onChange={(e) => setProfEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profResearchInterest" className="block text-gray-400 font-bold mb-2">
                Research Interest Name
              </label>
              <input
                type="text"
                id="profResearchInterest"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter professor's research interest"
                value={profResearchInterest}
                onChange={(e) => setProfResearchInterest(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profTitle" className="block text-gray-400 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="profTitle"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter professor's title"
                value={profTitle}
                onChange={(e) => setProfTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profDescription" className="block text-gray-400 font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                id="profDescription"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter professor's description"
                value={profDescription}
                onChange={(e) => setProfDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profFundingAmount" className="block text-gray-400 font-bold mb-2">
                Funding Amount
              </label>
              <input
                type="text"
                id="profFundingAmount"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter professor's funding amount"
                value={profFundingAmount}
                onChange={(e) => setProfFundingAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profDeadline" className="block text-gray-400 font-bold mb-2">
                Deadline
              </label>
              <input
                type="text"
                id="profDeadline"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter deadline"
                value={profDeadline}
                onChange={(e) => setProfDeadline(e.target.value)}
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

export default ProfUpdate;
