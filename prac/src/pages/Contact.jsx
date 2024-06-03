import React from "react";

function Contact() {
  const handleBack = () => {
    window.location.href = '/';
  };
  return (
    <div className="min-h-screen flex justify-center items-center relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="flex justify-center items-center max-h-full my-8">
        <div className="bg-gray-700 bg-opacity-10 p-8 rounded-lg max-w-3xl w-full text-white">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold mb-4 mr-3">Contact </h1>
            <h1 className="text-3xl font-bold mb-4 text-[#00df9a]">
              Sahil Al Farib
            </h1>
          </div>
          <p className="mb-4">
            Thank you for visiting our website! If you have any inquiries,
            feedback, or requests, please feel free to get in touch with Sahil
            Al Farib using the information provided below:
          </p>
          <h2 className="text-xl font-bold mb-2 text-[#004D73]">
            Email: sahilfarib320@gmail.com
          </h2>
          <p className="mb-4">
            Sahil Al Farib welcomes all messages and strives to respond
            promptly. Whether you have questions about our services, suggestions
            for improvement, or simply want to say hello, we look forward to
            hearing from you. Your communication is valued and will be handled
            with care.
          </p>
          <div className="flex justify-center">
            <button onClick={handleBack}  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-[#3b9c7d] ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00df9a_0%,#004D73_50%,#00df9a_100%)] " />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                Back
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
