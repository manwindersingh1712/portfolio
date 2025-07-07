import LetsWorkTogether from "../components/LetsWorkTogether";
import FloatingNavbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import WorkExp from "../components/WorkExp";

function Experience() {
  return (
    <>
      <FloatingNavbar />
      <div className="container mx-auto px-4">
        <div
          id="top"
          className="flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-20 pt-[100px] lg:pt-40"
        >
          {" "}
          <div className="flex justify-center lg:justify-start">
            <ProfileCard />
          </div>
          <div className="w-full lg:max-w-[50%]">
            <WorkExp isHead={true} />
            <LetsWorkTogether />
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
