import React from "react";

function NavWrapper(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-info sticky-top">
      <div className="container px-0">{props.children}</div>
    </nav>
  );
}

export default NavWrapper;
