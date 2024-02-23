import "./index.scss";

export default function Home() {
  const renderImgBlocks = (title: string, imgSrc: string) => {
    return (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="title-container">
          <div className="title">{title}</div>
          <button>
            <img src="/arrow.svg" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <main>
      <div>
        <nav>
          <div>Rólunk</div>
          <div>Zöldfalak</div>
          <div>Referenciák</div>
          <div>Kapcsolat</div>
          <button>Azonnali ajánlat</button>
        </nav>
        <h1>Zöldfalakat tervezünk, építünk és karbantartunk</h1>
        <div>
          Hazánk egyik legnagyobb élőfalakkal foglalkozó vállalkozása vagyunk,
          15 év tapasztalattal.
        </div>
        <button>Azonnali ajánlatot szeretne?</button>
      </div>
      <div>Mi az a zöldfal?</div>
      <div>
        Bel/kültéren, függőlegesen telepített élő növények flórája. A
        járófelületből csupán 1m2 területre 300-600db növény is ültethető, ezzel
        hatalmas oxigén termelő, levegő tisztító és esztétikus felületet
        létrehozva.
      </div>
      <div>
        Az ország teljes területén végzünk építéseket és karbantartásokat.
        Hazánk egyik legtöbb tapasztalattal és referenciával bíró vállalkozása
        vagyunk.
      </div>
      <div className="images-container">
        {renderImgBlocks("Zöldfalaink felépítése", "img_1.png")}
        {renderImgBlocks("Zöldfalak karbantartása", "img_2.png")}
        {renderImgBlocks("Zöldfalaink karbantartása", "img_3.png")}
      </div>
      <div>Referenciáink</div>
      <div>Budaörs</div>
      <div>Decathlon</div>
      <div>Üllő</div>
      <div>Teljesen automata zöldfal</div>
      <div>Balatonszántód</div>
      <div>Balalaland</div>
    </main>
  );
}
