import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [Email, setEmail] = useState(""); // Changed state variable Email to 'username'
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => { // Added 'e' parameter to handleSubmit function
    e.preventDefault();
    axios.post('http://localhost:8081/admin_login', { Email, Password }) // Changed 'Email' to 'username'
      .then(res => {
        console.log(res);
        if (res.data === "Login Successful") {
          window.location.href = `/admin`; // Used backticks for string interpolation
        } else {
          setErrorMessage("Invalid username or Password. Please try again.");
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid username or Password. Please try again.");
          setEmail("");
          setPassword("");
        } else {
          setErrorMessage("An unexpected error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="backdrop-blur-sm bg-white/5 p-8 rounded-lg shadow-md w-96 relative z-10">
        <div className="text-center">
          <h1 className="text-slate-50 font-bold text-xl p-10">Welcome admin</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-gray-400 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="text-white backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A]"
              placeholder="Enter your username"
              value={Email}
              onChange={(e) => setEmail(e.target.value)} // Changed 'Email' to 'username'
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-gray-400 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="Password"
              id="Password"
              className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A] text-white"
              placeholder="Enter your Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="block mx-auto w-full h-12 text-white font-bold bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-full py-3 px-8 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Enter
          </button>
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
