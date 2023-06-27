import { Link } from "react-router-dom";
import { mainPageRoutes } from "../../routes/const";

const Main = () => {
  return (
    <div>
      <div>
        <p>KAMILE TOLEIKYTE</p>
        <p>Front-end develper</p>
        <p>Currently looking for a internship oportunity as a Web developer</p>
      </div>
      <div>
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
