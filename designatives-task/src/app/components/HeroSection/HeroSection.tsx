import Header from "../Header/Header";
import "./HeroSection.scss";

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
          <img src="/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
