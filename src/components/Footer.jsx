import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="textFooter">
        Desafio Final React 1<br />
        Jonathan Lopez Burgos G41
      </p>
      <a
        href="https://github.com/burgosuc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </footer>
  );
};

export default Footer;
