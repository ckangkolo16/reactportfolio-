import React from "react";
import RowContainer from "./RowContainer";
import ColSpacer from "./ColSpacer";

function ProjectBtns(props) {
  return (
    <RowContainer>
      <ColSpacer />
      <div className="col-7">
        <a href={props.github}>
          <button type="button" className="btn btn-info rounded">
            <i className="fab fa-github">&nbsp;</i>
            Github
          </button>
        </a>
      </div>
      <div className="col-4">
        <a href={props.deployed ? props.deployed : props.demo}>
          <button type="button" className="btn btn-info rounded">
            <i className={props.deployed ? "far fa-eye" : "fab fa-youtube"}>
              &nbsp;
            </i>
            {props.deployed ? "Deployed" : "Demo"}
          </button>
        </a>
      </div>
    </RowContainer>
  );
}

export default ProjectBtns;
