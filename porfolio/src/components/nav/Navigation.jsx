import { Link, useLocation } from "react-router-dom";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { socials, MAIN_ROUTE } from "../../routes/const";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname !== MAIN_ROUTE;

  return (
    <nav>
      {isHomePage ? (
        <Link to={MAIN_ROUTE}>
          <GoHome />
        </Link>
      ) : (
        socials.map((social) => (
          <Link to={social.route} key={social.title}>
            {social.title === "LI" ? (
              <RiLinkedinLine />
            ) : social.title === "GIT" ? (
              <RiGithubLine />
            ) : (
              social.title
            )}
          </Link>
        ))
      )}
    </nav>
  );
};

export default Navigation;
