import HeroSection from "../../components/home/HeroSection";
import PopularServices from "../../components/home/PopularServices";
import HowItWorks from "../../components/home/HowItWorks";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import FeaturedBusinesses from "../../components/home/FeaturedBusinesses";
import StatsSection from "../../components/home/StatsSection";
import Testimonials from "../../components/home/Testimonials";
import BecomePartner from "../../components/home/BecomePartner";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <PopularServices />
      <HowItWorks />
      <WhyChooseUs />
      <FeaturedBusinesses />
      <StatsSection />
      <Testimonials />
      <BecomePartner />
    </main>
  );
};

export default Home;
