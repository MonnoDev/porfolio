import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProjectCards.css";

const ProjectCards = ({ image, title, githubLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <Link to={githubLink} className="card-link">
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCards;
