import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SK
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>07760903081</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>shabanakauser89@gmail.com</span>
          </div>
        </div>
        <div className="right"> This is right</div>
      </div>
    </div>
  );
}

export default Topbar;
