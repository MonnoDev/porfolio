import { MAIN_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Link to={MAIN_ROUTE}>Home</Link>
      <p>Projects:</p>
      <p>Project links</p>
    </div>
  );
};

export default Projects;
