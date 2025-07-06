import React from "react";

const StatBlock = ({ value, label1, label2 }) => (
  <div>
    <div className="text-white font-semibold text-[70px] leading-[84px]">
      {value}
    </div>
    <div className="text-[16px] leading-[25.2px] text-[#998f8f]">{label1}</div>
    <div className="text-[16px] leading-[25.2px] text-[#998f8f]">{label2}</div>
  </div>
);

const HeroSection = () => {
  return (
    <>
      <div id="home" className="text-white font-bold text-[94px] leading-[94px]">
        SOFTWARE
      </div>
      <div className="font-bold text-[94px] leading-[94px] text-[#b6b4bd33]">
        ENGINEER
      </div>

      <p className="mt-4 text-[20px] leading-[25.2px] text-[#998f8f] font-normal w-[80%]">
        Committed to the philosophy of life-long learning. Passionate about
        architecting ideas into products that are robust, intuitive, and
        scalable.
      </p>

      <div className="mt-20 flex gap-12">
        <StatBlock value="+3" label1="YEARS OF" label2="EXPERIENCE" />
        <StatBlock value="+26" label1="PROJECTS" label2="COMPLETED" />
        <StatBlock value="+8" label1="AWARDS" label2="RECEIVED" />
      </div>
    </>
  );
};

export default HeroSection;
