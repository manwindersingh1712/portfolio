import React from "react";

const workHistory = [
  {
    title: "PriceLabs",
    subtitle:
      "Built scalable systems processing 200K+ daily data points. Developed Revenue Estimator Pro and system profiling tools to optimize API performance. Architected experimentation infrastructure for the growth team to help reduce churn.",
    link: "https://hello.pricelabs.co/",
    from: "AUG 2022",
    to: "Present",
  },
  {
    title: "UviHealth",
    subtitle:
      "Led responsive website revamp, increasing traffic by 60%. Built scalable checkout flows, internal webinar tools, and a real-time meeting app for seamless collaboration. Implemented event tracking to enhance visibility into user engagement.",
    link: "https://uvihealth.in/",
    from: "OCT 2021",
    to: "JULY 2022",
  },
  {
    title: "Codingal",
    subtitle:
      "Contributed to launching instant trial classes, increasing sign-ups by 30%. Gamified user dashboards to enhance engagement. Helped design a competition system that drew 400+ users with a 90% submission rate.",
    link: "https://www.codingal.com/",
    from: "MAR 2021",
    to: "JULY 2021",
  },
  {
    title: "PlacementSaga ( now GoodSpace )",
    subtitle:
      "Built secure user registration and payment systems, enabling 1000+ PlacementSaga signups. Migrated the official website from a drag and drop website, significantly improving performance and user experience.",
    link: "https://www.codingal.com/competitions/",
    from: "DEC 2020",
    to: "FEB 2021",
  },
];

const WorkExp = ({ isHead = false }) => {
  return (
    <div id="experience" className={isHead ? "mb-15" : "pt-20 mb-15"}>
      <div className="text-white font-bold text-[94px]  leading-[94px]">
        3 YEARS OF
      </div>
      <div className="font-bold text-[94px]  leading-[94px] text-[#b6b4bd33]">
        EXPERIENCE
      </div>

      <div className="flex flex-col mt-10">
        {workHistory.map(({ title, subtitle, from, to, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between group rounded-2xl w-[95%] px-[16px] py-[20px] hover:bg-white/5 transition-colors duration-350 ease-in-out"
          >
            <div className="flex items-center gap-5">
              <div>
                <h3 className="text-[26px] leading-[25.2px] text-white font-semibold">
                  {title}
                </h3>
                <p className="text-[16px] leading-[25.2px] text-[#998f8f] mt-3">
                  {subtitle}
                </p>
                <p className="text-[16px] leading-[25.2px] text-[#998f8f] mt-6">
                  {from} - {to}
                </p>
              </div>
            </div>
            <span
              className="relative top-4 right-2 transition-all duration-300 ease-in-out group-hover:-top-1 group-hover:-right-1"
              style={{ color: "rgb(244, 108, 56)" }}
            >
              <i class="fa-solid fa-arrow-up-right-from-square text-[15px]"></i>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
