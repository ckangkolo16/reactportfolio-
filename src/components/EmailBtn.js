import React from "react";

function EmailBtn() {
  return (
    <div className="col-lg-6">
      <a href="mailto:ckangkolo16@yahoo.com">
        <button
          type="button"
          className="btn btn-info btn-circle btn-xl float-left"
        >
          <i className="far fa-envelope"></i>
        </button>
      </a>
      &nbsp;&nbsp;
      <h5>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="text-secondary" href="mailto:ckangkolo16@yahoo.com">
          ckangkolo16@yahoo.com
        </a>
      </h5>
    </div>
  );
}

export default EmailBtn;
