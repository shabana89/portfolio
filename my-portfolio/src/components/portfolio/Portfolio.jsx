import "./porfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
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
