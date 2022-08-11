import "./Navbar.css";
import { DeveloperIcon, CSSToolsIcon } from "../../Images/index";

const Navbar = () => {
  return (
    <div className="navbar-tools">
      <div className="logo-navbar">
        <img src={CSSToolsIcon} alt="Logotipo do site - CSS Tools" />
      </div>
      <div className="page-btns-navbar">
        <h4>Gradient</h4>
        <h4>Gradient</h4>
      </div>
      <a href="" target="_blank" className="developer-icon-navbar">
        <img src={DeveloperIcon} alt="Logotipo do portfolio - Tomás Ndlate" />
      </a>
    </div>
  );
};

export { Navbar };
