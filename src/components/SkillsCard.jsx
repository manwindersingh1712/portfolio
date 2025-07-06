import React from "react";

const skillCards = [
    {
      title: "DYNAMIC ANIMATION,\nMOTION DESIGN",
      icon: "/skills/orange-layer.png",
      bgColor: "bg-[#f46c38]",
      pattern: "bg-[url('/skills/orange-layer.png')]",
      textColor: "text-white",
      arrowHoverColor: "text-[#f46c38]",
    },
    {
      title: "FRAMER, FIGMA,\nWORDPRESS, REACTJS",
      icon: "/skills/green-layer.png",
      bgColor: "bg-[#c8ff4d]",
      pattern: "bg-[url('/skills/green-layer.png')]",
      textColor: "text-black",
      arrowHoverColor: "text-black",
    },
  ];
  

const SkillCards = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-10">
      {skillCards.map((card, idx) => (
        <div
          key={idx}
          className={`relative w-[280px] h-[200px] p-5 rounded-xl overflow-hidden ${card.bgColor} ${card.pattern} bg-no-repeat bg-cover shadow-md`}
        >
          <img src={card.icon} alt="icon" className="w-6 h-6 mb-4" />

          <h3
            className={`whitespace-pre-line font-bold text-lg ${card.textColor}`}
          >
            {card.title}
          </h3>

          <div className="absolute bottom-4 right-4">
          <button
            className={`
                group w-8 h-8 flex items-center justify-center border-2 rounded-md
                border-current transition-all duration-200 cursor-pointer
                hover:bg-white
                ${card.textColor}
            `}
            >
            <i
                className={`
                fa-solid fa-arrow-right transition-all duration-200
                group-hover:${card.arrowHoverColor}
                `}
            ></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
