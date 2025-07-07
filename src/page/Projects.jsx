import LetsWorkTogether from "../components/LetsWorkTogether";
import FloatingNavbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import RecentProjects from "../components/RecentProjects";

function Projects() {
  return (
    <>
      <FloatingNavbar />
      <div className="container mx-auto px-2 sm:px-4">
        <div
          id="top"
          className="flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-20 pt-[100px] lg:pt-40"
        >
          <div className="w-full sm:w-auto flex justify-center">
            <ProfileCard />
          </div>
          <div className="w-full sm:max-w-[50%]">
            <RecentProjects isHead={true} />
            <LetsWorkTogether />
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
