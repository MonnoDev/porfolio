import { MAIN_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import "./About.css";

const About = () => {
  return (
    <div>
      <Link to={MAIN_ROUTE}>Home</Link>
      <div className="aboutContainer">
        <h3>About me:</h3>
        <p>
          As a former veterinarian, I am excited to pursue a career in web
          development with an interest in UX/UI design. With a strong foundation
          in problem-solving, attention to detail, and project management from
          my previous roles, I am eager to bring my skills and enthusiasm to a
          dynamic team focused on creating digital solutions.
        </p>
        <Button
          children="My CV"
          url="file:///C:/Users/Kamile/Downloads/Kamil%C4%97_Toleikyt%C4%97_-_%20(2).pdf"
        />
      </div>
    </div>
  );
};

export default About;
