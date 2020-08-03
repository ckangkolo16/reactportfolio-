import React from "react";

function ContentWrapper(props) {
  return <div className="col-lg-5">{props.children}</div>;
}

export default ContentWrapper;
