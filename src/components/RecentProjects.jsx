import React from "react";

const projects = [
  {
    title: "RE Pro",
    subtitle: "Instantly estimate your short-term rental revenue",
    image: "/repro.png",
    link: "https://hello.pricelabs.co/revenue-estimator-pro/",
  },
  {
    title: "UviHealth",
    subtitle: "Empowering women to manage chronic health conditions",
    image: "/uvi.png",
    link: "https://uvihealth.in/",
  },
  {
    title: "Coding Contests",
    subtitle: "Code. Compete. Climb the leaderboard.",
    image: "/codingal.png",
    link: "https://www.codingal.com/competitions/",
  },
];

const RecentProjects = ({ isHead = false }) => {
  return (
    <div id="projects" className={isHead ? "pt-0 mb-20" : "pt-20 mb-15"}>
      <div className="text-white font-bold text-[48px] sm:text-[94px] leading-[48px] sm:leading-[94px] text-center sm:text-left">
        RECENT
      </div>
      <div className="font-bold text-[48px] sm:text-[94px] leading-[48px] sm:leading-[94px] text-[#b6b4bd33] text-center sm:text-left">
        PROJECTS
      </div>

      <div className="flex flex-col mt-10">
        {projects.map(({ title, subtitle, image, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between group rounded-2xl w-full px-[16px] py-[20px] hover:bg-white/5 transition-colors duration-350 ease-in-out"
          >
            <div className="flex items-center gap-5">
              <div className="w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] min-w-[90px] min-h-[90px] sm:min-w-[130px] sm:min-h-[130px] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-[16px] sm:text-[26px] leading-[16px] sm:leading-[25.2px] text-white font-semibold">
                  {title}
                </h3>
                <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.2px] text-[#998f8f] mt-2 sm:mt-3">
                  {subtitle}
                </p>
              </div>
            </div>
            <span
              className="hidden sm:inline relative top-4 right-2 transition-all duration-300 ease-in-out group-hover:-top-1 group-hover:-right-1 text-[#f46c38]"
              style={{ color: "rgb(244, 108, 56)" }}
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-[15px]"></i>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
