import LetsWorkTogether from "../components/LetsWorkTogether";
import FloatingNavbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import RecentProjects from "../components/RecentProjects";
import WorkExp from "../components/WorkExp";

function Projects() {
  return (
    <>
      <FloatingNavbar />
      <div className="container mx-auto px-4">
        <div id="top" className="flex w-full justify-center gap-20 pt-40">
          <ProfileCard />
          <div className="max-w-[50%]">
            <RecentProjects isHead={true} />
            <LetsWorkTogether />
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
