import { MAIN_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to={MAIN_ROUTE}>Home</Link>
      <p>Hello</p>
      <p>My contact links, maybe a form</p>
    </div>
  );
};

export default Contact;
