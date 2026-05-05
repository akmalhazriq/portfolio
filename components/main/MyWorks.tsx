"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRightIcon, BriefcaseIcon, GlobeAltIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export default function MyWorks() {
  const [openTooltipId, setOpenTooltipId] = useState<number | null>(null);

  const projects = [
    // --- TOP TIER: High Complexity, SaaS, AI, and Enterprise Tech ---
    {
      id: 1,
      title: "Secure Mark",
      image: "/projects/secure-mark.jpg",
      description:
        "A secure document watermarking service that allows users to protect their documents with watermarks, enhanced security, restricted document access and real-time tracking. It features easy integration and utilizes advanced watermarking techniques to ensure document security and traceability.",
      tags: [
        "React",
        "Python",
        "NextJS",
        "TailwindCSS",
        "TypeScript/JavaScript",
        "Node.js",
        "PostgreSQL",
        "ClickHouse",
        "Cloudflare R2",
        "Monaco Editor",
        "Better Auth",
      ],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 2,
      title: "Smart AI",
      image: "/projects/smart-ai.jpg",
      description:
        "AI-powered meeting platform that generates documentation, enables live collaboration and supports real-time audio/video with transcription. It features a user-friendly interface and utilizes AI to enhance meeting productivity and collaboration.",
      tags: [
        "React",
        "NextJS",
        "TailwindCSS",
        "OpenAI",
        "PostgreSQL",
        "Better Auth",
        "Whisper",
        "Socket.io",
      ],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 3,
      title: "Pulse Assist",
      image: "/projects/pulse-assist.jpg",
      description:
        "An AI-driven customer chat support service that developers can easily integrate into their websites. It features a user-friendly interface and utilizes AI to provide accurate and helpful responses to customer inquiries, improving customer satisfaction and reducing response times.",
      tags: [
        "React",
        "NextJS",
        "TailwindCSS",
        "OpenAI",
        "PostgreSQL",
        "Better Auth",
        "Stripe",
      ],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 4,
      title: "AI Powered Document Generator (Docuref)",
      image: "/projects/docuref.jpg",
      description:
        "A modern document generation platform built with Next.js, Convex, and Stripe. Generate professional documents using AI with subscription-based access control.",
      tags: [
        "Next.js",
        "Convex",
        "Google Generative AI",
        "Clerk",
        "Stripe",
        "TailwindCSS",
        "React",
      ],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 5,
      title: "SPM Exam Tracking",
      image: "/projects/spm-tracking.jpg",
      description:
        "A web application by Media Smart Resources Sdn Bhd designed to help students track their SPM exam preparation. It features a user-friendly interface for managing study schedules, tracking progress and accessing study resources.",
      tags: [
        "React",
        "NextJS",
        "TailwindCSS",
        "PostgreSQL",
        "Node.js",
        "Prisma",
        "Better Auth",
      ],
      status: "In Progress",
      visibility: "public",
    },

    // --- MID-HIGH TIER: Advanced Mobile, Real-Time Desktop, & Systems Engineering ---
    {
      id: 6,
      title: "Wedding Lab",
      image: "/projects/weddinglab.jpg",
      description:
        "A web application designed to help couples plan their wedding. It features a user-friendly interface for managing guest lists, managing table, public gallery, tracking budgets and accessing wedding planning resources.",
      tags: ["React", "NextJS", "TailwindCSS", "Supabase", "Clerk", "Stripe"],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 7,
      title: "Realtime Code Collaboration Tool (Code Suite)",
      image: "/projects/code-suite.jpg",
      description:
        "A real-time code collaboration tool that allows multiple users to edit and share code simultaneously, with features like syntax highlighting and version control.",
      tags: [
        "Electron",
        "TailwindCSS",
        "React",
        "Node.js",
        "Socket.io",
        "CodeMirror",
      ],
      status: "Completed",
      visibility: "public",
    },
    {
      id: 8,
      title: "Bosch CCS1000d Simulator",
      image: "/projects/bosch-sim.jpg",
      description:
        "A simulator for the Bosch CCS1000d, designed to mimic the functionality of the actual device for testing and development purposes. It features a user-friendly interface and accurate simulation of the device's behavior.",
      tags: ["QML", "C++", "Qt", "OpenGL"],
      status: "Completed",
      visibility: "public",
    },
    {
      id: 9,
      title: "Jom Ride",
      image: "/projects/jom-ride.jpg",
      description:
        "An application designed to help users see public transportation routes and schedules in Malaysia. It features a user-friendly interface for managing routes, tracking schedules, real-time updates and accessing transportation resources.",
      tags: ["React Native", "TypeScript", "Expo", "Firebase", "Stripe"],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 10,
      title: "My Deen",
      image: "/projects/my-deen.jpg",
      description:
        "A mobile application designed to help users track their daily religious practices and activities. It features a user-friendly interface for managing prayer times, Quran reading and other religious obligations.",
      tags: [
        "React Native",
        "TypeScript",
        "Expo",
        "Supabase",
        "Clerk",
        "TailwindCSS",
      ],
      status: "In Progress",
      visibility: "private",
    },

    // --- MID TIER: Official/Academic Web Apps & Localized Solutions ---
    {
      id: 11,
      title: "Internship Portal (UiTM Final Year Project)",
      image: "/projects/internship-portal.jpg",
      description:
        "A web-based internship portal designed for students to find and apply for internships. Companies can post opportunities and manage applications. Featuring a user-friendly interface and comprehensive search functionality.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      status: "Completed",
      visibility: "private",
    },
    {
      id: 12,
      title: "APM Calibration System",
      image: "/projects/apm-calibration.jpg",
      description:
        "A management system for APM Calibration, built for managing calibration data including designed for gamma, x-ray and coontamination radiation sources.",
      tags: ["Vue.js", "Node.js", "Express", "Firebase"],
      status: "Completed",
      visibility: "private",
    },
    {
      id: 13,
      title: "Robotic Competition Management System",
      image: "/projects/robotic-management.jpg",
      description:
        "A comprehensive system for managing robotic competitions, including registration, scheduling and scoring.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      status: "Completed",
      visibility: "private",
    },
    {
      id: 14,
      title: "Matchanies",
      image: "/projects/matchanies.jpg",
      description:
        "A ordering application created for matcha business in UiTM Kedah to help them manage their orders and customers. It features a user-friendly interface for both customers and business owners, allowing for easy order placement and management.",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      status: "Completed",
      visibility: "public",
    },

    // --- LOWER TIER: Utilities, Simple Apps, and Discontinued Projects ---
    {
      id: 15,
      title: "Mobile Todo App (Onido)",
      image: "/projects/onido.jpg",
      description:
        "A mobile application for managing daily tasks and to-dos, with features like reminders and categorization.",
      tags: ["React Native", "Firebase", "JavaScript", "Expo"],
      status: "Completed",
      visibility: "private",
    },
    {
      id: 16,
      title: "Music Player (Trilti)",
      image: "/projects/trilti.jpg",
      description:
        "A desktop music player application with a sleek interface and support for various audio formats and also can stream youtube/spotify.",
      tags: ["Electron", "React", "JavaScript", "Node.js"],
      status: "Completed",
      visibility: "private",
    },
    {
      id: 17,
      title: "Custom Browser (Axel)",
      image: "/projects/axel.jpg",
      description:
        "A custom web browser built using Electron, featuring a unique user interface and enhanced privacy features.",
      tags: ["Electron", "React", "JavaScript", "Node.js"],
      status: "In Progress",
      visibility: "private",
    },
    {
      id: 18,
      title: "AI Powered Website Builder (Nessuz)",
      image: "/projects/nessuz.jpg",
      description:
        "An AI-powered website builder that allows users to create professional websites with ease. It features a user-friendly interface and utilizes AI to generate content and design suggestions based on user input.",
      tags: [
        "React",
        "NextJS",
        "TailwindCSS",
        "OpenAI",
        "Supabase",
        "Clerk",
        "Stripe",
        "GrapesJS",
      ],
      status: "Discontinued",
      visibility: "public",
    },
    {
      id: 19,
      title: "Customized VSCode (Zyde)",
      image: "/projects/zyde.jpg",
      description:
        "A customized version of Visual Studio Code with a unique theme, unique view options and modern design.",
      tags: ["VSCode", "Electron", "TailwindCSS", "TypeScript", "Node.js"],
      status: "Discontinued",
      visibility: "public",
    },
  ];

  return (
    <div
      className="my-8 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8"
      id="my-works"
    >
      <div className="text-center flex flex-col items-center gap-4">
        <motion.div className="Welcome-box py-2 px-4 border border-[#7042f88b] flex justify-center md:justify-start mx-auto md:mx-0">
          <BriefcaseIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Works</h1>
        </motion.div>

        <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Checkout my featured <br />{" "}
          <motion.span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
            projects
          </motion.span>{" "}
          and{" "}
          <motion.span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
            skills
          </motion.span>
          .
        </motion.h2>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative bg-white/5 backdrop-blur-sm roounded-3xl overflow-hidden border border-white/10 cursor-pointer rounded-lg space-y-4"
          >
            <motion.div className="relative overflow-hidden mb-0!">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-112.5 object-cover"
              />
              <motion.div className="absolute inset-0 bg-linear-to-r from-black-60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></motion.div>
            </motion.div>

            <motion.div className="absolute top-4 left-4 right-4 text-sm">
              <motion.div className="flex flex-row justify-between items-center">
                <motion.div className="rounded-full py-1.5 px-3 bg-black/20 backdrop-blur-sm border-t border-white/10 flex flex-row items-center justify-center">
                  <motion.div className={`w-2 h-2 rounded-full ` + (project.status === "In Progress" ? "bg-yellow-500" : "") + (project.status === "Completed" ? "bg-green-500" : "") + (project.status === "Discontinued" ? "bg-red-500" : "")} />
                  <motion.span className="ml-2 text-white font-medium">{project.status}</motion.span>
                </motion.div>
                <motion.div className="rounded-full p-2 bg-bp-1.50 backdrop-blur-sm border-t border-white/10 flex flex-row items-center justify-center">
                  {project.visibility === "public" ? (
                    <GlobeAltIcon className="h-5 w-5  text-white" />
                  ) : (
                    <LockClosedIcon className="h-4 w-4  text-white" />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="absolute bottom-4 left-4 right-4 p-3 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border-t border-white/10">
              <motion.div className="flex flex-wrap mb-3">
                {project.tags.slice(0, 3).map((tagText, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white/10 text-white text-xs py-1 px-3 rounded-full mr-2 mb-2"
                  >
                    {tagText}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <div
                    className="relative inline-block"
                    onMouseEnter={() => setOpenTooltipId(project.id)}
                    onMouseLeave={() => setOpenTooltipId(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTooltipId(
                        openTooltipId === project.id ? null : project.id,
                      );
                    }}
                  >
                    <span className="inline-block bg-white/10 text-white text-xs py-1 px-3 rounded-full mr-2 mb-2 cursor-pointer">
                      +{project.tags.length - 3} more
                    </span>
                    {openTooltipId === project.id && (
                      <div className="absolute bottom-full left-0 mb-2 flex flex-wrap w-48 bg-[#1a1a2e] border border-[#7042f88b] p-2 rounded-lg z-100 shadow-xl">
                        {project.tags.slice(3).map((tagText, index) => (
                          <span
                            key={index}
                            className="inline-block bg-white/10 text-white text-[10px] py-1 px-2 rounded-full mr-1 mb-1"
                          >
                            {tagText}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
              
              <motion.div className="flex flex-row justify-between items-center">
                <h3 className="text-white text-lg font-bold">
                  {project.title}
                </h3>
                <button>
                  <ArrowUpRightIcon className="h-3.5 w-3.5  text-white" />
                </button>
              </motion.div>

              <motion.div className="text-white/80 text-sm pt-2 line-clamp-3">
                {project.description}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
