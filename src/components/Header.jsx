import "../styles/Header.css";
import LogoSvg from '../assets/images/logo.svg'

const Header = () => {
  return (
    <div className="header-container">
      <nav className="header-list">
        <img src={LogoSvg} alt='Logo' />
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
