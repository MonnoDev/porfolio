import { MAIN_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Link to={MAIN_ROUTE}>Home</Link>
      <div className="contactContainer">
        <h3>Hello</h3>
        <p>If you would like ,me to build and design your project, hit me!</p>
        <p>Email:</p>
        <p>On the internet</p>
      </div>
    </div>
  );
};

export default Contact;
