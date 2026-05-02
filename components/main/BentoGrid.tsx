"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconCode,
  IconDeviceDesktop,
  IconServer,
  IconRobot,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function BentoGridThird() {
  return (
    // Added relative and z-[20] to ensure it sits above the StarsCanvas
    <div className="relative z-20 w-full pb-20">
      <BentoGrid className="max-w-6xl mx-auto px-4 lg:px-0 md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Full-Stack Web Dev (Chat Bubbles)
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-24 flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-[#7042f88b]/50 p-2 items-center space-x-2 bg-white/5 backdrop-blur-sm"
      >
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 shrink-0" />
        <div className="w-full bg-white/10 h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-[#7042f88b]/50 p-2 items-center space-x-2 w-3/4 ml-auto bg-white/5 backdrop-blur-sm"
      >
        <div className="w-full bg-white/10 h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-[#7042f88b]/50 p-2 items-center space-x-2 bg-white/5 backdrop-blur-sm"
      >
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-[#e59cff] to-[#9cb2ff] shrink-0" />
        <div className="w-full bg-white/10 h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

// Lightweight Desktop Apps (Loading Bars)
const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-24 flex-col space-y-2 justify-center"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row rounded-full border border-[#7042f88b]/30 p-2 items-center space-x-2 bg-white/5 w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

// Infrastructure (Animated Gradient modified to match Hero text gradient)
const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-24 rounded-lg flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #a855f7, #06b6d4, #712fff, #3c087e)", // Match purple to cyan
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

// Real-Time AI Integration (Glassmorphism Cards)
const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-24 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white/5 backdrop-blur-sm p-4 border border-[#7042f88b]/50 flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-white/10 flex items-center justify-center">🎤</div>
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-400 mt-4">
          Audio Stream Initiated
        </p>
        <p className="border border-[#7042f88b]/30 bg-white/5 text-gray-300 text-xs rounded-full px-2 py-0.5 mt-4">
          Listening
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-[#b49bff] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(113,47,255,0.3)]">
        <div className="rounded-full h-10 w-10 bg-purple-500/20 flex items-center justify-center">⚙️</div>
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          Faster-Whisper Processing...
        </p>
        <p className="border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs rounded-full px-2 py-0.5 mt-4">
          Active
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white/5 backdrop-blur-sm p-4 border border-[#7042f88b]/50 flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-white/10 flex items-center justify-center">📝</div>
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-400 mt-4">
          Document Transcribed
        </p>
        <p className="border border-[#7042f88b]/30 bg-white/5 text-gray-300 text-xs rounded-full px-2 py-0.5 mt-4">
          Saved
        </p>
      </motion.div>
    </motion.div>
  );
};

// Localized Tech Solutions
const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-24 flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-[#7042f88b]/50 p-2 items-start space-x-2 bg-white/5 backdrop-blur-sm"
      >
        <div className="rounded-full h-10 w-10 bg-white/10 flex shrink-0 items-center justify-center text-lg">🤔</div>
        <p className="text-xs text-gray-400 mt-1">
          How do we build a coding platform specifically for the Malaysian market?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-[#7042f88b]/50 p-2 items-center justify-end space-x-2 w-11/12 ml-auto bg-white/5 backdrop-blur-sm"
      >
        <p className="text-xs text-white">Bina dalam Bahasa Melayu. 🇲🇾</p>
        <div className="h-6 w-6 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

// Shared glassmorphism class for all bento items
// Copied box-shadow from your .Welcome-box
const glassmorphismClass = "bg-transparent! backdrop-blur-sm! border-[#7042f88b] text-white hover:shadow-none!";

const items = [
  {
    title: <span className="text-white">Full-Stack Development</span>,
    description: (
      <span className="text-sm text-gray-400">
        Crafting complete digital experiences from the ground up. I bridge the gap between intuitive user interfaces and robust, scalable backend systems.
      </span>
    ),
    header: <SkeletonOne />,
    className: `md:col-span-1 ${glassmorphismClass}`,
    icon: <IconCode className="h-4 w-4 text-[#b49bff]" />,
  },
  {
    title: <span className="text-white">Desktop Applications</span>,
    description: (
      <span className="text-sm text-gray-400">
        Building native, cross-platform software. My focus is on creating fast, lightweight applications that run smoothly without draining system resources.
      </span>
    ),
    header: <SkeletonTwo />,
    className: `md:col-span-1 ${glassmorphismClass}`,
    icon: <IconDeviceDesktop className="h-4 w-4 text-[#b49bff]" />,
  },
  {
    title: <span className="text-white">Cloud & Infrastructure</span>,
    description: (
      <span className="text-sm text-gray-400">
        Taking code from local development to the real world. I handle server management, deployment pipelines, and maintaining reliable hosting environments.
      </span>
    ),
    header: <SkeletonThree />,
    className: `md:col-span-1 ${glassmorphismClass}`,
    icon: <IconServer className="h-4 w-4 text-[#b49bff]" />,
  },
  {
    title: <span className="text-white">AI & Real-Time Systems</span>,
    description: (
      <span className="text-sm text-gray-400">
        Exploring the intersection of artificial intelligence and everyday software. I love building smart, real-time tools that automate workflows and solve complex problems.
      </span>
    ),
    header: <SkeletonFour />,
    className: `md:col-span-2 ${glassmorphismClass}`,
    icon: <IconRobot className="h-4 w-4 text-[#b49bff]" />,
  },
  {
    title: <span className="text-white">Community-Driven Tech</span>,
    description: (
      <span className="text-sm text-gray-400">
        Passionate about building inclusive platforms. I strive to create digital solutions that break language barriers and serve local community needs.
      </span>
    ),
    header: <SkeletonFive />,
    className: `md:col-span-1 ${glassmorphismClass}`,
    icon: <IconWorld className="h-4 w-4 text-[#b49bff]" />,
  },
];