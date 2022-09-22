import "./topbar.scss";
import { Mail } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SK
          </a>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>https://github.com/shabana89</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>shabanakauser89@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
