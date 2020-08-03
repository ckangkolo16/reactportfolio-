import React from "react";
import Resume from "../assets/docs/Resume.pdf";

function DocLinks() {
  return (
    <ul className="list-unstyled">
      <li>
        <a href={Resume}>
          <button type="button" className="btn btn-info rounded">
            <i className="far fa-file">&nbsp;</i>
            Resume
          </button>
        </a>
      </li>{" "}
      <br />
      <li>
        <a href="https://github.com/ckangkolo16">
          <button type="button" className="btn btn-info rounded">
            <i className="fab fa-github">&nbsp;</i>
            Github
          </button>
        </a>
      </li>{" "}
      <br />
      <li>
        <a href="https://www.linkedin.com/in/chobu-nkolo-kangkolo-08608b1a4/">
          <button type="button" className="btn btn-info rounded">
            <i className="fab fa-linkedin-in">&nbsp;</i>
            LinkedIn
          </button>
        </a>
      </li>
    </ul>
  );
}

export default DocLinks;
