import heroImg from "../assets/heroImg.svg";
import arrowLogo from "../assets/Arrow-mobile.png";
import dotLogo from "../assets/dot-icon.png";
import linkedinLogo from "../assets/linkedinLogo.svg";
import githubLogo from "../assets/githubLogo.svg";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 py-8 md:px-20 lg:px-24 lg:py-12 border-b border-[#C7C7C7] pb-14">
      {/* Left Section: Text and Buttons */}
      <section className="flex flex-col items-start text-left">
        <div className="text-white lg:w-[544px] w-full h-auto mt-8 lg:mt-0">
          <h1 className="font-normal lg:text-[64px] md:text-[57px] text-[57px] leading-[90%] h-auto font-Bebas sm:mt-5">
            HI, I AM <br /> ROBERT GARCIA.
          </h1>
          <p className="lg:leading-[150%] leading-[160%] lg:text-[18px] md:text-[16px] text-[12px] h-auto font-normal font-Manrope pt-2 text-[#C7C7C7]">
            A Sydney based front-end developer passionate about building
            accessible and user-friendly websites.
          </p>
        </div>
        <div className="text-[#0A0A0A] flex gap-4 lg:w-auto w-full mt-8">
          <article className="bg-[#D3E97A] flex items-center rounded-full gap-4 px-6 py-3">
            <button className="font-Manrope text-sm lg:text-base whitespace-nowrap">
              CONTACT ME
            </button>
            <img
              className="bg-black rounded-full w-4 h-4 lg:w-3 lg:h-3 hidden lg:block"
              src={dotLogo}
              alt="dotLogo"
            />
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center lg:hidden">
              <img className="w-3 h-3" src={arrowLogo} alt="arrowLogo" />
            </div>
          </article>
          <button className="bg-[#222222] rounded-full p-3">
            <img
              className="w-5 h-5 lg:w-6 lg:h-6"
              src={linkedinLogo}
              alt="linkedinLogo"
            />
          </button>
          <button className="bg-[#222222] rounded-full p-3">
            <img
              className="w-5 h-5 lg:w-6 lg:h-6"
              src={githubLogo}
              alt="githubLogo"
            />
          </button>
        </div>
      </section>

      {/* Right Section: Hero Image */}
      <section className="mt-8 lg:mt-0 flex justify-center  lg:justify-end">
        <img
          className="w-full rounded-2xl sm:w-[300px] sm:h-[350px] md:w-[500px] md:h-[600px] object-cover"
          src={heroImg}
          alt="Hero"
        />
      </section>
    </main>
  );
};

export default Hero;
