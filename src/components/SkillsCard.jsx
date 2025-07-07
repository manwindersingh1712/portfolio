import React from "react";

const skillCards = [
  {
    title: "SCALING SYSTEMS\nManaging Millions",
    icon: "/skills/orange-layer.png",
    bgColor: "bg-[#f46c38]",
    pattern: "bg-[url('/skills/orange-layer.png')]",
    textColor: "text-white",
    arrowHoverColor: "group-hover:text-[#f46c38]",
    link: "https://medium.com/@manwinder-sng/scaling-gracefully-handle-millions-of-records-using-message-queues-5683d06d8adc",
  },
  {
    title: "WEB-BASED PORTFOLIO \nOPERATING SYSTEM (2020)",
    icon: "/skills/green-layer.png",
    bgColor: "bg-[#c8ff4d]",
    pattern: "bg-[url('/skills/green-layer.png')]",
    textColor: "text-black",
    arrowHoverColor: "group-hover:text-black",
    link: "https://manwindersingh1712.github.io/portfolio.os/",
  },
];

const SkillCards = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
      {skillCards.map((card, idx) => (
        <div
          key={idx}
          className={`relative w-full sm:w-[280px] h-[200px] p-4 sm:p-5 rounded-xl overflow-hidden ${card.bgColor} ${card.pattern} bg-no-repeat bg-cover shadow-md text-center sm:text-left`}
        >
          <span className={`text-3xl ${card.textColor}`}>
            <i className="fa-solid fa-layer-group"></i>
          </span>
          <h3
            className={`whitespace-pre-line font-bold text-base pt-8 sm:text-lg ${card.textColor}`}
          >
            {card.title}
          </h3>

          <div className="absolute bottom-4 right-4">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="group"
            >
              <button
                className={`
                  w-8 h-8 flex items-center justify-center border-2 rounded-md
                  border-current transition-all duration-200 cursor-pointer
                  hover:bg-white
                  ${card.textColor}
                `}
                aria-label="Learn more"
              >
                <i
                  className={`
                    fa-solid fa-arrow-right transition-all duration-200
                    ${card.arrowHoverColor}
                  `}
                ></i>
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
