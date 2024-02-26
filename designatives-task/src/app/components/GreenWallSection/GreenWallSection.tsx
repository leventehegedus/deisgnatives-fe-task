import "./GreenWallSection.scss";
import Image from "next/image";

const BigText: React.FC = () => (
  <div className="big-text">
    <span>
      Az ország teljes területén végzünk építéseket és karbantartásokat. Hazánk
      egyik legtöbb tapasztalattal és referenciával bíró vállalkozása vagyunk.
    </span>
  </div>
);

const GreenWallSection: React.FC = () => (
  <div className="green-wall">
    <div className="intro">
      <Image
        className="desktop-view"
        src="/arrow.svg"
        alt="Arrow"
        width={12}
        height={12}
      />
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
