import React from "react";
import Connect from "../features/Connect";
import dotIcon from "../assets/dot-icon.png";
import downloadArrow from "../assets/Download-Arrow.svg.png"
import linkedinIcon from "../assets/linkedinLogo.svg";
import githubIcon from "../assets/githubLogo.svg";
import profilePictureDesktop from "../assets/Aboutme-IMG-desktop.png";
import profilePictureMobile from "../assets/Aboutme-IMG-mobile.png";

const AboutMe = () => {
  return (
    <section className="px-4 py-20 md:px-20 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
        {/* Left: Large "ABOUT ME" */}
        <div className="text-[#F5F5F5] font-Bebas text-[60px] animate__animated animate__backInLeft lg:text-[80px] leading-none lg:mb-40">
          ABOUT ME
        </div>

        {/* Right: Header, Paragraph, and Links */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <h2 className="text-[26px] md:text-[24px]  text-[#FFFFFF]">
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.
          </h2>
          <p className="text-[18px] md:text-base text-[#C7C7C7] leading-relaxed">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3E97A] font-bold hover:underline"
            >
              <img src={linkedinIcon} alt="linkdeln" />
            </a>
            <a
              href="https://github.com"
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
          className="object-cover hidden  md:block shadow-lg"
        />
        {/* Mobile Image */}
        <img
          src={profilePictureMobile}
          alt="Profile Mobile"
          className=" w-full md:hidden shadow-lg"
        />
      </div>

      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-16 md:px-4  border-b border-[#C7C7C7]">
        <div className="text-[#F5F5F5] font-Bebas text-[50px] md:text-[40px] lg:text-[60px]  leading-none mb-4">
          MY CAPABILITIES
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 ">
          <p className="text-[16px] font-Manrope text-[#C7C7C7] leading-relaxed">
            I am always lookng forward to add more skills to my portfolio. Morbi
            equestas neque eu blandit fermentum. Nulla ac norbotis ligula.
            Pellentesque ac ex at purus faucibus tristique ut et dolor.
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
        <div className="text-[#F5F5F5] font-Bebas text-[50px] md:text-[60px] lg:text-[60px] leading-none mb-4">
          MY EXPERIENCE
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <div className="mb-5">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-[18px] text-[#FFFFFF]">
                Freelance developer
              </h2>
              <h2 className="text-[16px] text-[#C7C7C7]">Nov 2023 - Present</h2>
            </div>
            <div>
              <p className="text-[16px] text-[#C7C7C7] leading-relaxed">
                Ullamco laboris nisi ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-[18px] text-[#FFFFFF]">Front-End Intern</h2>
              <h2 className="text-[16px] text-[#C7C7C7]">
                Sept 2023 - Nov 2023
              </h2>
            </div>
            <h3 className="text-[#D3E97A]">Roos Tech</h3>
            <p className="text-[16px] text-[#C7C7C7] leading-relaxed pt-4">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I'm exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
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
