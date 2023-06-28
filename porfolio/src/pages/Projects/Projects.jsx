import { projects } from "../../routes/const";
import ProjectCards from "../../components/projectCards/ProjectCards";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="projectsContainer">
        <h3>Projects:</h3>
        <div className="card-container">
          {projects.map((project) => (
            <ProjectCards
              key={project.id}
              image={project.image}
              title={project.title}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
