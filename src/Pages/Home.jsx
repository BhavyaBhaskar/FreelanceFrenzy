import FeaturedProject from "../Components/FeaturedProject";
import HeroSection from "../Components/HeroSection";
import Testimonials from "../Components/Testimonials";
import UserProfileCard from "../Components/UserProfileCard";

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProject />
      <UserProfileCard />
      <Testimonials />
    </div>
  );
}

export default Home;
