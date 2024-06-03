// login.js
import React, { useState } from "react";
import WEL from "../assets/Welcome.png";
import axios from "axios";

function Login() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", { email, Password })
      .then((res) => {
        console.log(res);
        if (res.data === "Login Successful") {
          // Redirect to '/admin' upon successful login
          window.location.href = `/Student_pf/${email}`;
        } else {
          // Set error message state
          setErrorMessage("Invalid username or Password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        if (error.response && error.response.status === 401) {
          // Handle 401 Unauthorized error (incorrect credentials)
          setErrorMessage("Invalid Email or Password. Please try again.");
          setemail("");
          setPassword("");
        } else {
          // Handle other errors
          setErrorMessage(
            "An unexpected error occurred. Please try again later."
          );
        }
      });
  };

  return (
    <div className="backdrop-blur-sm bg-white/5 p-8 rounded-lg shadow-md w-96 relative z-10">
        <div>
          <img src={WEL} alt="" />
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
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
          <button type="submit" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-[#3b9c7d] ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00df9a_0%,#004D73_50%,#00df9a_100%)] " />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-36 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
              Login
            </span>
          </button>
          ;
          {errorMessage && ( // Conditional rendering for error message
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
        </form>
        <p className="text-gray-400 text-center mt-4 ">
          Don't have an account?{" "}
          <a href="/Register" className="underline underline-offset-2">
            Sign up
          </a>
        </p>
      </div>
  );
}

export default Login;
