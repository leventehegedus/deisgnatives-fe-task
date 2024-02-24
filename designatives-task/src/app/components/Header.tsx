import MenuLinks from "./MenuLinks";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <nav className="header">
    <img src="/logo.png" alt="Logo" />
    <div className="content">
      <MenuLinks />
      <button>Azonnali ajánlat</button>
    </div>
  </nav>
);

export default Header;
