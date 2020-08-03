import React from "react";

function ProjectImage(props) {
  return (
    <div className="col-lg-5">
      <img
        src={props.image}
        className="rounded mx-auto d-block img-fluid img-thumbnail imgsize"
        alt={props.title}
      />
    </div>
  );
}

export default ProjectImage;
