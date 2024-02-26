interface GreenWallSectionProps {}

interface BigTextProps {}

const BigText: React.FC<BigTextProps> = () => (
  <div className="big-text">
    <span>
      Az ország teljes területén végzünk építéseket és karbantartásokat. Hazánk
      egyik legtöbb tapasztalattal és referenciával bíró vállalkozása vagyunk.
    </span>
  </div>
);

const GreenWallSection: React.FC<GreenWallSectionProps> = () => (
  <div className="green-wall">
    <div className="intro">
      <img className="desktop-view" src="/arrow.svg" alt="Arrow" />
      <div>
        <p>Mi az a zöldfal?</p>
        <br />
        <p>
          Bel/kültéren, függőlegesen telepített élő növények flórája. A
          járófelületből csupán 1m2 területre 300-600db növény is ültethető,
          ezzel hatalmas oxigén termelő, levegő tisztító és esztétikus felületet
          létrehozva.
        </p>
      </div>
    </div>
    <BigText />
  </div>
);

export default GreenWallSection;
