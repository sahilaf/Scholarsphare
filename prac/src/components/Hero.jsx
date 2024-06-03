import React from "react";
import { ReactTyped, Typed } from "react-typed";
const Hero = () => {

  const handleGetStarted = () => {
    window.location.href = "/Register";
  };
  return (
    <div className="text-white bg-[COVER]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          UNLOCK YOUR ACADEMIC FUTURE
        </p>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-2xl font-semibold py-4">
            Discover
          </p>
          <ReactTyped
            backSpeed={50}
            onBegin={function noRefCheck() {}}
            onComplete={function noRefCheck() {}}
            onDestroy={function noRefCheck() {}}
            onLastStringBackspaced={function noRefCheck() {}}
            onReset={function noRefCheck() {}}
            onStart={function noRefCheck() {}}
            onStop={function noRefCheck() {}}
            onStringTyped={function noRefCheck() {}}
            onTypingPaused={function noRefCheck() {}}
            onTypingResumed={function noRefCheck() {}}
            strings={["Scholarships", "PhD Funding"]}
            typeSpeed={50}
            typedRef={function noRefCheck() {}}
            loop
            className="md:text-5xl sm:text-4xl text-2xl font-bold py-4 pl-4"
          />
        </div>
        <p className="md:text-5xl sm:text-4xl text-xl font-semibold py-4">
          with SCHOLARSPHARE!
        </p>
        <p className="md:text-2xl text-xl font-bold py-4 text-[#547C97]">
          Master Your Path, Fund Your Journey
        </p>
        <button onClick={handleGetStarted} className="p-[3px] relative w-[200px] rounded-md font-medium my-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-lg" />
          <div className="px-6 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ">
            Get started
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;

//#CDF6FF
//#004D73
//#547C97
//#00DF9A
