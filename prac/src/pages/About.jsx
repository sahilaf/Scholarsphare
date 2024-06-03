import React from "react";

function About() {
  const handleBack = () => {
    window.location.href = '/';
  };
  return (
    <div className="min-h-screen flex justify-center items-center relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="flex justify-center items-center max-h-full my-8">
        <div className="bg-gray-700 bg-opacity-10 p-8 rounded-lg max-w-3xl w-full text-white">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold mb-4 mr-3">About </h1>
            <h1 className="text-3xl font-bold mb-4 text-[#00df9a]">
              ScholarsPhare
            </h1>
          </div>
          <p className="mb-4">
            Welcome to ScholarsPhare, your gateway to academic success and
            career advancement. At ScholarsPhare, we believe in empowering
            students to reach their fullest potential by providing a
            comprehensive platform for showcasing their talents, exploring
            educational opportunities, and accessing valuable resources.
          </p>
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="mb-4">
            Our mission at ScholarsPhare is to revolutionize the way students
            navigate their academic journey. We aim to democratize access to
            education by providing a user-friendly platform where students can
            discover personalized opportunities tailored to their unique
            strengths, interests, and aspirations.
          </p>
          <h2 className="text-xl font-bold mb-2">What We Offer</h2>
          <p className="mb-4">
            <span className="font-bold">Portfolio Showcase:</span> ScholarsPhare
            offers students a dedicated space to showcase their academic
            achievements, extracurricular activities, projects, and research
            endeavors.
          </p>
          <p className="mb-4">
            <span className="font-bold">University Recommendations:</span>{" "}
            Finding the right university can be a daunting task. With
            ScholarsPhare's advanced recommendation system, students can
            discover universities that align with their academic profile,
            location preferences, and standardized test scores such as IELTS and
            SAT.
          </p>
          <p className="mb-4">
            <span className="font-bold">Professor Suggestions:</span> Building
            meaningful connections with professors is crucial for academic
            success and research opportunities. ScholarsPhare helps students
            connect with professors who share their research interests and
            academic goals.
          </p>
          <p className="mb-4">
            <span className="font-bold">PhD Funding Opportunities:</span>{" "}
            Pursuing a Ph.D. can be financially challenging, but ScholarsPhare
            is here to support your academic ambitions. Our platform provides
            valuable insights into Ph.D. funding opportunities, scholarships,
            grants, and research assistantships based on your research interests
            and academic achievements.
          </p>
          <div className="flex justify-center">
            <button onClick={handleBack} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-[#3b9c7d] ">
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

export default About;
