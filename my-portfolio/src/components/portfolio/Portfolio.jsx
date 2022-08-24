import PortfolioList from "../portfolioList/PortfolioList";
import "./porfolio.scss";
import { useState } from "react";

function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://sussex.news/wp-content/uploads/2022/06/realistic-coming-soon-background_23-2148889082.jpg"
            alt=""
          />
          <h3>To-do List</h3>
        </div>
        <div className="item">
          <img
            src="https://sussex.news/wp-content/uploads/2022/06/realistic-coming-soon-background_23-2148889082.jpg"
            alt=""
          />
          <h3>To-do List</h3>
        </div>
        <div className="item">
          <img
            src="https://sussex.news/wp-content/uploads/2022/06/realistic-coming-soon-background_23-2148889082.jpg"
            alt=""
          />
          <h3>To-do List</h3>
        </div>
        <div className="item">
          <img
            src="https://sussex.news/wp-content/uploads/2022/06/realistic-coming-soon-background_23-2148889082.jpg"
            alt=""
          />
          <h3>To-do List</h3>
        </div>
        <div className="item">
          <img
            src="https://sussex.news/wp-content/uploads/2022/06/realistic-coming-soon-background_23-2148889082.jpg"
            alt=""
          />
          <h3>To-do List</h3>
        </div>
        <div className="item">
          <img
            src="https://sussex.news/wp-content/uploads/2022/06/realistic-coming-soon-background_23-2148889082.jpg"
            alt=""
          />
          <h3>To-do List</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
