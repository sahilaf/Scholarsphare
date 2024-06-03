import React, { useEffect } from "react";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const COLORS_TOP = ["#00DF9A", "#004D73"];

const handleGetStarted = () => {
  window.location.href = "/Register";
};

export const Landing = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className=" overflow-hidden bg-gray-950 ">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <Navbar/>
      <Hero/>
    </motion.section>
  );
};
