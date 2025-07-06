import LetsWorkTogether from "../components/LetsWorkTogether";
import FloatingNavbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import WorkExp from "../components/WorkExp";

function Experience() {
  return (
    <>
      <FloatingNavbar />
      <div className="container mx-auto px-4">
        <div id="top" className="flex w-full justify-center gap-20 pt-40">
          <ProfileCard />
          <div className="max-w-[50%]">
            <WorkExp isHead={true} />
            <LetsWorkTogether />
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
