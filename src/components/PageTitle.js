import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTitle(props) {
  const location = useLocation();
  const [title, setTitle] = useState();
  let page = location.pathname;

  useEffect(() => {
    changeTitleState(page);
  }, [page]);

  function changeTitleState(page) {
    switch (page) {
      case "/":
        setTitle("About Me");
        break;
      case "/portfolio":
        setTitle("Portfolio");
        break;
      case "/contact":
        setTitle("Contact");
        break;
      default:
        setTitle("Error");
        break;
    }
  }

  return (
    <div className="content">
      <div className="container my-3 p-3 border border border-info bg-light">
        <div className="d-flex row">
          <div className="align-items-baseline col-lg-12 text-info">
            <h1 className="display-4 text-center text-lg-left">{title}</h1>
          </div>
        </div>
        <hr className="my-3" />
        {props.children}
      </div>
    </div>
  );
}

export default PageTitle;
