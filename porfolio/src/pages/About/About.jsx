import { MAIN_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to={MAIN_ROUTE}>Home</Link>
      <p>About me:</p>
    </div>
  );
};

export default About;
