import React from "react";
import Connect from "../features/Connect";
import dotIcon from "../assets/dot-icon.png";
import downloadArrow from "../assets/Download-Arrow.svg.png";
import linkedinIcon from "../assets/linkedinLogo.svg";
import githubIcon from "../assets/githubLogo.svg";
import profilePictureDesktop from "../assets/heroimg-main.jpg";
import profilePictureMobile from "../assets/heroimg-main.jpg";

const AboutMe = () => {
  return (
    <section className="px-4 py-20 md:px-20 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
        {/* Left: Large "ABOUT ME" */}
        <div className="text-[#F5F5F5] font-Bebas text-[40px] animate__animated animate__backInLeft lg:text-[80px] leading-none lg:mb-40">
          ABOUT ME
        </div>

        {/* Right: Header, Paragraph, and Links */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <h2 className="text-[26px] md:text-[24px]  text-[#FFFFFF]">
            I am a Fullstack developer based in Lagos. Has Chemical Engineering
            background.
          </h2>
          <p className="text-[18px] md:text-base text-[#C7C7C7] leading-relaxed">
            I’m a full-stack web developer based in Lagos with a background in
            Chemical Engineering. I specialize in building scalable, end-to-end
            web applications — from crafting responsive front-end interfaces to
            developing robust back-end systems. I’m particularly focused on
            writing clean, accessible code and creating seamless user
            experiences. Currently, I’m deepening my skills in React.js,
            Webflow, and modern design practices to bring even more value to my
            projects. When I’m not coding, I enjoy playing video games and
            football. I’m driven by curiosity and always looking to push my
            skills to the next level.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#D3E97A] text-[#0A0A0A] font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-[#c2d86a] uppercase transition-all">
              Download Resume
              <img
                src={dotIcon}
                alt="Dot Icon"
                className="w-2 h-2 bg-black rounded-full hidden md:block"
              />
              <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center md:hidden ">
                <img
                  src={downloadArrow}
                  alt="arrow"
                  className="w-4 h-4 md:hidden"
                />
              </div>
            </button>
            <a
              href="https://www.linkedin.com/in/samuel-orogun-59ba87362/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3E97A] font-bold hover:underline"
            >
              <img src={linkedinIcon} alt="linkdeln" />
            </a>
            <a
              href="https://github.com/samadeola1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3E97A] font-bold hover:underline"
            >
              <img src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="mt-12 md:flex py-12 justify-center">
        <img
          src={profilePictureDesktop}
          alt="Profile"
          className="object-cover h-[1300px] w-[1100px] hidden  md:block shadow-lg"
        />
        {/* Mobile Image */}
        <img
          src={profilePictureMobile}
          alt="Profile Mobile"
          className=" w-full md:hidden shadow-lg"
        />
      </div>

      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-16 md:px-4  border-b border-[#C7C7C7]">
        <div className="text-[#F5F5F5] font-Bebas text-[30px] md:text-[40px] lg:text-[60px]  leading-none mb-4">
          MY CAPABILITIES
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 ">
          <p className="text-[16px] font-Manrope text-[#C7C7C7] leading-relaxed">
            I am always lookng forward to add more skills to my
            portfolio.systems. I’m particularly focused on writing clean,
            accessible code and creating seamless user experiences. Currently,
            I’m deepening my skills in React.js, Webflow, and modern design
            practices to bring even more value to my projects.
          </p>
          <div className="text-[16px] text-white leading-">
            <div className="flex flex-wrap gap-4 text-[#FFFFFF] mb-4 font-Manrope">
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px]">
                HTML
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px]">
                CSS
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px]">
                JAVASCRIPT
              </h1>

              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px] lg:mt-0">
                JQUERY
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px] lg:mt-0">
                ACCESSIBILITY
              </h1>

              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px] lg:mt-0">
                FIGMA
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-6 py-2 text-[14px] lg:mt-0">
                TAILWIND CSS
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-12 md:px-4 border-b border-[#C7C7C7]">
        <div className="text-[#F5F5F5] font-Bebas text-[30px] md:text-[60px] lg:text-[60px] leading-none mb-4">
          MY EXPERIENCE
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <div className="mb-5">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-[18px] text-[#FFFFFF]">
                Fullstack Developer Trainee
              </h2>
              <h2 className="text-[16px] text-[#C7C7C7]">
                Nov 2024 - April 2025
              </h2>
            </div>
            <div>
              <p className="text-[16px] text-[#C7C7C7] leading-relaxed">
                I’ve worked on dynamic, user-focused web applications, handling
                both front-end development with tools like React.js and Tailwind
                Css, and back-end logic to ensure performance and scalability. I
                prioritize accessibility, clean code, and seamless user
                experiences.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-[18px] text-[#FFFFFF]">Fullstack Intern</h2>
              <h2 className="text-[16px] text-[#C7C7C7]">May 2025 - Present</h2>
            </div>
            <a href="https://techstudioacademy.com/" target="_blank">
              <h3 className="text-[#D3E97A]">Tech Studio Academy</h3>
            </a>

            <p className="text-[16px] text-[#C7C7C7] leading-relaxed pt-4">
              I’ve been actively developing my skills as a full-stack developer
              through hands-on tasks and real-world projects. I’ve been assigned
              time-bound challenges that test both my technical ability and time
              management. By consistently meeting deadlines and delivering
              quality work, I’ve demonstrated strong problem-solving skills and
              a solid understanding of both front-end and back-end development.
              My performance has earned me a promotion to the next stage of the
              program, reflecting my growth, commitment, and readiness to take
              on more advanced responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}

      <Connect />
    </section>
  );
};

export default AboutMe;
