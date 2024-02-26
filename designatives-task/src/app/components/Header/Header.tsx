import "./Header.scss";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <div className="mobile-view">
        <button className="hamburger-icon">
          <Image src="/nav.svg" alt="Logo" height={30} width={26} />
        </button>
      </div>
      <Image
        src="/logo.svg"
        className="desktop-view"
        alt="Logo"
        height={80}
        width={158}
      />
      <Image
        src="/logo.svg"
        className="mobile-view mobile-logo"
        alt="Logo"
        height={74}
        width={147}
      />
      <div className="desktop-view">
        <div className="content">
          <div className="links">
            <div>Rólunk</div>
            <div>Zöldfalak</div>
            <div>Referenciák</div>
            <div>Kapcsolat</div>
          </div>
          <button>Azonnali ajánlat</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
