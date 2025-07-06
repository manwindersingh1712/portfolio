import React from "react";

const blogs = [
  {
    title: "A/B Testing with buckets",
    subtitle:
      "Explored how cryptographic hashing powers fair and consistent A/B testing by turning user IDs into deterministic buckets—enabling precise traffic splits, sticky experiences, and scalable experimentation across platforms with zero randomness chaos.",
    link: "https://medium.com/@manwinder-sng/how-a-b-testing-works-with-buckets-ec824f00b61e",
    date: "28 July, 25",
    timeToRed: "8 mins",
  },
  {
    title: "How to Do Great Work",
    subtitle:
      "Penned a sharp take on what it takes to do great work—chasing curiosity, spotting blind spots others miss, betting on bold ideas, and staying relentlessly consistent to build things that truly matter.",
    link: "https://medium.com/@manwinder-sng/how-to-do-great-work-ae1a659959a1",
    date: "Jun 22, 2025",
    timeToRed: "4 mins",
  },
  {
    title: "Dynamic Min-Stay Strategies",
    subtitle:
      "Authored a proactive guide on boosting revenue via dynamic minimum‑stay restrictions—covering default rules, last‑minute, far‑out, orphan‑gap, adjacent stays, and value‑based thresholds—to optimize occupancy, protect revenue, and fill booking gaps dynamically.",
    link: "https://medium.com/@manwinder-sng/unlock-higher-revenue-with-dynamic-minimum-stay-restrictions-3a8d37148590",
    date: "Nov 24, 2024",
    timeToRed: "4 mins",
  },
];

const Blogs = ({isHead = false}) => {
  return (
    <div id="blogs" className={ isHead ? "pt-0 mb-20" : "pt-20 mb-20"}>
      <div className="text-white font-bold text-[94px]  leading-[94px]">
        Shipping
      </div>
      <div className="font-bold text-[94px]  leading-[94px] text-[#b6b4bd33]">
        Thoughts
      </div>
      <div className="flex flex-col mt-10">
        {blogs.map(({ title, subtitle, date, link, timeToRed }, index) => (
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
                <p className="text-[16px] leading-[25.2px] text-[#998f8f] mt-6 flex justify-between">
                  <span>{date}</span>
                  <span>{timeToRed}</span>
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

export default Blogs;
