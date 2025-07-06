import Blogs from "../components/Blogs";
import HeroSection from "../components/HeroSection";
import LetsWorkTogether from "../components/LetsWorkTogether";
import FloatingNavbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import RecentProjects from "../components/RecentProjects";
import SkillCards from "../components/SkillsCard";
import TechArsenal from "../components/TechArsenal";
import WorkExp from "../components/WorkExp";

function Home() {
  return (
    <>
      <FloatingNavbar />
      <div className="container mx-auto px-4">
        <div id="top" className="flex w-full justify-center gap-20 pt-40">
          <ProfileCard />
          <div className="max-w-[50%]">
            <HeroSection />
            <SkillCards />
            <RecentProjects />
            <WorkExp />
            <TechArsenal />
            <Blogs />
            <LetsWorkTogether />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
