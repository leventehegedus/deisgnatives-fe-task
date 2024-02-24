import Header from "./Header";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => (
  <div className="hero-container">
    <Header />
    <div className="content-container">
      <div className="title">
        <p>Zöldfalakat</p>
        <p>tervezünk, építünk</p>
        <p>és karbantartunk</p>
      </div>
      <div className="description">
        Hazánk egyik legnagyobb élőfalakkal foglalkozó vállalkozása vagyunk, 15
        év tapasztalattal.
      </div>
      <button>
        Azonnali ajánlatot szeretne?
        <img src="/arrow.svg" alt="Arrow" />
      </button>
    </div>
  </div>
);

export default HeroSection;
