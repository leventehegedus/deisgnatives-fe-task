import MenuLinks from "./MenuLinks";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <nav className="header">
    <div className="mobile-view">
      <button className="hamburger-icon">
        <img src="/nav.svg" alt="Logo" />
      </button>
    </div>
    <img src="/logo.png" alt="Logo" />
    <div className="desktop-view">
      <div className="content">
        <MenuLinks />
        <button>Azonnali ajánlat</button>
      </div>
    </div>
  </nav>
);

export default Header;
