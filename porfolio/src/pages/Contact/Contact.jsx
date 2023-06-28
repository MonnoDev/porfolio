import "./Contact.css";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { socials } from "../../routes/const";

const Contact = () => {
  return (
    <div>
      <div className="contactContainer">
        <h3>Hello.</h3>
        <p>
          If you would like ,me to build and design your project, hit me up!
        </p>
        <p className="email">
          <MdOutlineEmail />
          toleikytkamil500@gmail.com
        </p>
        <p className="web-links">
          On the web:
          {socials.map((social) => (
            <a href={social.route} key={social.title}>
              {social.title === "LI" ? (
                <RiLinkedinLine />
              ) : social.title === "GIT" ? (
                <RiGithubLine />
              ) : (
                social.title
              )}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Contact;
