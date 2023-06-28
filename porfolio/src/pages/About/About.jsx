import Button from "../../components/button/Button";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="aboutContainer">
        <h3>About me</h3>
        <p>
          As a former veterinarian, I am excited to pursue a career in web
          development with an interest in UX/UI design. With a strong foundation
          in problem-solving, attention to detail, and project management from
          my previous roles, I am eager to bring my skills and enthusiasm to a
          dynamic team focused on creating digital solutions.
        </p>
        <Button
          children="My CV"
          url="https://drive.google.com/file/d/1hOzKBb41N-u9zEJXQP-FpNYzA2ouPwb4/view?usp=drive_link"
        />
      </div>
    </div>
  );
};

export default About;
