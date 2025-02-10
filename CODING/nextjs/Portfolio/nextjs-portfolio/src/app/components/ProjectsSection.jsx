"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BabjiJada/Portfolio-Babji-Jada.git",
    previewUrl: "https://github.com/BabjiJada/Portfolio-Babji-Jada.git",
  },
  {
    id: 2,
    title: "Railway Management System",
    description: "The Railway Management System is a full-stack web application designed to streamline railway operations, including ticket booking, train scheduling, and passenger management. Built with HTML, CSS, PHP, and MySQL, this system offers an intuitive user interface that ensures a seamless experience for both passengers and railway staff.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BabjiJada/Railway-Management-System-using-Php.git",
    previewUrl: "https://github.com/BabjiJada/Railway-Management-System-using-Php.git",
  },
  {
    id: 3,
    title: "Automated Code Reviewer & PR Analysis Tool",
    description: "The Automated Code Reviewer & PR Analysis Tool is a React and Next.js-based web application designed to streamline and automate the process of reviewing pull requests (PRs). Leveraging the GitHub API and Python-based natural language processing (NLP) techniques, this tool scans PRs in real-time to identify potential issues, ensuring higher code quality and faster review cycles.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "High-Performance URL Shortener",
    description: "The High-Performance URL Shortener is a scalable service built with Java (Spring Boot), PostgreSQL, Redis, and Docker, designed to handle millions of concurrent requests with high availability and low latency. This URL shortening service allows users to create short, shareable links while providing valuable insights into user interactions and traffic patterns.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
