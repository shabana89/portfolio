import "./porfolio.scss";
import { portfolioProjects } from "../../data.js";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {portfolioProjects.map(({ id, title, img, alt, link }) => {
        return (
          <div className="container">
            <div key={id} className="item">
              <a href={link}>
                <img src={img} alt={alt} />
              </a>
              <h3>{title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
