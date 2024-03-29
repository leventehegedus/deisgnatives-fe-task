import Header from "../Header/Header";
import "./HeroSection.scss";
import Image from "next/image";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="hero-container">
      <Header />
      <div className="content-container">
        <div className="title">
          <div className="desktop-view">
            <p>Zöldfalakat</p>
            <p>tervezünk, építünk</p>
            <p>és karbantartunk</p>
          </div>
          <div className="mobile-view">
            <p>Zöldfalakat tervezünk,</p>
            <p>építünk és karbantartunk</p>
          </div>
        </div>
        <div className="description">
          Hazánk egyik legnagyobb élőfalakkal foglalkozó vállalkozása vagyunk,
          15 év tapasztalattal.
        </div>
        <button>
          <span>Azonnali ajánlatot szeretne?</span>
          <Image src="/arrow.svg" alt="Arrow" height={12} width={12} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
