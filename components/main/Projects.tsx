import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-16"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
        <ProjectCard
          src="/food-landing.png"
          title="Food Delivery"
          description="Food Delivery using Ract.js, Bootstrap CSS"
        />
        <ProjectCard
          src="/weather.png"
          title="Weather App"
          description="Weather App Using React.js, BootStrap CSS, Weather Api"
        />
      </div>
    </div>
  );
};

export default Projects;
