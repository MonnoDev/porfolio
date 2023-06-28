import { MAIN_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Link to={MAIN_ROUTE}>Home</Link>
      <div className="projectsContainer">
        <h3>Projects:</h3>
        <p>Project links</p>
      </div>
    </div>
  );
};

export default Projects;
