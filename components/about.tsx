"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software Engineer</span>, I decided to
        push my self to <span className="font-medium">Game Developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        people's reaction and ideas. I <span className="underline">love</span>{" "}
        the feeling of seeing the comments and reactions. My core stack is{" "}
        <span className="font-medium">Unity, Unreal</span>. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a game
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and play table tennis. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Unity DOTS</span>. I'm also
        trying to learn guitar.
      </p>
    </motion.section>
  );
}
