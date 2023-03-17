import WishlistSection from './WishlistSection/WishlistSection';
import HeroSection from './HeroSection/HeroSection';
import SlideShowSection from './SlideShowSection/SlideShowSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <WishlistSection />
      <SlideShowSection />
      <FeaturesSection />
    </main>
  );
};

export default LandingPage;
