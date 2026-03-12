import Hero from './sections/Hero';
import Comparison from './sections/Comparison';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Comparison />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default HomePage;