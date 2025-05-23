import React from "react";
import arrowIcon from "../assets/Arrow-mobile.png";
import githubLogo from "../assets/githubLogo.svg";

const Projects = () => {
  const projects = [
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1748009484/qfqisz7khlp5zhq7yscj_a1t2a2.jpg",
      title: "Interactive rating component",
      description:
        "Teamed up with a designer to breathe life into a user-friendly platform that lets visitors quickly rate products, services, or content using intuitive interactive elements  making feedback fast, engaging, and easy to collect.",
      year: "2025",
      role: "Front-End Developer",
      liveDemo: "https://samadeola1.github.io/Interactive-rating-component/",
      githubLink:
        "https://github.com/samadeola1/Interactive-rating-component.git",
    },
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1747787413/projectImg2_wz3xdk.svg",
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
      year: "2025",
      role: "Front-End Developer",
      liveDemo: "https://samadeola1.github.io/News-Homepage-proj-7/",
      githubLink: "https://github.com/samadeola1/News-Homepage-proj-7.git",
    },
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1748010425/Screenshot_2025-05-23_at_3.24.10_PM_qds6e2.png",
      title: "E-commerce Burger Website",
      description:
        "I designed and developed a responsive e-commerce website for a burger brand, focusing on user-friendly navigation and a visually appetizing interface. The site features an interactive menu with customizable burger options, a streamlined ordering process, and secure checkout. Emphasis was placed on mobile optimization and a modern aesthetic to enhance user experience and drive online sales.",
      year: "2025",
      role: "Fullstack Developer",
      liveDemo: "https://eggys-place-project-flame.vercel.app/",
      githubLink: "https://github.com/samadeola1/eggys-place-project.git",
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7] pb-14"
    >
      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-[30px] md:text-[40px] font-Bebas font-bold uppercase text-[#FFFFFF]">
          FEATURED PROJECTS
        </h2>
        <p className="text-[16px]  md:text-[18px] font-Manrope text-[#C7C7C7] mt-4 break-words">
          Here are some of the selected projects that showcase my passion for
          fullstack development.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-start gap-8"
          >
            {/* Left: Project Card */}
            <div className="bg-[#1A1A1A] rounded-lg shadow-md w-full lg:w-1/2 py-16 px-8">
              <img
                src={project.Image}
                alt={project.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Right: Project Details */}
            <div className="flex flex-col gap-4 lg:w-1/2 font-Manrope">
              <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[#C7C7C7] break-words">
                {project.description}
              </p>
              <p className="text-sm md:text-base text-[#FFFFFF]">
                {project.info}
              </p>
              <div className="flex flex-col gap-4 text-sm md:text-base text-[#FFFFFF] border-b border-[#C7C7C7] pb-4">
                <span className="font-bold uppercase border-b border-[#C7C7C7] pb-2">
                  Project Info
                </span>
                <div className="flex justify-between items-center border-b border-[#C7C7C7] pb-2">
                  <span className="font-light">Year</span>
                  <span className="text-[#C7C7C7]">{project.year}</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="font-light">Role</span>
                  <span className="text-[#C7C7C7]">{project.role}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4 pb-8">
                <a
                  href={project.liveDemo}
                  className="flex uppercase items-center gap-2 text-[#D3E97A]  font-bold hover:underline"
                  target="_blank"
                >
                  Live Demo
                  <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
                </a>
                <a
                  href={project.githubLink}
                  className="flex uppercase items-center gap-2 text-[#D3E97A] font-bold hover:underline"
                  target="_blank"
                >
                  See on GitHub
                  <img src={githubLogo} alt="GitHub Logo" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
