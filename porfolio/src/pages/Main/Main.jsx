import { Link } from "react-router-dom";
import { mainPageRoutes } from "../../routes/const";
import "./Main.css";

const Main = () => {
  return (
    <div className="pageWrapper">
      <div className="mainInfo">
        <div className="mainInfoContainer">
          <h3>KAMILE TOLEIKYTE</h3>
        </div>
        <div className="mainInfoContainer">
          <p>Front-end developer</p>
        </div>
        <div className="mainInfoContainer">
          <p>
            Currently looking for an internship opportunity as a Web developer
          </p>
        </div>
      </div>
      <div className="mainRoutes">
        {mainPageRoutes.map((mainPageItems) => (
          <Link to={mainPageItems.route} key={mainPageItems.title}>
            {mainPageItems.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
