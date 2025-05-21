import React from "react";
// import { useNavigate } from "react-router-dom";

const About = () => {
//   const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 py-12 md:px-20 lg:px-24">
      {/* Left: Large "ABOUT ME" */}
      <div className="text-[#F5F5F5] lg:mb-60 font-Bebas hidden md:block text-[50px] md:text-[80px] lg:text-[100px] leading-none">
        ABOUT ME
      </div>

      {/* Right: Header, Paragraph, and Button */}
      <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
        <h2 className="text-[30px] hidden md:block  text-[#FFFFFF]">
          I am a front-end developer based in Sydney. Has Mechanical Engineering
          background.
        </h2>
        <p className="text-[16px] text-[#C7C7C7] leading-relaxed">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </p>
        <button
          //   onClick={() => navigate("/about")}
          className=" text-[#D3E97A] font-bold py-3  text-left underline uppercase transition-all"
        >
          More About Me
        </button>
      </div>
    </section>
  );
};

export default About;
