import React from "react";
import aboutMeImage from "../assets/heroimg-main.jpg";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleMoreAboutMeClick = () => {
    navigate("/about-me"); // Navigate to the AboutMe page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
  };

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7] pb-14">
      {/* Left: Large "ABOUT ME" */}
      <div className="text-[#F5F5F5] lg:mb-60 font-Bebas hidden md:block text-[50px] md:text-[60px] lg:text-[80px] leading-none">
        ABOUT ME
      </div>

      {/* Right: Header, Paragraph, and Button */}
      <div className="flex flex-col py-6 gap-6 lg:w-1/2 font-Manrope">
        <h2 className="text-[30px] hidden md:block  text-[#FFFFFF]">
          I am a Fullstack developer based in Lagos. Has Chemical Engineering
          background.
        </h2>
        <p className="text-[16px] text-[#C7C7C7] leading-relaxed hidden md:block">
          I’m a full-stack web developer based in Lagos with a background in
          Chemical Engineering. I specialize in building scalable, end-to-end
          web applications — from crafting responsive front-end interfaces to
          developing robust back-end systems. I’m particularly focused on
          writing clean, accessible code and creating seamless user experiences.
          Currently, I’m deepening my skills in React.js, Webflow, and modern
          design practices to bring even more value to my projects. When I’m not
          coding, I enjoy playing video games and football. I’m driven by
          curiosity and always looking to push my skills to the next level.
        </p>
        <p className="text-[16px] text-[#C7C7C7] leading-relaxed  md:hidden">
          I am a Fullstack developer based in Lagos. Has Chemical Engineering
          background.
        </p>

        <button
          onClick={handleMoreAboutMeClick}
          className=" text-[#D3E97A] font-bold py-3  text-left cursor-pointer underline uppercase transition-all"
        >
          More About Me
        </button>

        <img className="lg:hidden" src={aboutMeImage} alt={aboutMeImage} />
      </div>
    </section>
  );
};

export default About;
