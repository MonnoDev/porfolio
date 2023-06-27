import { Link } from "react-router-dom";
import { socials } from "../../routes/const";

const Navigation = () => {
  return (
    <div>
      {socials.map((social) => (
        <Link to={social.route} key={social.title}>
          {social.title}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
