"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Since i was studying in my Highschool i got hooked on game development and i studied Software Development degree.
        After graduating with a degree in{" "}
        <span className="font-medium">Software Engineer</span>, I decided to
        push my self to <span className="font-medium">Game Developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        people's reaction and ideas. I <span className="underline">love</span>{" "}
        the feeling of seeing the comments and reactions. My core stack is{" "}
        <span className="font-medium">Unity, Unreal Engine</span>. I am always looking
        to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and play table tennis. I also enjoy{" "}
        <span className="font-medium">Listening</span>.
      </p>
    </motion.section>
  );
}
