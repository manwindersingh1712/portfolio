import React from "react";
import myImage from "../../public/manwinder3.png";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center max-h-max sticky top-[140px]">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-xl px-4 py-4 text-center min-w-[344px] h-[456px] md:min-h-[640px] md:px-6 md:py-5">
        <div className="w-[240px] h-[210px] md:h-[284px] mx-auto mb-4 md:mb-6 rounded-xl overflow-hidden shadow-md">
          <img
            src={myImage}
            alt="Manwinder Singh"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>

        <h2 className="text-[24px] md:text-[30px] font-bold leading-[32px] md:leading-[39.6px] text-black mt-4 md:mt-6">
          Manwinder Singh
        </h2>

        <p className="text-[15px] md:text-[17px] leading-[22px] md:leading-[25px] font-medium text-gray-600 mt-6 md:mt-24">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <div className="flex justify-center gap-6 mt-6 md:mt-8">
          <SocialIcon
            href="https://www.linkedin.com/in/manwinder-singh-615057185/"
            icon="linkedin"
            color="rgb(244, 108, 56)"
            label="Linkedin"
          />
          <SocialIcon
            href="https://github.com/manwindersingh1712"
            icon="github"
            color="rgb(244, 108, 56)"
            label="Github"
          />
          <SocialIcon
            href="https://docs.google.com/document/d/1HiPtaF7VAW0uPQj6PGwrzY4KwjX1y-9mFpk6kKn8kF8/edit?usp=sharing"
            icon="file"
            color="rgb(244, 108, 56)"
            label="Resume"
          />
          <SocialIcon
            href="mailto:manwindersingh1712@gmail.com"
            icon="envelope"
            color="rgb(244, 108, 56)"
            label="Email"
          />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon, color, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="transition-colors duration-200 p-2 rounded-full hover:bg-[rgba(244,108,56,0.1)]"
    style={{ color }}
  >
    <i
      className={
        icon === "envelope" || icon === "file"
          ? `fa-solid fa-${icon} text-2xl`
          : `fab fa-${icon} text-2xl`
      }
    ></i>
  </a>
);

export default ProfileCard;
