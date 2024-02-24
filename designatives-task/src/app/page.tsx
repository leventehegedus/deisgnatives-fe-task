import GreenWallSection from "./components/GreenWall";
import HeroSection from "./components/HeroSection";
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
