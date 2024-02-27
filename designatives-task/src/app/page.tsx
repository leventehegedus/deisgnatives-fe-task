import GreenWallSection from "./components/GreenWallSection/GreenWallSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ImagesSection from "./components/ImagesSection/ImagesSection";
import References from "./components/References/References";
import "./index.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <main>
    <HeroSection />
    <GreenWallSection />
    <ImagesSection />
    <References />
  </main>
);

export default Home;
