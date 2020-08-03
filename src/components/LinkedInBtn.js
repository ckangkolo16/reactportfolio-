import React from "react";

function LinkedInBtn() {
  return (
    <div className="col-lg-6">
      <a href="https://www.linkedin.com/in/chobu-nkolo-kangkolo-08608b1a4/">
        <button
          type="button"
          className="btn btn-info btn-circle btn-xl float-left"
        >
          <i className="fab fa-linkedin-in"></i>
        </button>
      </a>
      &nbsp;&nbsp;
      <h5>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className="text-secondary"
          href="https://www.linkedin.com/in/chobu-nkolo-kangkolo-08608b1a4/"
        >
          Let's Network on LinkedIn
        </a>
      </h5>
    </div>
  );
}

export default LinkedInBtn;
