import GreenWallSection from "./components/GreenWallSection/GreenWallSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ImagesSection from "./components/ImagesSection/ImagesSection";
import "./index.scss";
import Image from "next/image";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <main>
    <HeroSection />
    <GreenWallSection />
    <ImagesSection />
    <div className="references">
      <div className="title">Referenciák</div>
      <div className="slider">
        <div className="reference-container">
          <img className="reference-img" src="/ref_1.png" />
          <div className="reference-text">
            <div className="text-container">
              <div className="city">Budaörs</div>
              <div className="text-title">Budaörs</div>
            </div>
            <div className="arrow">
              <button>
                <Image src="/arrow.svg" alt="Arrow" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Home;
