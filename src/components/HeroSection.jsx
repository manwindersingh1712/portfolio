import React from "react";

const StatBlock = ({ value, label1, label2 }) => (
  <div className="min-w-[80px] text-center sm:text-left">
    <div className="text-white font-semibold text-[50px] sm:text-[70px] leading-[60px] sm:leading-[84px]">
      {value}
    </div>
    <div className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.2px] text-[#998f8f]">
      {label1}
    </div>
    <div className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.2px] text-[#998f8f]">
      {label2}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <div className="text-center sm:text-left">
      <div
        id="home"
        className="text-white font-bold text-[60px] sm:text-[94px] leading-[60px] sm:leading-[94px]"
      >
        SENIOR
        SOFTWARE
      </div>
      <div className="font-bold text-[60px] sm:text-[94px] leading-[60px] sm:leading-[94px] text-[#b6b4bd33]">
        ENGINEER
      </div>

      <p className="mt-4 text-[16px] sm:text-[20px] leading-[22px] sm:leading-[25.2px] text-[#998f8f] font-normal w-full sm:w-[80%] mx-auto sm:mx-0">
        Committed to the philosophy of life-long learning. Passionate about
        architecting ideas into products that are robust, intuitive, and
        scalable.
      </p>
      <div className="mt-12 sm:mt-20 flex items-center justify-center sm:justify-start gap-8 sm:gap-12">
        <StatBlock value="+4" label1="YEARS OF" label2="EXPERIENCE" />
        <StatBlock value="+26" label1="PROJECTS" label2="COMPLETED" />
        <StatBlock value="+8" label1="AWARDS" label2="RECEIVED" />
      </div>
    </div>
  );
};

export default HeroSection;
