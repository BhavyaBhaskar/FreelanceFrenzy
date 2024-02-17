import FeaturedProject from "../Components/FeaturedProject";
import HeroSection from "../Components/HeroSection";
import Testimonials from "../Components/Testimonials";
import UserProfileCard from "../Components/UserProfileCard";
import "./Home.css";

function Home() {
  return (
    <div className="bg">
      <HeroSection />
      <FeaturedProject />
      <UserProfileCard />
      <Testimonials />
    </div>
  );
}

export default Home;
