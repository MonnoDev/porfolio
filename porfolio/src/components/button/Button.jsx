import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ children, url }) => {
  return (
    <Link to={url} target="_blank" download>
      <button className="custom-button">{children}</button>
    </Link>
  );
};

export default Button;
