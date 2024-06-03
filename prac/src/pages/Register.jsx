import React, { useEffect, useState } from "react";
import axios from "axios";
import cover from "../assets/Learning-cuate.svg";

function Register() {
  const [full_name, setfull_name] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setemail] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/register", { full_name, email, Password })
      .then((res) => {
        console.log(res);
        window.location = `/Update/${email}`;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full bg-white/5 p-8 rounded-lg shadow-md relative z-10 flex flex-col md:flex-row">

        {/* Cover picture */}
        <div className="md:w-56 lg:w-80 md:flex-shrink-0 flex justify-center mx-8 mb-8 md:mb-0">
          <img src={cover} alt="" className="w-full h-auto md:h-full" />
        </div>
        <div className="md:flex-grow md:ml-8 md:mr-8 lg:mr-16">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="full_name"
                className="block text-gray-400 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="full_name"
                className="text-white backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A]"
                placeholder="Enter your full name"
                value={full_name}
                onChange={(e) => setfull_name(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-400 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Enter your email"
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
                className="backdrop-blur-xl bg-white/5 p-8 border border-gray-300 rounded-full w-full h-12 py-6 px-8 mb-4 focus:outline-none focus:border-[#00DF9A] text-white"
                placeholder="Create new Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-[#3b9c7d] "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00df9a_0%,#004D73_50%,#00df9a_100%)] " />
              <span className="inline-flex h-full mx-auto w-full cursor-pointer items-center justify-center rounded-full bg-black px-40 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                Create
              </span>
            </button>
            ;
          </form>
          <p className="text-gray-400 text-center mt-4 ">
            Already have an account?{" "}
            <a href="/Login" className="underline underline-offset-2">
              Login
            </a>
          </p>
        </div>
      </div>
  );
}

export default Register;