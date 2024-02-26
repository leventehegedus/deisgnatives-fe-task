import GreenWallSection from "./components/GreenWallSection/GreenWallSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ImagesSection from "./components/ImageSection";
import "./index.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <main>
    <HeroSection />
    <GreenWallSection />
    <ImagesSection />
  </main>
);

export default Home;
