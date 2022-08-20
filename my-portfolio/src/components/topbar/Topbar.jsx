import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SK
          </a>
        </div>
        <div className="right"> This is right</div>
      </div>
    </div>
  );
}

export default Topbar;
