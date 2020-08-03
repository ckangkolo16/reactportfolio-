import React from "react";

function ProjectContent(props) {
  return (
    <div className="text-center mt-3">
      <h3 className="text-info">
        <u>{props.title}</u>
      </h3>
      <br />
      <div className="text-secondary">{props.description}</div>
      <br />
      <div className="text-secondary">
        <em>
          {props.languages.map((languages, index, arr) => {
            if (index === arr.length - 1) {
              return languages;
            } else {
              return languages + " | ";
            }
          })}
        </em>
      </div>
      <br />
    </div>
  );
}

export default ProjectContent;
